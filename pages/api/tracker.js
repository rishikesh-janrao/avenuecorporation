// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { FBServices } from "../../Modules/firebase";
const { insertTrack, deleteTrack, getActiveUsers } = FBServices();

import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const checkActiveUsers = setInterval(() => {
  function response(data) {
    if (data)
      Object.keys(data).map((key) => {
        const { timestamp } = data[key];
        const IsExpired = (Date.now() - timestamp) / 1000 / 60 >= 1;
        if (IsExpired) {
          deleteTrack(key);
        }
      });
  }
  getActiveUsers(response);
}, 60000);

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { action } = req.query;
  const parsedAction = atob(action);
  if (req.body) {
    const { timestamp: t, clientData } = req.body;

    switch (parsedAction) {
      case "ADD":
        //POST CALL
        const insertCompleted = (response) => {
          return res.status(200).json({ status: "tracked", ...response });
        };
        insertTrack(clientData, insertCompleted);
    }
  }
  if (parsedAction === "REQUEST_ACTIVE_USERS") {
    // GET CALL
    function response(data) {
      let activeUsers = {
        avenuepacks: 0,
        avenuecorporation: 0,
      };
      if (data) {
        Object.keys(data).map((key) => {
          if (key) {
            if (data[`${key}`].domain === "avenue-packs") {
              activeUsers.avenuepacks++;
            } else if (data[`${key}`].domain === "avenue-corporation") {
              activeUsers.avenuecorporation++;
            }
          }
        });

        return res.status(200).json(activeUsers);
      } else {
        return res.status(200).json({ STATUS: "NO_ACTIVE_USERS" });
      }
    }

    getActiveUsers(response);
  }
}
