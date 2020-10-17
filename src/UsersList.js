class UsersList {
    constructor() {
        this.init();
        this.listElement = document.createElement('ul');
        this.listElement.classList.add('users-ul');
    }

    async init () {
        this.usersArray = await this.fetchUsers();
        this.createList();
    }
    
    async fetchUsers() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        return response.json();
    }

    createList () {
        for (let user of this.usersArray) {
            let li = this.createUser(user);
            this.listElement.appendChild(li);
        }   
    }

    onUserSelected(user) {
        selectedUserService.setSelectedUser(user);
    }
    
    createUser(userData) {
        let li = document.createElement('li');
        li.classList.add("user-li")
        li.addEventListener('click', () => this.onUserSelected(userData));
        let user = new User(userData);
        li.innerHTML = user.html;
        return li;
    }
}