import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppTasksService } from "../app-tasks.service";

@Component({
    selector: 'app-new-task',
    imports: [
        FormsModule
    ],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    @Input({ required: true }) userId!: string;
    @Output() close = new EventEmitter<boolean>();

    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';

    // RECOMMENDED Angular v14+ di injection
    private tasksService: AppTasksService = inject(AppTasksService);

    // DEFAULT property-based injection
    // private tasksService: AppTasksService;
    //
    // constructor(tasksService: AppTasksService) {
    //     this.tasksService = tasksService;
    // }

    onCancel() {
        this.close.emit(true);
    }

    onSubmit() {
        this.tasksService.addUserTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        }, this.userId);

        this.close.emit(true);
    }
}
