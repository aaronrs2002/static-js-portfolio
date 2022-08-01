function showModule(module) {

    if (module === "landingPg") {
        document.querySelector("#navWrap").classList.add("hide");
        document.querySelector("footer").classList.add("hide");
    } else {
        document.querySelector("#navWrap").classList.remove("hide");
        document.querySelector("footer").classList.remove("hide");
        document.querySelector("#navWrap").classList.add("fadeInDown");
        document.querySelector("footer").classList.add("fadeInUp");

    }

    [].forEach.call(document.querySelectorAll("[data-module]"), function (e) {
        e.classList.add("hide");
    });

    [].forEach.call(document.querySelectorAll("[data-portfolio]"), function (e) {
        e.classList.remove("active");
    });


    document.querySelector("[data-portfolio='" + module + "']").classList.add("active");
    document.querySelector("[data-module='" + module + "']").classList.remove("hide");
    document.querySelector("[data-module='" + module + "']").classList.add("fadeIn");
    localStorage.setItem("activeModule", module);

    if (module === "blog") {
        document.getElementById("blogButtons").classList.remove("hide");
    } else {
        document.getElementById("blogButtons").classList.add("hide");
    }
}

if (localStorage.getItem("activeModule")) {
    showModule(localStorage.getItem("activeModule"));
}

function tadaRollover(element) {

    document
        .querySelector("[data-tada='" + element + "']")
        .classList.add("tada");
}
function tadaRollout(element) {
    document
        .querySelector("[data-tada='" + element + "']")
        .classList.remove("tada");
}
