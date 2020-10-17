class CommentsList {
    constructor() {
        this.init();
        this.listElement = document.createElement('ul');
        this.listElement.classList.add('comments-ul');

        selectedPostService.onPostChanged( () => this.init() );
    }

    async init () {
        this.commentsArray = await this.fetchComments();
        this.createList();
    }

    async fetchComments() {
        let post = selectedPostService.post;
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        return response.json();
    }

    createList () {
        this.listElement.innerHTML = '';
        for (let comment of this.commentsArray) {
            let li = this.createComment(comment);
            this.listElement.appendChild(li);
        } 
    }

    createComment (commentData) {
        let li = document.createElement('li');
        li.classList.add("comment-li")
        let comment = new Comment(commentData);
        li.innerHTML = comment.html;
        return li;
    }
}