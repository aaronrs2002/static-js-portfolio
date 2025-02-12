const iconLinks = [
    { title: "My Linkedin Profile", target: "_blank", url: "https://www.linkedin.com/in/aaronrs2002", iconClass: "fab fa-linkedin" },
    { title: "My Open Source Library", target: "_blank", url: "https://github.com/aaronrs2002", iconClass: "fab fa-github" },
    { title: "My Resume", target: "_blank", url: "downloads/Resume-Aaron-Smith.pdf", iconClass: "fas fa-file-pdf" },
    { title: "Networked serverless web apps for Workflow Management and Accounting", target: "_blank", url: "https://aaronrs2002.github.io/task-master/", iconClass: "fas fa-network-wired" },
    { title: "Learn how to write web applications!", target: "_blank", url: "https://www.youtube.com/@web-presence-developer", iconClass: "fab fa-youtube" },
    { title: "Blackjack, Texas Hold\'em, Slot Machine, Bingo and Trivia - No Install. No Login.", target: "_blank", url: "https://aaronrs2002.github.io/black-jack/", iconClass: "fas fa-dice" }];

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