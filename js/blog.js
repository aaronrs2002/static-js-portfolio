const blogData = localVars[0].blog;

const blogDataLength = blogData.length;
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
    writePost(blogScroll);
    document.getElementById("blogList").selectedIndex = 0;
}
writePost(0);


function updateBlog() {
    let whichPost = document.getElementById("blogList").value;
    if (whichPost === "default") {
        return false;
    } else {
        writePost(parseInt(whichPost));
        blogScroll = parseInt(whichPost);
    }
}

let bloglistStr = "<option value='default'>Select a specific post</option>";
for (let i = 0; i < blogData.length; i++) {
    bloglistStr = bloglistStr + "<option value='" + i + "'>" + (i + 1) + ". " + blogData[i].pubDate.substring(0, 16) + ": " + blogData[i].title + "</option>";
}
document.getElementById("blogList").innerHTML = bloglistStr;