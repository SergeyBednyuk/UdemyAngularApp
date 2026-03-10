import { Component, inject, Input } from '@angular/core';
import { type Task } from "./task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { AppTasksService } from "../app-tasks.service";


@Component({
    selector: 'app-task',
    imports: [
        CardComponent,
        DatePipe
    ],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;

    private tasksService: AppTasksService = inject(AppTasksService);

    onTaskComplete() {
        this.tasksService.removeTask(this.task.id);
    }
}
