import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;
    @Output() selectedUser = new EventEmitter();

    // avatar = input.required<string>();
    // name = input.required<string>();
    // imagePath = computed(() => {
    //     return 'public/users/' + this.avatar();
    // })

    get imagePath(): string {
        return 'public/users/' + this.avatar;
    }

    onSelectUser() {
        this.selectedUser.emit(this.id);
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
