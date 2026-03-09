import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type User } from "./user.model";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    @Output() selectedUser = new EventEmitter<string>();
    // Almost the same as regular Output
    selectedUserSignal = output<string>();

    // SIGNALS
    // avatar = input.required<string>();
    // name = input.required<string>();
    // imagePath = computed(() => {
    //     return 'public/users/' + this.avatar();
    // })

    get imagePath(): string {
        return 'public/users/' + this.user.avatar;
    }

    onSelectUser() {
        this.selectedUser.emit(this.user.id);
    }

    onSelectUserSignal() {
        this.selectedUserSignal.emit(this.user.id);
    }

    // =================================================================================================================
    // JUST FOR LEARNING PURPOSES
    // selectedUser = signal(DUMMY_USERS[randomIndex]);
    // imagePath = computed(() => 'public/users/' + this.selectedUser().avatar);


    // onSelectUser() {
    //     // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //     // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //     // this.selectedUser = DUMMY_USERS[randomIndex];
    // }
}
