import { FBServices } from "../../Modules/firebase";
const { insertEnquiry, getAllEnquiries } = FBServices();

export default function handler(req, res) {
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
      case "GETALL":
        function response(data) {
          if (data) {
            res.status(200).json(data);
          }
        }
        getAllEnquiries(response);
        break;
    }
  }
}
