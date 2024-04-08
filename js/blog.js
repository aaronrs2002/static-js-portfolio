let blogDataLength = 0;
let tempBlogHTML = "";
let blogScroll = 0;
function writePost(data) {
    document.getElementById("blogNumbers").innerHTML = + blogScroll + 1 + "/" + localVars[0].blogUrls.length;
    document.querySelector("[data-module='blog']").innerHTML = "<article id='postNum-" + data.id
        + "'><div class='container'><div class='row'><div class='col-md-12'><h2>" + data.title
        + "</h2><hr><div>" + data.content
        + "</div><ul class='list-unstyled'><li><i>Published: " + data.published
        + "</i></li><li><a target='_blank' href='https://www.blogger.com/comment.g?blogID=" + localVars[0].blogId + "&amp;postID=" + data.id
        + "'> Post comment: <i class='fas fa-bullhorn'></i></a></li></ul></div></div></div> </div></article>";
}

let bloggerData = [];
async function getPostByUrl(url) {
    try {
        const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/" + localVars[0].blogId + "/posts/bypath?path=" + url + "&key=" + localVars[0].blogIdentifier + "&");
        bloggerData = await response.json();
        writePost(bloggerData)
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

/*START HERE ON LOAD*/
blogDataLength = localVars[0].blogUrls.length;
let bloglistStr = "<option value='default'>Select a specific post</option>";
for (let i = 0; i < localVars[0].blogUrls.length; i++) {
    bloglistStr = bloglistStr + "<option value='" + localVars[0].blogUrls[i] + "'>" + (i + 1) + ". " + localVars[0].blogUrls[i].substring(1, localVars[0].blogUrls[i].length - 5) + "</option>";
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