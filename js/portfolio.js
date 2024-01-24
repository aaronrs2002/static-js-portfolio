const portfolio = localVars[0].examples;


let activeItem = 0;
let videoList = "";
for (let i = 0; i < portfolio.length; i++) {

    videoList = videoList + "<a href='#' onmouseover=\"javascript:rollover('pulse', " + i + ")\" data-movienum='" + i
        + "' onClick='javascript:setActiveItem(" + parseInt(i) + ")' class='list-group-item list-group-item-action'><div class='thumbContainer'><img src='" + portfolio[i].thumb
        + "' class='img-fluid animated'><i class='far fa-play-circle play-float-icon'></i></div><label> " + (i + 1) + ". " + portfolio[i].name + "</label></a>";
}
document.querySelector(".videoList .list-group").innerHTML = videoList;
function setActiveItem(whichItem) {

    if (!isNaN(whichItem) === false) {
        if (whichItem === "next") {
            activeItem = (parseInt(activeItem) + 1);
            if (activeItem >= portfolio.length) {
                activeItem = 0;
            }
        } else {
            activeItem = (parseInt(activeItem) - 1);
            if (activeItem < 0) {
                activeItem = portfolio.length - 1;
            }
        }
    } else {
        activeItem = whichItem;
    }

    [].forEach.call(document.querySelectorAll("[data-movienum]"), function (e) {
        e.classList.remove("active");
    });
    document.querySelector("[data-movienum='" + activeItem + "']").classList.add("active");

    document.querySelector("iframe.mediaFrame").setAttribute("src", "https://www.youtube.com/embed/" + portfolio[activeItem].youTube + "?&amp;rel=0");
    document.getElementById("activeGitHub").setAttribute("href", portfolio[activeItem].gitHub);
    document.getElementById("activeSoftware").innerHTML = portfolio[activeItem].software;
    document.getElementById("activeDetails").innerHTML = portfolio[activeItem].details;
    document.getElementById("activeCreated").innerHTML = portfolio[activeItem].created;

    document.getElementById("activeName").innerHTML = (activeItem + 1) + "/" + portfolio.length + " " + portfolio[activeItem].name;
}
setActiveItem(0);

function populateScreen(ytId) {
    console.log("ytId: " + ytId);
    document.querySelector("iframe.mediaFrame").setAttribute("src", "https://www.youtube.com/embed/" + ytId + "?&amp;rel=0");
}

//START APL THUM ROLLOVER
function rollover(animation, number) {
    const animatedItem = document.querySelector(
        "a.list-group-item[data-movienum='" + number + "']  .img-fluid"
    );
    animatedItem.classList.add(animation);
    setTimeout(function () {
        animatedItem.classList.remove(animation);
    }, 1000);
}
