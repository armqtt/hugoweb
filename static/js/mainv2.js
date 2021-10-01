document.getElementById("this-year").innerHTML = new Date().getFullYear();

var vid = document.getElementById("coverVideo");
if(vid != undefined){
    // vid.autoplay = true;
    // vid.load();
    vid.play();
}