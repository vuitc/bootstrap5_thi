var pag1 = document.querySelector(".pag1");
var pag2 = document.querySelector(".pag2");
var pag3 = document.querySelector(".pag3");
var pagActive = document.querySelector(".page-link.active");
console.log(pagActive);
const goHome = () => {
    window.location.href = "demo.html";
    pagActive.classList.remove("active");
    pag1.classList.add("active");
}
const goProperties = () => {
    window.location.href = "Properties.html";
    pagActive.classList.remove("active");
    pag1.classList.add("active");
}
const goContact = () => {
    window.location.href = "Contact.html";
    pagActive.classList.remove("active");
    pag1.classList.add("active");
}
const reload = () => {
    console.log(window.location.pathname)
    console.log(window.location.pathname === "**/demo.html");
    var relativePath = window.location.pathname; // Lấy đường dẫn tương đối
    var basePath = relativePath.substring(0, relativePath.lastIndexOf("/")); // Lấy đường dẫn trước "/demo.html"
    var newURL1 = basePath + "/demo.html"; // Nối lại với chuỗi mới
    var newURL2 = basePath + "/Properties.html"; // Nối lại với chuỗi mới
    var newURL3 = basePath + "/Contact.html"; // Nối lại với chuỗi mới
    if (window.location.pathname == newURL1) {
        pag1.classList.add("active");
    }
    if (window.location.pathname == newURL2) {
        pag2.classList.add("active");
    }
    if (window.location.pathname == newURL3) {
        pag3.classList.add("active");
    }
}
window.addEventListener('load', reload());