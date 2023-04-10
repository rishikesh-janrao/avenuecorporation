const ThirdPartyServices = () =>{

    const getLocationData = async () => {
        try {
          let data = await fetch("https://1.1.1.1/cdn-cgi/trace").then(
            (res) => res.text()
          );
          let arr = data
            .trim()
            .split("\n")
            .map((e) => e.split("="));
          return Object.fromEntries(arr);
        } catch (err) {
          console.log(err);
        }
      };

    return{
        getLocationData
    }
}

export default ThirdPartyServices;