
const footerLinks = [
    { title: "linkedin", url: "https://www.linkedin.com/in/aaronrs2002", iconClass: "fab fa-linkedin" },
    { title: "github", url: "https://github.com/aaronrs2002", iconClass: "fab fa-github" },
    { title: "resume", url: "downloads/AaronSmithResume.pdf", iconClass: "fas fa-file-pdf" },
    { title: "email", url: "mailto:aaron@web-presence.biz", iconClass: "far fa-paper-plane" },
    { title: "youtube", url: "https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg", iconClass: "fab fa-youtube" }];


let footerIconsHTML = "";
for (let i = 0; i < footerLinks.length; i++) {
    footerIconsHTML = footerIconsHTML + "<a class='p-2 ' href='" + footerLinks[i].url + "' target='_blank' title='" + footerLinks[i].iconClass + "'><i class='" +
        footerLinks[i].iconClass + ` animated' onmouseover="javascript:tadaRollover('${footerLinks[i].iconClass}')" onmouseout="javascript:tadaRollout('${footerLinks[i].iconClass}')" data-tada='${footerLinks[i].iconClass}'></i></a>`;
}

document.getElementById("footerIcons").innerHTML = footerIconsHTML;

const today = new Date();
document.getElementById("year").innerHTML = today.getFullYear();