
const footerLinks = [
    { title: "linkedin", url: "https://www.linkedin.com/in/aaronrs2002", iconClass: "fab fa-linkedin" },
    { title: "github", url: "https://github.com/aaronrs2002", iconClass: "fab fa-github" },
    { title: "resume", url: "downloads/AaronSmithResume.pdf", iconClass: "fas fa-file-pdf" },
    { title: "email", url: "mailto:aaron@web-presence.biz", iconClass: "far fa-paper-plane" }];


let footerIconsHTML = "";
for (let i = 0; i < footerLinks.length; i++) {
    footerIconsHTML = footerIconsHTML + "<a class='p-2 ' href='" + footerLinks[i].url + "' target='_blank' title='linkedin'><i class='" +
        footerLinks[i].iconClass + " animated' data-tada='" + footerLinks[i].iconClass.substring(4, footerLinks[i].iconClass.length) + "'></i></a>";
}

document.getElementById("footerIcons").innerHTML = footerIconsHTML;

const today = new Date();
document.getElementById("year").innerHTML = today.getFullYear();

/*
<a class="p-2 " href="https://www.linkedin.com/in/aaronrs2002" target="_blank"
                        title="linkedin"><i class="fab fa-linkedin animated" data-tada="fa-linkedin"></i></a><a
                        class="p-2" href="https://github.com/aaronrs2002" target="_blank" title="github"><i
                            class="fab fa-github animated" data-tada="fa-github"></i></a><a class="p-2"
                        href="downloads/AaronSmithResume.pdf" target="_blank" title="resume"><i
                            class="fas fa-file-pdf animated" data-tada="fa-file-pdf"></i></a><a class="p-2 "
                        href="https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg" target="_blank"
                        title="youTube Channel"><i class="fab fa-youtube animated" data-tada="fa-youtube"></i></a><a
                        class="p-2" href="mailto:aaron@web-presence.biz" title="Email"><i
                            class="far fa-paper-plane animated" data-tada="fa-paper-plane"></i></a>
*/