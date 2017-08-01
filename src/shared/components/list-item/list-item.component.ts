import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['list-item.component.scss'],
    templateUrl: 'list-item.component.html'
})
export class ListItemComponent {

    toggled = false;

    @Input()
    item: any;

    @Input()
    url: string;

    @Input()
    index: number;

    @Output()
    remove = new EventEmitter<any>();

    constructor() { }

    toggle() {
        this.toggled = !this.toggled;
    }

    removeItem() {
        this.remove.emit(this.item);
    }

    getRoute(item: any) {        
        return [`../${this.url}`, item.$key];
    }
}