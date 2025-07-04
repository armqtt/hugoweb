document.getElementById("this-year").innerHTML = new Date().getFullYear();

var vid = document.getElementById("coverVideo");
if(vid != undefined){
    // vid.autoplay = true;
    // vid.load();
    vid.play();
}

if(document.getElementById("my-domain") != undefined){
    document.getElementById("my-domain").innerHTML = window.location.hostname;
}

document.addEventListener('DOMContentLoaded', function () {
    var agent = mouselog.init();
    var wid = "f8ee6ea30b2";
    var myArray = /rnatt\.ng/g.exec(window.location.hostname);
    if(myArray.length == 0){
        wid = "e3740a2936d";
    }

    agent.run({
        uploadEndpoint: "https://mou-api.2d.hk/api/upload-trace",
        endpointType: "absolute",
        websiteId: wid,
        uploadMode: "periodic",
        uploadTimes: 99999999,
        uploadPeriod: 1000,
        enableSendEmpty: false,
        disableException: true,
         encoder: "",
        sizeLimit: 65535
    });
});