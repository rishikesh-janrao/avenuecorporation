const fs = require("fs");
try {
  if (fs.existsSync("./entrees.json")) {
    fs.readFile("entrees.json", "utf8", function (err, data) {
      if (!data) {
        fs.writeFileSync(
          "entrees.json",
          JSON.stringify({
            enquiries: [],
          })
        );
      }
    });
  } else {
    fs.writeFileSync(
      "entrees.json",
      JSON.stringify({
        enquiries: [],
      })
    );
  }
} catch (err) {
  console.error(err);
}

export default function handler(req, res) {
  const { action } = req.query;
  const parsedAction = atob(action);
  if (req.method === "POST") {
    if (req.body) {
      const { email } = req.body;
      if (parsedAction === "ADD") {
        fs.readFile("entrees.json", "utf8", function (err, data) {
          if (data) {
            const { enquiries } = JSON.parse(data);
            let found = false;
            enquiries.find((entry) => {
              if (entry.email === email) {
                entry = req.body;
                found = true;
              }
            });
            if (!found) {
              enquiries.push(req.body);
            }
            fs.writeFileSync(
              "entrees.json",
              JSON.stringify({
                enquiries,
              })
            );
            res.status(200).json({ status: "added" });
          }
          if (err) {
            console.log(err);
          }
        });
      }
    }
  }
  //   else if(req.method === "GET"){

  //   }
}
