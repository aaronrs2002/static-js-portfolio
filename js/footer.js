const iconLinks = [
    { title: "linkedin", target: "_blank", url: "https://www.linkedin.com/in/aaronrs2002", iconClass: "fab fa-linkedin" },
    { title: "github", target: "_blank", url: "https://github.com/aaronrs2002", iconClass: "fab fa-github" },
    { title: "resume", target: "_blank", url: "downloads/Resume-Aaron-Smith.pdf", iconClass: "fas fa-file-pdf" },
    { title: "ticket management and accounting software by: Aaron Smith ", target: "_blank", url: "https://aaronrs2002.github.io/task-master/", iconClass: "fas fa-network-wired" },
    { title: "youtube", target: "_blank", url: "https://www.youtube.com/@web-presence-developer", iconClass: "fab fa-youtube" },
    { title: "vanilla-javascript-games by: Aaron Smith", target: "_blank", url: "https://aaronrs2002.github.io/black-jack/", iconClass: "fas fa-dice" }];

let footerIconsHTML = "";
let landingPgIconsHTML = "";
for (let i = 0; i < iconLinks.length; i++) {
    footerIconsHTML = footerIconsHTML + "<a class='p-2 ' href='" + iconLinks[i].url + "' target='" + iconLinks[i].target + "' title='" + iconLinks[i].title + "'><i class='" +
        iconLinks[i].iconClass + ` animated' onmouseover="javascript:tadaRollover('${iconLinks[i].iconClass}')" onmouseout="javascript:tadaRollout('${iconLinks[i].iconClass}')" data-tada='${iconLinks[i].iconClass}'></i></a>`;
    if (i < iconLinks.length - 1) {
        landingPgIconsHTML = footerIconsHTML;
    }
}

document.getElementById("footerIcons").innerHTML = footerIconsHTML;
document.getElementById("landingPgIcons").innerHTML = footerIconsHTML;

const today = new Date();
document.getElementById("year").innerHTML = today.getFullYear();