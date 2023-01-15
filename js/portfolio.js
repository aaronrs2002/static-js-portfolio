const portfolio = [
    /* {
         "name": "RV Park Administrator",
         "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
         "thumb": "img/rvParkThumSm.jpg",
         "youTube": "",
         "details": "RV Park Administrator is a web app that works on any device.  Save, email, print & evaluate transaction records - Guest timelines - Current, past and waiting guest details - Legal Contracts - Electricity monitoring for each unit - Post any message to your public website",
         "gitHub": "https://github.com/aaronrs2002",
         "created": "2021"
     },*/
    {
        "name": "eCommerce Platform",
        "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
        "thumb": "img/ecommThumb.jpg",
        "youTube": "uKp8-Y3SFwE",
        "details": "Buy and sell with a light weight JavaScript web-app for all devices.",
        "gitHub": "https://github.com/aaronrs2002",
        "created": "2020"
    },
    {
        "name": "Point of Sale - Web App",
        "software": "React.js/Redux,Node.js, MongoDB, Bootstrap/CSS, JWT-Login",
        "thumb": "img/posThumb.jpg",
        "youTube": "XOqfLIvIrWw",
        "details": "Point of Sale Web Application includes Inventory, CMS, Analytics,  Data-Filter and Multi-User-Secure-Login.",
        "gitHub": "https://github.com/aaronrs2002",
        "created": "2020"
    },
    {
        "name": "Decentralized Social Media App",
        "software": "React.js Node.js, MySQL, PHP CSS/Bootstrap",
        "thumb": "img/socialMediaApp.jpg",
        "youTube": "4QP8J0sY3iY",
        "details": "Compile all your favorite RSS feeds into one place. Filter out stories that don't interest you. Share feed networks, recommend your favorite posts and message with friends.",
        "gitHub": "https://github.com/aaronrs2002/social-media-tutorial",
        "created": "2020"
    },
    {
        "name": "City Data Web App",
        "software": "JavaScript/React.js, CSS/Bootstrap, PHP-API",
        "thumb": "img/cityDataAppThumb.jpg",
        "youTube": "LdNmOeIJJNU",
        "details": "Explore hiking trails, points of interest, parks, bus stops and so much more utilizing your town's open source data.",
        "gitHub": "https://github.com/aaronrs2002",
        "created": "2020"
    },
    {
        "name": "Health Tracker",
        "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
        "thumb": "img/workoutAppThumb.jpg",
        "youTube": "5h0IGywR23s",
        "details": "Log and analyze your nutritional intake vs calories burned while monitoring your progress. Plus, learn from professional trainers.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2021"
    },
    {
        "name": "Accounting Web App",
        "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
        "thumb": "img/balanceSheet.jpg",
        "youTube": "tTz-xUFpU54",
        "details": "Import Bank Files, Analyze Income and Expenses, Generate Work Orders, Track Hours on any device.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2022"
    },
    {
        "name": "Content Management System",
        "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
        "thumb": "img/cmsThumb2021.jpg",
        "youTube": "b60EjnnN6Tc",
        "details": "Create unlimited pages. Choose from an array of media options. Unlimited banners for each page. Add a blog to any page. Add an event module to any page. Add an image carousel to any page. Choose from numerous themes. Works on any device.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2021"
    },
    {
        "name": "Recipe Web App",
        "software": "React.js, Node.js, MongoDB, Bootstrap/CSS, Google-Oauth",
        "thumb": "img/recipeThumb.jpg",
        "youTube": "1Lw8QvlMfBY",
        "details": "Add, share and leave comment for your favorite recipes. All you need is a Gmail account.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2019"
    },
    {
        "name": "Hotel Management Web App",
        "software": "Bootstrap/CSS, JWT-Login, MySQL, Node.js, React.js",
        "thumb": "img/hotelManagement.jpg",
        "youTube": "LTEY3Y-RuMI",
        "details": "Manage your hotel from any device.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2021"
    },
    {
        "name": "Custom Homepage",
        "software": "React.js, Google-Firebase, Bootstrap/CSS, Authentication, PHP-Rest-API",
        "thumb": "img/customHomePageThumb.jpg",
        "youTube": "LSzs0jtbXpI",
        "details": "Custom Homepage Web App  - RSS feed API, YouTube API, weather API, custom themes, secure login, custom links with search filter, google calendar and responsive layout for all devices",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2019"
    },
    {
        "name": "Web Template with CMS",
        "software": "React.js, Google-Firebase, Bootstrap/CSS, Authentication, PHP-Rest-API",
        "thumb": "img/webTemplateThumb.jpg",
        "youTube": "pxmvfImaUH0",
        "details": "Content Management System with multiple layout options plus secure user login. Includes event app, blog, map, video, image carousel, Rich Text Editor, social media and contact components.  <a href='https://web-templates-6a6f1.web.app/?user=7IoD6zEANlVxeNeLw001O22k8JI2&' target='_blank'>Example User 1</a> , <a href='https://web-templates-6a6f1.web.app/?user=YRvF9srJvicNtiIqQ5nCmFD8YHt1&' target='_blank'>Example User 2</a>",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2019"
    },
    {
        "name": "Wedding App",
        "software": "React.js, Bootstrap/CSS, Node.js, JWT, MySQL",
        "thumb": "img/weddingAppThumb.jpg",
        "youTube": "yx-ImV5Nggw",
        "details": "Organize your special day while providing every detail to your friends and family.",
        "gitHub": "https://github.com/aaronrs2002/",
        "created": "2020"
    }
];


let activeItem = 0;
let videoList = "";
for (let i = 0; i < portfolio.length; i++) {

    videoList = videoList + "<a href='#' onmouseover=\"javascript:rollover('pulse', " + i + ")\" data-movienum='" + i
        + "' onClick='javascript:setActiveItem(" + Number(i) + ")' class='list-group-item list-group-item-action'><div class='thumbContainer'><img src='" + portfolio[i].thumb
        + "' class='img-fluid animated'><i class='far fa-play-circle play-float-icon'></i></div><label> " + (i + 1) + ". " + portfolio[i].name + "</label></a>";
}
document.querySelector(".videoList .list-group").innerHTML = videoList;
function setActiveItem(whichItem) {

    if (!isNaN(whichItem) === false) {
        if (whichItem === "next") {
            activeItem = (Number(activeItem) + 1);
            if (activeItem > portfolio.length) {
                activeItem = 0;
            }
        } else {
            activeItem = (Number(activeItem) - 1);
            if (activeItem < 0) {
                activeItem = portfolio.length;
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
    document.getElementById("activeName").innerHTML = (activeItem + 1) + "/" + portfolio.length + " " + portfolio[activeItem].name;
}
setActiveItem(0);

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
