class SelectedPostService {
    constructor() {

    }

    setSelectedPost(post) {
        this.post = post;
        this.callbackFn();
    }

    onPostChanged(callbackFn) {
        this.callbackFn = callbackFn;
    }
}

let selectedPostService = new SelectedPostService();