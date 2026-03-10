import { Component, inject, Input } from '@angular/core';
import { DUMMY_USERS } from "../user/dummy-users";
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { AppTasksService } from "./app-tasks.service"

@Component({
    selector: 'app-tasks',
    imports: [
        TaskComponent,
        NewTaskComponent
    ],
    templateUrl: './app-tasks.component.html',
    styleUrl: './app-tasks.component.css',
})
export class AppTasksComponent {
    @Input({ required: true }) userId!: string;
    isAddingTask: boolean = false;
    private tasksService: AppTasksService = inject(AppTasksService);

    // constructor(tasksService: AppTasksService) {
    //     this.tasksService = tasksService;
    // }


    get getSelectedUser() {
        if (!this.userId) {
            return undefined;
        }

        return DUMMY_USERS.find((user) => user.id === this.userId);
    }

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId ?? 'u1');
    }

    onAddNewTask() {
        this.isAddingTask = true;
    }

    onCloseNewTask() {
        this.isAddingTask = false;
    }
}
