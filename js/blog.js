let blogData = [];
let blogDataLength = 0;
let tempBlogHTML = "";
const blogId = "8505796167510599349";
let blogScroll = 0;
function writePost(number) {
    document.getElementById("blogNumbers").innerHTML = + number + 1 + "/" + blogData.length;
    document.querySelector("[data-module='blog']").innerHTML = "<article id='postNum-" + blogData[number].guid
        + "'><div class='container'><div class='row'><div class='col-md-12'><h2>" + blogData[number].title
        + "</h2><hr><div>" + blogData[number].description
        + "</div><ul class='list-unstyled'><li><i>Published: " + blogData[number].pubDate
        + "</i></li><li><a target='_blank' href='https://www.blogger.com/comment.g?blogID=8505796167510599349&amp;postID=" + blogData[number].guid.substring(51, blogData[number].guid.length)
        + "'> Post comment: <i class='fas fa-bullhorn'></i></a></li></ul></div></div></div> </div></article>";
}

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
    writePost(blogScroll);
    document.getElementById("blogList").selectedIndex = 0;
}

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
    writePost(0);
}

async function getData() {
    try {
        const response = await fetch("https://mechanized-aesthetics.net/php-relays/web-presence-news.php?q=https://web-presence-news.blogspot.com/feeds/posts/default?alt=rss");
        blogData = await response.json();
        buildPost(blogData);

    } catch (error) {
        console.error("Error:", error);
        blogData = localVars[0].blog;//DEFAULT DATA IN CASE OF GODADDY PHP ERROR*/
        buildPost(blogData);
    }
}
getData();


//*START  BLOGGER API*/

//https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts?key=YOUR-API-KEY
let bloggerData = [];
async function getPostList() {
    try {
        const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/8505796167510599349/posts/bypath?path=/2015/08/google-is-taking-big-step-to-kill-off.html&key=" + localVars[0].blogIdentifier + "&");
        bloggerData = await response.json();

        localStorage.setItem("web-presence-news", JSON.stringify(bloggerData))
    } catch (error) {
        console.error("Error:", error);

    }
}
getPostList();