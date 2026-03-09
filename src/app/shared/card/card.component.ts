import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
    selector: 'app-card',
    imports: [
        ɵEmptyOutletComponent
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
}
