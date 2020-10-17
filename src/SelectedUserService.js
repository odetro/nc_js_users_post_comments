class SelectedUserService {
    constructor() {

    }

    setSelectedUser(user) {
        this.user = user;
        this.callbackFn();
    }

    onUserChanged(callbackFn) {
        this.callbackFn = callbackFn;
    }
}

let selectedUserService = new SelectedUserService();