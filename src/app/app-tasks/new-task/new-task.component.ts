import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NewTaskData, Task } from "../task/task.model";

@Component({
    selector: 'app-new-task',
    imports: [
        FormsModule
    ],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    @Output() cancel = new EventEmitter<boolean>();
    @Output() add = new EventEmitter<NewTaskData>();
    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';

    onCancel() {
        this.cancel.emit(true);
    }

    onSubmit() {
        const newTask: NewTaskData = {
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        }
        this.add.emit(newTask);
    }
}
