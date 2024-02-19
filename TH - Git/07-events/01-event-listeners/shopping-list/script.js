//js form
//getbyelementID
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("desc");
const categoryElement = document.getElementById("category");


//addEventLisstenar// lắng nghe sự kiện khi sumbit form
// ten event : 'sumbit';
window.addEventListener("DOMContentLoaded",init);

function init(){
    form.addEventListener("submit", handleSubmit);
}


