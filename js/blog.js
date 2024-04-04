let blogData = [];
let blogDataLength = 0;
let tempBlogHTML = "";
const blogId = "8505796167510599349";
let blogScroll = 0;
function writePost(data) {
    document.getElementById("blogNumbers").innerHTML = + blogScroll + 1 + "/" + blogUrls.length;
    document.querySelector("[data-module='blog']").innerHTML = "<article id='postNum-" + data.id
        + "'><div class='container'><div class='row'><div class='col-md-12'><h2>" + data.title
        + "</h2><hr><div>" + data.content
        + "</div><ul class='list-unstyled'><li><i>Published: " + data.published
        + "</i></li><li><a target='_blank' href='https://www.blogger.com/comment.g?blogID=8505796167510599349&amp;postID=" + data.id
        + "'> Post comment: <i class='fas fa-bullhorn'></i></a></li></ul></div></div></div> </div></article>";
}


/*
function updateBlog() {
    let whichPost = document.getElementById("blogList").value;
    if (whichPost === "default") {
        return false;
    } else {
        writePost(parseInt(whichPost));
        blogScroll = parseInt(whichPost);
    }
}

function buildPost(blogData) {
    blogDataLength = blogData.length;
    let bloglistStr = "<option value='default'>Select a specific post</option>";
    for (let i = 0; i < blogData.length; i++) {
        bloglistStr = bloglistStr + "<option value='" + i + "'>" + (i + 1) + ". " + blogData[i].pubDate.substring(0, 16) + ": " + blogData[i].title + "</option>";
    }
    document.getElementById("blogList").innerHTML = bloglistStr;
   //writePost(0);
}

async function getData() {
    try {
        const response = await fetch("https://mechanized-aesthetics.net/php-relays/web-presence-news.php?q=https://web-presence-news.blogspot.com/feeds/posts/default?alt=rss");
        blogData = await response.json();
      //  buildPost(blogData);

    } catch (error) {
        console.error("Error:", error);
        //blogData = localVars[0].blog;//DEFAULT DATA IN CASE OF GODADDY PHP ERROR
      //  buildPost(blogData);
    }
}
getData();*/


//*START  BLOGGER API*/

//https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts?key=YOUR-API-KEY
let bloggerData = [];
async function getPostByUrl(url) {
    try {
        const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts/bypath?path=" + url + "&key=" + localVars[0].blogIdentifier + "&");
        bloggerData = await response.json();

        writePost(bloggerData)

        localStorage.setItem("web-presence-news", JSON.stringify(bloggerData))
    } catch (error) {
        console.error("Error:", error);

    }
}



function updateBlog() {
    let whichPost = document.getElementById("blogList").value;
    if (whichPost === "default") {
        return false;
    } else {
        getPostByUrl(whichPost);
        blogScroll = localVars[0].blogUrls.indexOf(whichPost);
    }
}



blogDataLength = localVars[0].blogUrls.length;
let bloglistStr = "<option value='default'>Select a specific post</option>";
for (let i = 0; i < localVars[0].blogUrls.length; i++) {
    bloglistStr = bloglistStr + "<option value='" + localVars[0].blogUrls[i] + "'>" + (i + 1) + ". " + localVars[0].blogUrls[i] + "</option>";
}
document.getElementById("blogList").innerHTML = bloglistStr;
getPostByUrl(localVars[0].blogUrls[0]);

function viewPosts(direction) {
    if (direction === "next") {
        blogScroll = blogScroll + 1;
        if (blogScroll >= blogDataLength) {
            blogScroll = 0;
        }
    } else {
        blogScroll = blogScroll - 1;
        if (blogScroll < 0) {
            blogScroll = blogDataLength - 1;
        }
    }
    console.log("blogScroll: " + blogScroll)
    getPostByUrl(localVars[0].blogUrls[blogScroll])
    document.getElementById("blogList").selectedIndex = 0;
}
/*
console.log("localVars[0].blogUrls.split(','): " + localVars[0].blogUrls.split(',').toString());

let urlList = localVars[0].blogUrls.split(',');
console.log("urlList.length: " + urlList.length);

let tempURLs = [];
for (let i = 0; i < localVars[0].blog.length; i++) {
    tempURLs.push(localVars[0].blog[i].link.substring(38))
}

localStorage.setItem("urlList", tempURLs);

{
    "kind": "blogger#post",
    "id": "7762364761954454613",
    "blog": {
        "id": "8505796167510599349"
    },
    "published": "2015-08-31T13:52:00-07:00",
    "updated": "2018-10-04T10:19:35-07:00",
    "url": "http://web-presence-news.blogspot.com/2015/08/google-is-taking-big-step-to-kill-off.html",
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts/7762364761954454613",
    "title": "Google Is Taking a Big Step to Kill Off Flash for Good",
    "content": "\u003cp\u003eSTARTING TOMORROW, GOOGLE’S Chrome browser will automatically pause web ads that use Flash.\u003c/p\u003e\n\n\u003cp\u003eThat means that videos and animations in ads using Adobe’s Flash technology will no longer autoplay in the world’s most-used browser. Ads using HTML5, on the other hand, will continue to work.\u003c/p\u003e\n\n\u003cp\u003eThe decision, first revealed in June on Google+, is the latest nail in Flash’s coffin, which is great news for the web: Flash is a bloated, insecure battery hog, and it deserves to die.\u003c/p\u003e\n\n\u003cp\u003eFortunately, Google doesn’t appear to be the only organization that feels that way. Last month, Mozilla blocked Flash from running on its Firefox browser until Adobe released a new version that fixed some particularly egregious security problems that were revealed in a leak of security company Hacking Team’s internal documents. Facebook’s chief security officer Alex Stamos also recently called on browser makers to stop supporting Flash altogether. In anticipation of that development, Facebook has slowly been replacing its own videos with HTML5-based alternatives.\u003c/p\u003e\n\n\u003cp\u003eAdvertisers have been the big pro-Flash holdouts, but Amazon has said that it will no longer accept Flash advertisement on its network of sites. Google’s move to pause Flash ads is even bigger; it could be just the push the industry needs to finally move on to better technologies.\u003c/p\u003e\n\n\n\u003cp\u003e\u003cstrong\u003ePosted by: \u003ca href=\"https://www.wired.com/author/kfinley/\" target=\"_blank\"\u003eKlint Finley\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e",
    "author": {
        "id": "05096985921695885357",
        "displayName": "web-presence",
        "url": "https://www.blogger.com/profile/05096985921695885357",
        "image": {
            "url": "//4.bp.blogspot.com/-nbpIWD2VCjU/ZDqd8sKRrDI/AAAAAAACPlY/vcFczIp6_z0fFygxpppxDraoQoqnoTivQCK4BGAYYCw/s35/MA_Logo.png"
        }
    },
    "replies": {
        "totalItems": "1",
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts/7762364761954454613/comments"
    },
    "etag": "\"dGltZXN0YW1wOiAxNTM4NjczNTc1MzkwCm9mZnNldDogLTI1MjAwMDAwCg\""
}
*/