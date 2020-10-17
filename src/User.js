class User {
    constructor({name, email, phone, address}) {
        this.userCard(name, email, phone, address);
    }

    userCard(name, email, phone, address) {
        this.html = `
            <div class="user">
                <h3>${name} </h3>
                <span class="value_header">Email:</span><span> ${email}</span><br>
                <span class="value_header">Phone:</span><span> ${phone}</span><br>
                <span class="value_header">Address:</span><span> ${address.street}, ${address.city}</span><br>
            </div>
            `;
    }
}