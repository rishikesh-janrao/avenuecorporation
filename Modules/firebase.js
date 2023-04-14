import { initializeApp } from "firebase/app";
import { set, ref, getDatabase, onValue, remove } from "firebase/database";

export const FirebaseApp = initializeApp(process.env.firebaseConfig);
export const database = getDatabase();
export const FBServices = () => {
  //HELPERS
  const maskIpForFirebase = (ip) =>
    ip.replace(/[&\/\\#, +()$~%.'":*?<>{}]-/g, "_");
  const maskEmailForFirebase = (email) =>
    email.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "<dot>");

  //COMMANDS
  const INSERT_COMMAND = (dataToInsert, whereToInsert) =>
    set(ref(database, whereToInsert), dataToInsert);

  const GET_COMMAND = (reference, response) =>
    onValue(ref(database, reference), (snapshot) =>
      response(snapshot.exists() ? snapshot.val() : null)
    );
  const DELETE_COMMAND = (reference) => remove(ref(database, reference));

  //SERVICES
  const getActiveUsers = (response, reference = "activeusers/") =>
    GET_COMMAND(reference, response);
  const getTrackRecord = (response, reference = "activeusers/") =>
    GET_COMMAND(reference, response);

  const insertEnquiry = (enquiry, insertCompleted) => {
    getTrackRecord(insertCompleted, "tracker/" + enquiry.ip);
    return INSERT_COMMAND(
      enquiry,
      "enquiries/" + maskEmailForFirebase(enquiry.email)
    )
      .then((res) => {
        insertCompleted(res);
        console.log("Enquiry is added");
      })
      .catch((error) => {
        logError(error)
      });
  };

  const insertTrack = (track, insertCompleted) => {
    return INSERT_COMMAND(
      track,
      "tracker/" +
        (track.email.length > 1
          ? maskEmailForFirebase(track.email)
          : maskIpForFirebase(track.ip))
    )
      .then((res) => {
        if (track.ip) {
          INSERT_COMMAND(
            {
              ip: track.ip,
              domain: track.origin,
              timestamp: Date.now(),
            },
            "activeusers/" + maskIpForFirebase(track.ip)
          ).then((res) => {
            insertCompleted(res);
            console.log("active user added");
          });
        }
      })
      .catch((error) => {
        logError(error)
      });
  };
  const deleteTrack = (reference="/activeusers/", key, msg = "deleted expired active user") => {
    DELETE_COMMAND(`${reference}${key}`).then((res) => {
      console.log(msg);
    });
  };

  const getAllEnquiries = (response,reference = "enquiries/") => GET_COMMAND(reference,response);


  const logError = (error)=> INSERT_COMMAND(
    error,
    "errors/" + Date.now()
  )
    .then((res) => {
      console.log("Error is logged",res);
    })
    .catch((error) => {
      logError(error)
    });
  return {
    insertTrack,
    getActiveUsers,
    deleteTrack,
    insertEnquiry,
    getAllEnquiries,
    logError
  };
}
