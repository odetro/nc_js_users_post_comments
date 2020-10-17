class Comment {
    constructor({name, body}) {
        this.postDiv(name, body);
    }

    postDiv(name, body) {
        this.html = `
            <div class="comment">
                <h5>${name} </h5>
                <p>${body}</p>
            </div>
            `;
    }
}