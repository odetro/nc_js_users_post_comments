class Post {
    constructor({title, body}) {
        this.postDiv(title, body);
    }

    postDiv(title, body) {
        this.html = `
            <div class="post">
                <h4>${title} </h4>
                <p>${body}</p>
            </div>
            `;
    }
}