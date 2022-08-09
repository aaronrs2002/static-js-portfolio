
/*START ON LOAD JS HERE*/
const navLinks = ["resume", "applications", "blog", "contact"];
let navHTML = "";
let activeLink = "";
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i] === "application") {
        activeLink = "active";
    }
    navHTML = navHTML + `<a href='#' class='${activeLink} capitalize' data-portfolio='${navLinks[i]}' onClick='showModule("${navLinks[i]}")'>${navLinks[i][0].toUpperCase() + navLinks[i].slice(1).toLowerCase()}</a>`;
}
document.getElementById("mainNavLinksTarget").innerHTML = navHTML;
document.getElementById("landingPgLinksTarget").innerHTML = navHTML;



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
    document.querySelector("[data-tada='" + element + "']").classList.add("tada");
    if (document.querySelector("#footerIcons a i[data-tada='" + element + "']")) {
        document.querySelector("#footerIcons a i[data-tada='" + element + "']").classList.add("tada");
    }
}
function tadaRollout(element) {
    document.querySelector("[data-tada='" + element + "']").classList.remove("tada");
    if (document.querySelector("#footerIcons a i[data-tada='" + element + "']")) {
        document.querySelector("#footerIcons a i[data-tada='" + element + "']").classList.remove("tada");
    }
}

