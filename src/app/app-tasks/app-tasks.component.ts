import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from "../user/dummy-users";

@Component({
    selector: 'app-tasks',
    imports: [],
    templateUrl: './app-tasks.component.html',
    styleUrl: './app-tasks.component.css',
})
export class AppTasksComponent {
    @Input() userId: string | undefined;

    get getSelectedUser() {
        if (!this.userId) {
            return undefined;
        }

        return DUMMY_USERS.find((user) => user.id === this.userId);
    }
}
