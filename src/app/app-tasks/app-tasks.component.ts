import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from "../user/dummy-users";
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";

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
    @Input() userId?: string;
    isAddingTask: boolean = false;

    tasks: Task[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        }
    ]

    get getSelectedUser() {
        if (!this.userId) {
            return undefined;
        }

        return DUMMY_USERS.find((user) => user.id === this.userId);
    }

    get selectedUserTasks() {
        let q = this.tasks.filter((task) => task.userId === this.userId);
        return q;
    }

    onCompleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onAddNewTask() {
        this.isAddingTask = true;
    }

    onCancelNewTask() {
        this.isAddingTask = false;
    }

    onAddTask(taskData: NewTaskData) {
        const newTask: Task = {
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            userId: this.userId ?? 'u1'
        }

        this.tasks.unshift(newTask);
        this.isAddingTask = false;
    }
}
