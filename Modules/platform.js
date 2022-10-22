function platform(props) {
    const platform = navigator.platform;
    function getPlatform(){
       const isMac = typeof window !== 'undefined' ? platform.toUpperCase().indexOf("MAC") >= 0 : false;
       const isWindows = typeof window !== 'undefined' ? platform.toUpperCase().indexOf("WIN") >= 0 : false;
       const isAndroid = typeof window !== 'undefined' ? platform.toUpperCase().indexOf("ANDROID") >= 0 : false;
       const isIOS = typeof window !== 'undefined' ? platform.toUpperCase().indexOf("IOS") >= 0 : false;

        return{
            isMac : isMac,
            isWindows : isWindows,
            isAndroid : isAndroid,
            isIOS : isIOS
        }
    }

    return {
        getPlatform
    }
}

export default platform;