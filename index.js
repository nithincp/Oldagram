const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avatarDesc: "Vincet van Gogh avatar",
        post: "images/post-vangogh.jpg",
        postDesc: "Vincent van Gogh, ginger hair and beard",
        comment: "just took a few mushrooms lol",
        likes: 21,
        hasLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avatarDesc: "Gustave Courbet avatar",
        post: "images/post-courbet.jpg",
        postDesc: "Gustave Courbet stressed with hands on head",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        hasLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        avatarDesc: "Joseph Ducreux avatar",
        post: "images/post-ducreux.jpg",
        postDesc: "Joseph Ducreux smiling and pointing to the camera",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        hasLiked: false
    }
]


const postsEl = document.getElementById("posts")


function renderPosts(){

    for(let i=0;i<posts.length;i++){

        postsEl.innerHTML += `
        
                <div class="avatar-details">
                    <div>
                        <img src="${posts[i].avatar}" class="avatar" alt="${posts[i.avatarDesc]}"/>
                    </div>
                    <div class="name-location">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <div class="post">
                    <img src="${posts[i].post}" class="post-img" alt="${posts[i].postDesc}" ondblclick="likeUpdation(${i})"/>
                </div>
                <div class="btns alignment">
                    <img src="${posts[i].hasLiked ? "images/icon-red-heart.png" : "images/icon-heart.png"}" class="btn" onclick="likeUpdation(${i})"/>
                    <img src="images/icon-comment.png" class="btn"/>
                    <img src="images/icon-dm.png" class="btn"/>
                </div>
                <div class="likes alignment">
                    <p class="likes-text">${posts[i].likes} likes</p>
                </div>
                <div class="post-desc alignment">
                    <p><span>${posts[i].username} </span>j${posts[i].comment}</p>
                </div>
        
        `
    }

}

renderPosts()

function refreshPosts(){
    postsEl.innerHTML = ""
    renderPosts()
}

function likeUpdation(index){
    if(!posts[index].hasLiked){
        posts[index].likes+=1
        posts[index].hasLiked=true
    }
    else{
        posts[index].likes-=1
        posts[index].hasLiked=false
    }

    refreshPosts()
}