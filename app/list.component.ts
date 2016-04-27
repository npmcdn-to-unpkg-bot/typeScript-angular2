import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { IndexService } from './services/index.service';
import { AppComponent } from './app.component';
import { Dragula, DragulaService } from './vendor/ng2-dragula/ng2-dragula';

@Component({
    selector: '.list',
    templateUrl: 'app/templates/list.html',
    directives: [Dragula],
    viewProviders: [DragulaService]
})
export class ListComponent implements OnInit {
    @Output() changed = new EventEmitter();
    @Input() autoSort;
    listUpdate: boolean = true; 
    errorMessage: string;
    initialData: any[] = [];
    data: any[] = [];
    oldData: any[] = [];
    timeCounter: number = 2;
    sortCounter: number = 0;

    constructor(private _indexService: IndexService, private dragulaService: DragulaService) {
        dragulaService.dropModel.subscribe((value) => {
            this.copyData('oldData', 'data');
            if (this.autoSort) {                
                var elem = document.getElementById('submit-form-btn');
                var event = new Event('click');
                elem.dispatchEvent(event);
            }
        });
    }
    
    ngOnInit() {
        var thisClass = this;
        
        setTimeout(function() {
            thisClass._indexService.getData()
                .subscribe(
                    data => thisClass.init(data),
                    error => thisClass.showErrorMessage(<any>error)
                );
            
        }, thisClass.timeCounter * 1000);

        var tm = setInterval(function() {
            thisClass.timeCounter--;
            if (thisClass.timeCounter === 0) {
                clearInterval(tm);
            }
        }, 1000);
    }

    init(data) {
        this.sortDataByIndex(data);
        
        this.copyData('initialData', 'data');
        this.copyData('oldData', 'data');
        
        if (this.listUpdate) { this.listUpdate = false };
    }

    sortDataByIndex(data) {
        var thisClass = this;

        //set placeholder value
        for (var i = 0; i < data.length; i++ ) {
            data[i].placeholder = data[i].index;
        }

        this.data = data.sort(function(a, b) {
            if ( thisClass.validateNumber(a.index) ) { 
                a.index = Number(a.index);
            } else {
                a.index = -1;
            } 
            if ( thisClass.validateNumber(b.index) ) {
                b.index = Number(b.index);
            } else {
                b.index = -1;
            }
            return a.index - b.index;
        });
    }

    validateNumber(value) {
        var checkReg = false;
        var re = "^-?[0-9]*([.][0-9]*)?$";
        var res = new RegExp(re);

        checkReg = res.test(value);
        return (checkReg) ? true : false;
    }

    //copy data to lose reference
    copyData(data, fromData) {
        this[data] = [];
        var dataLength = this[fromData].length;
        for (var x = 0; x < dataLength; x++) {
            this[data].push(Object.assign({}, this[fromData][x]));
        }
    }

    countReposition() {
        for (var x = 0; x < this.data.length; x++) {
            for (var y = 0; y < this.oldData.length; y++) {
                if (this.data[x].label === this.oldData[y].label) {
                    if ( x !== y ) { this.sortCounter += 1; }
                }
            }
        }
    }

    reSort() {
        this.sortDataByIndex(this.data);
        this.countReposition();
        this.copyData('oldData', 'data');
        this.changed.emit(this.sortCounter);
    }

    reset() {
        this.copyData('data', 'initialData');
        this.sortDataByIndex(this.data);
        this.copyData('oldData', 'data');
        this.sortCounter = 0;
        this.changed.emit(this.sortCounter);
    }

    showErrorMessage(errorMessage) {
        this.errorMessage = errorMessage;
        this.listUpdate = false;
    }
}