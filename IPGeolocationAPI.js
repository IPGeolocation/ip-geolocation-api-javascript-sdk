var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');

module.exports = class IPGeolocationAPI {


    constructor(apiKey = "") {
        this.apiKey = apiKey;
    }

    getApiKey() {
        return this.apiKey;
    }

    getGeolocation(params = null) {
        if(params.getIps())
        { return postRequest("ipgeo-bulk", params, this.apiKey);
         }else{
          return getRequest("ipgeo", buildGeolocationUrlParams(params, this.apiKey));
         }
    }
     
    getTimezone(params = null) {
        return getRequest("timezone", buildTimezoneUrlParams(params, this.apiKey));
    }


}


function buildTimezoneUrlParams(params=null, apiKey="") {
        var urlParams = "apiKey=" + apiKey;

        if(params != null) {
            var param = params.getIp();
            if(param && param != "") {
                urlParams = urlParams + "&ip=" + param;
            }

            param = params.getTimezone();
            if(param && param != "") {
                urlParams = urlParams + "&tz=" + param;
            }

            var latitude = params.getLatitude();
            var longitude = params.getLongitude();
            if(latitude && latitude != 1000.0 && longitude && longitude != 1000.0) {
                urlParams = urlParams + "&lat=" + latitude + "&long=" + longitude;
            }
        }
        return urlParams;
}



function buildGeolocationUrlParams(params=null, apiKey="") {
        
        var urlParams = "apiKey=" + apiKey;
        if(params != null) {
            var param = params.getIp();
           
            if(param && param != "") {
                urlParams = urlParams + "&ip=" + param;
            }

            param = params.getFields();
        
            if(param && param != "") {
                urlParams = urlParams + "&fields=" + param;
            }
        }

        return urlParams;
}





function getRequest(subUrl = "", params = ""){

var jsonData = null;
var data = null;


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
if (this.readyState === 4) {

            jsonData = JSON.parse(this.responseText);
}
});
console.log("https://api.ipgeolocation.io/"+subUrl+"?"+params+"");
xhr.open("GET", "https://api.ipgeolocation.io/"+subUrl+"?"+params+"", false);
xhr.send(data);

return jsonData;

}




function postRequest(subUrl = "", params = "", apiKey=""){

var jsonData = null; 
var data = JSON.stringify({
  "ips": params.getIps()
});
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
if (this.readyState === 4) {
            jsonData = JSON.parse(this.responseText);
}
});
xhr.open("POST", "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"", false);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
return jsonData;

}

