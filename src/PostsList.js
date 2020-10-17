class PostsList {
    constructor() {
        this.init();
        this.listElement = document.createElement('ul');
        this.listElement.classList.add('posts-ul');

        selectedUserService.onUserChanged(() => this.init());
    }

    async init () {
        this.postsArray = await this.fetchPosts();
        this.createList();
    }

    async fetchPosts() {
        let user = selectedUserService.user || {id:"1"};
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/` + user.id + `/posts`);
        return response.json();
    }

    createList () {
        this.listElement.innerHTML = '';
        for (let post of this.postsArray) {
            let li = this.createPost(post);
            this.listElement.appendChild(li);
        } 
    }

    onPostSelected(post) {
        selectedPostService.setSelectedPost(post);
    }

    createPost (postData) {
        let li = document.createElement('li');
        li.classList.add("post-li")
        li.addEventListener('click', () => this.onPostSelected(postData));
        let post = new Post(postData);
        li.innerHTML = post.html;
        return li;
    }
}