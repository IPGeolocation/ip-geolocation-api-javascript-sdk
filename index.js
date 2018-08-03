exports.Ipgeo = function Ipgeo(apiKey){

this.apiKey = apiKey;

this.ipgeoByFieldsAndIp = function(fields="" ,ip="") {
getRequest("ipgeo", this.apiKey, fields, ip, "");
};

this.ipgeoByFields = function(fields="") {
getRequest("ipgeo", this.apiKey, fields, "", "");
};

this.ipgeoByIp = function(ip="") {
getRequest("ipgeo", this.apiKey, "", ip, "");
};
 
this.ipgeoByApikey = function(){
getRequest("ipgeo", this.apiKey, "", "", "")
};

this.ipgeoByIps = function(ips=""){
postRequest("ipgeo-bulk", this.apiKey, ips);
};

}



exports.Timezone = function Timezone(apiKey){

this.apiKey = apiKey;
this.timezoneByIp = function(ip="") {
getRequest("timezone", this.apiKey, "", ip, "");
}

this.timezoneByApikey = function() {
getRequest("timezone", this.apiKey, "", "", "");
}

this.timezoneByTz = function(tz="") {
getRequest("timezone", this.apiKey, "", "", tz);
}

}


function getRequest(subUrl=null, apiKey="", fields="", ip="", tz=""){

var URL = "";
if(apiKey){
    URL = subUrl;
    URL = URL + ("?apiKey=" + apiKey);
    if(fields){
    URL = URL + "&fields=";
    URL = URL + fields;
    }
    if(ip){
    URL = URL + "&ip=";
    URL = URL + ip;
    }
    if(tz){
    URL = URL + "&tz=";
    URL = URL + tz;
    }

    }
var data = null;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            return data;
  }
});
xhr.open("GET", "https://api.ipgeolocation.io/"+URL+"");
xhr.send(data);
}

function postRequest(subUrl=null, apiKey="", ips=""){

var data = JSON.stringify({
  "ips": ips
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            return data;
  }
});

xhr.open("POST", "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);

}



