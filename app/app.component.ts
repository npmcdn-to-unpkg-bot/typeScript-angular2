import { Component, ViewChild } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ListComponent } from './list.component';
import { IndexService } from './services/index.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [HTTP_PROVIDERS, IndexService],
    directives: [ListComponent]
})
export class AppComponent{
    @ViewChild(ListComponent) sortListComponent: ListComponent;
    autoSort: boolean = false;
    sortCounter: number;
    
    reSort() {
        this.sortListComponent.reSort();
    }

    changed(changedSortCounter) {
        this.sortCounter = changedSortCounter;
    }

    reset() {
        this.sortListComponent.reset();
    }
}

