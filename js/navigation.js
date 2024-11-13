
/*START ON LOAD JS HERE*/
const navLinks = ["resume", "applications", "blog", "contact"];
let navHTML = "";
let activeLink = "";
for (let i = 0; i < navLinks.length; i++) {
    /*   if (navLinks[i] === "applications") {
           activeLink = "active";
       } else {
           activeLink = "";
       }*/
    navHTML = navHTML + `<a href='?module=${navLinks[i]}' class='${activeLink} capitalize' data-portfolio='${navLinks[i]}' onClick='showModule("${navLinks[i]}")'>${navLinks[i][0].toUpperCase() + navLinks[i].slice(1).toLowerCase()}</a>`;
}
document.getElementById("mainNavLinksTarget").innerHTML = navHTML;
document.getElementById("landingPgLinksTarget").innerHTML = navHTML;



function showModule(module) {
    if (document.querySelector("body.entered") === null) {
        console.log("show module fired")
        document.querySelector("body").classList.add("entered");
    }
    if (module === "landingPg") {
        document.querySelector(".entered[data-design]").classList.remove("entered");
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

for (let i = 0; i < navLinks.length; i++) {/*for SEO and web crawlers*/
    let theURL = window.location.href;
    if (theURL.indexOf(navLinks[i]) !== -1) {
        showModule(navLinks[i])
    }
}


/*if (localStorage.getItem("activeModule")) {//NO MORE PERSISTENCE THERE ARE ONLY A FEW PAGES
    showModule(localStorage.getItem("activeModule"));
}*/

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

/*safari iframe bug fix*/
function screenCallback() {
    if (document.fullscreen) {
        console.log('looking for fullscreen.');
        document.querySelector("footer").classList.remove("hide");
        document.getElementById("navWrap").classList.remove("hide");
        document.getElementById("designOptions").classList.remove("hide");
    } else {
        console.log('toggle fullscreen');

        if (document.querySelector("footer.hide") === null) {
            document.querySelector("footer").classList.add("hide");
            document.getElementById("navWrap").classList.add("hide");
            document.getElementById("designOptions").classList.add("hide");
        } else {
            document.querySelector("footer").classList.remove("hide");
            document.getElementById("navWrap").classList.remove("hide");
            document.getElementById("designOptions").classList.remove("hide");
        }


    }
}

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') !== -1) {
    if (ua.indexOf('chrome') > -1) {
        console.log("Chrome detected: " + navigator.userAgent.toLowerCase()); // Chrome
    } else {
        console.log("Safari detected: " + navigator.userAgent.toLowerCase()); // Safari
        document.addEventListener('fullscreenchange', screenCallback);
        document.addEventListener('webkitfullscreenchange', screenCallback);
    }
}
