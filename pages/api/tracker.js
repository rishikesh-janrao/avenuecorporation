// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");
try {
  if (fs.existsSync("tracker.json")) {
    fs.readFile("tracker.json", "utf8", function (err, data) {
      if (!data) {
        fs.writeFileSync(
          "tracker.json",
          JSON.stringify({
            history: [],
          })
        );
      }
    });
  } else {
    fs.writeFileSync(
      "tracker.json",
      JSON.stringify({
        history: [],
      })
    );
  }
} catch (err) {
  console.error(err);
}


export default function handler(req, res) {
  const { action } = req.query;
  const parsedAction = atob(action);
  if (req.body) {
    const { timestamp: t, clientData } = req.body;

    switch (parsedAction) {
      case "ADD":
        //POST CALL
        fs.readFile("tracker.json", "utf8", function (err, data) {
          const trackerData = JSON.parse(data);
          let found = false;
          trackerData.history.find(({ timestamp, ip }) => {
            if (ip === clientData.ip) {
              timestamp.push(t);
              found = true;
            }
          });
          if (!found) {
            let timestamp = [t];
            let data = {
              ...clientData,
              timestamp,
            };
            trackerData.history.push(data);
          }
          fs.writeFileSync("tracker.json", JSON.stringify(trackerData));
          res.status(200).json({ status: "tracked" });
        });
        break;
      case "UPDATE":
        //POST CALL
        fs.readFile("tracker.json", "utf8", function (err, data) {
          const trackerData = JSON.parse(data);
          trackerData.history.find((track) => {
            if (track.ip === clientData.ip) {
              track.name = clientData.name;
              track.email = clientData.email;
            }
          });
          fs.writeFileSync("tracker.json", JSON.stringify(trackerData));
          res.status(200).json({ status: "updated" });
        });
        break;
    }
  }
  if (parsedAction === "REQUEST") {
    // POST GET CALL
    fs.readFile("tracker.json", "utf8", function (err, data) {
      const trackerData = JSON.parse(data);
      res.status(200).json(trackerData);
    });
  }
}
