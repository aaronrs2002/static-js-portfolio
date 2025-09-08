
const education = [
    {
        accomplished: "Bachelor’s Degree - Cum laude Multimedia & Web Design",
        school: "University of Advancing Technology - Tempe AZ",
        date: "Fall 2005",
    },

    {
        accomplished: "Basic Studies Certificate of completion",
        school: "Collins College - Plano TX",
        date: "Spring 2004",
    },

    /* {
         accomplished: "Study Abroad Program - Fine Art studies ",
         school: "Cité Universitaire - Paris",
         date: "Summer 1997",
     },*/
];

const experience = [
    {
        employer: "Web-Presence LLC Arizona",
        title: "Web Developer",
        link: "http://web-presence.biz",
        start: "March-2018",
        end: "Present",
        tasks: [
            "UI/UX Design",
            "Client side: CSS, Vanilla JavaScript, React JS and Bootstrap Framework",
            "Server Side: Node.js, PHP, Google Firebase, MySQL or MongoDB",
            "Marketing & Tracking with Google Analytics, Google Ad Words, Facebook",
        ],
    },

    {
        employer: "Meritage Homes",
        title: "Front End Web Developer",
        link: "https://www.meritagehomes.com/",
        start: "March-2017",
        end: "March 2018",
        tasks: [
            "Focusing on upcoming and ongoing applications with both the Marketing and IT Departments",
            "Quality Assurance for software",
            "Fixing bugs within the company software",
            "Building new software from its infancy to fruition",
            "Designing and building working JavaScript prototypes",
            "Documenting software details, goals and plans of execution",
            "Working with a small team of developers and Project Managers to set standards and plan timelines",
            "Upholding proper version control standards",
        ],
    },

    {
        employer: "CVS/Caremark",
        title: "UI/UX Designer/Front End Developer",
        link: "https://www.cvs.com/",
        start: "May 2015",
        end: "October 2016",
        tasks: [
            "Understanding and executing business requirements presented by the project management team",
            "Designing and building and comprehensive workflow for the user experience",
            "Built interactive prototypes for Messaging Service, CMS, Application Services Hub, Logging System",
            "Updating ongoing public and private applications using CSS, HTML and JavaScript",
            "Working with development team to solve any issues that arise from QA testing",
        ],
    },

    {
        employer: "Forever Living Products",
        title: "Sr Graphic Designer/Front End Developer",
        link: "https://foreverliving.com/",
        start: "January 2007",
        end: "January 2015",
        tasks: [
            "Collecting requirements through an Agile Scrum methodology using JIRA",
            "Meeting UI/UX requirements for internal and public sites",
            "Supporting/improving existing in house and public web applications",
            "Building initial prototypes for both ecommerce and marketing site projects",
            "Designing and building mass email campaigns using Virtual Response for their deployment",
            "Site Banner Designs using Adobe Photoshop and Illustrator",
            "Producing promotional videos using Adobe After Effects",
            "Building REST APIs for JIRA and Confluence using AJAX",
            "Continuous communication with development team and project managers through JIRA and Confluence",
            "Perform Quality Assurance (QA) testing on web applications in all browsers and devices",
            "Building device friendly responsive web applications using Bootstrap framework",
            "Activating and updating iTunes video podcast channel via XML",
            "Writing process documentation for the IT department using Confluence's wiki environment",
            "Keeping up to date with development tools such as JavaScript, AJAX, JSON, HTML5, CSS, Bootstrap, etc",
        ],
    },

    /*{
        employer: "Lawyer Edge",
        title: "Web Designer/Developer",
        link: "http://www.lawyeredge.com/",
        start: "August 2005",
        end: "April 2006",
        tasks: [
            "Meeting requirements gathered from Project Manager",
            "Building Photoshop web layouts for client approval ",
            "Transforming Photoshop templates into HTML frameworks",
            "Presenting creative concepts for clients for evaluation and selection",
            "Perform Quality Assurance (QA) testing on web applications in all browsers",
            "Building and maintaining multiple ongoing projects in various stages of development",
            "Implementing new design techniques and tools to enhance existing projects",
        ],
    },





    */
];

const skills = [
    {
        type: "Client Side",
        software: [
            "JavaScript",
            "React.js/Redux",
            "HTML",
            "CSS/Bootstrap",
            "Responsive Design",
        ],
    },

    {
        type: "Server Side",
        software: ["Node.js", "PHP", "Google Firebase", "MongoDB", "MySQL"],
    },

    {
        type: "Graphic Design",
        software: ["Photoshop", "Illustrator", "After Effects"],
    },
];


function resumeDialog(module) {
    window.location.href = "#resumeTarget";
    document.querySelector("#resumeSelcted").innerHTML = module;
    //document.querySelector(".modal-dialog").classList.remove("hide");
    // document.querySelector(".modal.animated").classList.add("bounceIn");
    [].forEach.call(document.querySelectorAll("[data-resume]"), function (e) {
        e.classList.add("hide");
    });

    [].forEach.call(document.querySelectorAll("[data-resumebt]"), function (e) {
        if (e.dataset.resumebt === module) {
            e.classList.add("active");
            //e.style.color = '#fff';
        } else {
            e.classList.remove("active");
        }

    })

    // document.querySelector(".modal-header .btn-group .btn[alt='" + module + "']").classList.add("active");
    document.querySelector("[data-resume='" + module + "']").classList.remove("hide");
}

function closeDialog() {
    document.querySelector(".modal-dialog").classList.add("hide");
    document.querySelector(".modal.animated").classList.remove("bounceIn");
}
//EDUCATION CARD
let educationHTML = "";
for (let i = 0; i < education.length; i++) {
    educationHTML = educationHTML + "<li>" + education[i].school + "</li>"
}
document.getElementById("educationList").innerHTML = educationHTML;
//SKILLS CARD
let skillsHTML = "";
for (let i = 0; i < skills.length; i++) {
    skillsHTML = skillsHTML + "<li>" + skills[i].type + "</li>";
}
document.getElementById("skillsList").innerHTML = skillsHTML;
//EXPERIENCE CARD
let experienceHTML = "";
for (let i = 0; i < experience.length; i++) {
    experienceHTML = experienceHTML + "<li>" + experience[i].employer + "</li>"
}
document.getElementById("experienceList").innerHTML = experienceHTML;

//START EXPERIENCE JS
const openUl = "<ul class='list-unstyled mt-3 mb-4 fadeIn animated'>";
const closeUl = "</ul>";
let tempExperience = "";
for (let i = 0; i < experience.length; i++) {
    let tempTasks = "";
    for (let j = 0; j < experience[i].tasks.length; j++) {
        tempTasks = tempTasks + "<li>" + experience[i].tasks[j] + "</li>";
    }
    tempExperience = tempExperience + "<li><label>" + experience[i].title + " : <a href='" + experience[i].link + "' target='_blank'>" + experience[i].employer + "</a> " + experience[i].start + " - " + experience[i].end + "</label></li><li><ol>" + tempTasks + "</ol></li>";
}
document.querySelector("[data-resume='experience']").innerHTML = openUl + tempExperience + closeUl;

///START SKILLS JS
const skillsOpen = "<ul class='fadeIn animated'>";
const skillsClose = "</ul>";
let tempSkills = "";
for (let i = 0; i < skills.length; i++) {
    let tempSoftware = "";
    for (let j = 0; j < skills[i].software.length; j++) {
        tempSoftware = tempSoftware + "<li>" + skills[i].software[j] + "</li>";
    }
    tempSkills = tempSkills + "<li class='inline'>" + skills[i].type + " <ol>" + tempSoftware + "</ol></li>";
}
document.querySelector("[data-resume='skills']").innerHTML = skillsOpen + tempSkills + skillsClose;

//START EDUCATION JS
const educationStart = "<ul class='fadeIn animated'>";
const educationClosed = "</u>";
let tempEducation = "";
for (let i = 0; i < education.length; i++) {
    tempEducation = tempEducation + "<li>" + education[i].accomplished + "</li><li class='mb-4'>" + education[i].school + " - " + education[i].date + "</li>";
}
document.querySelector("[data-resume='education']").innerHTML = educationStart + tempEducation + educationClosed;

/*
const modalBody = document.querySelector(".modal-body");
let browserHeight = window.innerHeight;
console.log("browserHeight: " + browserHeight);
modalBody.style.maxHeight = browserHeight - 50 + "px";

*/