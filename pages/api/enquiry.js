import { FBServices } from "../../Modules/firebase";
const { insertEnquiry, getAllEnquiries } = FBServices();
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
      const { action } = req.query;
      const parsedAction = atob(action);
      if (req.body) {
        const { timestamp: t, clientData } = req.body;

        switch (parsedAction) {
          case "ADD":
            //POST CALL
            const insertCompleted = (response) => {
              res.status(200).json({ status: "tracked", ...response });
            };
            insertEnquiry(clientData, insertCompleted);
            break;
        }
      }

      if (parsedAction === "GETALL") {
        function response(data) {
          if (data) {
            let list = [];
            Object.keys(data).map((key) => {
              list.push(data[key]);
            });
            res.status(200).json(list);
          }
        }
        getAllEnquiries(response);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
}
