import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from "./user/dummy-users";
import { AppTasksComponent } from "./app-tasks/app-tasks.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserComponent, AppTasksComponent],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('first-angular-app');
    users = DUMMY_USERS;
    selectedUserId: string = DUMMY_USERS[0].id;

    get selectedUser() {
        return this.users.find((user) => user.id === this.selectedUserId);
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
        console.log("selected user id:" + id);
    }
}
