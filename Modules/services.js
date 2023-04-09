const ServicesManager = () => {
  const SERVER_URL = "";

  //Init
  const setServer = (host) => {
    SERVER_URL = host;
  };
  const getServer = () => SERVER_URL;

  //helpers
  const getParameterString = (params) => {
    const keys = Object.keys(params);
    let query = params ? "?" : "";
    keys.map((key) => {
      let queryValue = params[key];
      if (key === "action") {
        queryValue = btoa(params[key]);
      }
      query = query + `&${key}=${queryValue}`;
    });
    return query;
  };

  //services
  const setTrackRecord = ({ payload, params }) => {
    return fetch(SERVER_URL + "/api/tracker" + getParameterString(params), {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  const addEnquiry = ({ payload, params }) => {
    return fetch(SERVER_URL + "/api/enquiry" + getParameterString(params), {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  

  return {
    setServer,
    getServer,
    setTrackRecord,
    addEnquiry
  };
};

export default ServicesManager;
