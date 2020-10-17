class UsersApp {
    constructor() {
        this.mainElement = document.createElement("main");
        this.mainElement.classList.add("main-app");

        this.createUsers();
        this.createPosts();
        this.createComments();
        
        document.body.appendChild(this.mainElement);
    
    }

    createUsers () {
        let usersList = new UsersList();
        this.mainElement.appendChild(usersList.listElement); 
    }

    createPosts () {
        let postsList = new PostsList();
        this.mainElement.appendChild(postsList.listElement); 
    }

    createComments () {
        let commentsList = new CommentsList();
        this.mainElement.appendChild(commentsList.listElement); 
    }
}