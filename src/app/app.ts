import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from "./user/dummy-users";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserComponent],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('first-angular-app');
    users = DUMMY_USERS;

    onSelectUser(id: string) {
        console.log("selected user id:" + id);
    }
}
