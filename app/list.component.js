System.register(['angular2/core', './services/index.service', './vendor/ng2-dragula/ng2-dragula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, index_service_1, ng2_dragula_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_service_1_1) {
                index_service_1 = index_service_1_1;
            },
            function (ng2_dragula_1_1) {
                ng2_dragula_1 = ng2_dragula_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_indexService, dragulaService) {
                    var _this = this;
                    this._indexService = _indexService;
                    this.dragulaService = dragulaService;
                    this.changed = new core_1.EventEmitter();
                    this.listUpdate = true;
                    this.initialData = [];
                    this.data = [];
                    this.oldData = [];
                    this.timeCounter = 2;
                    this.sortCounter = 0;
                    dragulaService.dropModel.subscribe(function (value) {
                        _this.copyData('oldData', 'data');
                        if (_this.autoSort) {
                            _this.reSort();
                        }
                    });
                }
                ListComponent.prototype.ngOnInit = function () {
                    var thisClass = this;
                    setTimeout(function () {
                        thisClass._indexService.getData()
                            .subscribe(function (data) { return thisClass.init(data); }, function (error) { return thisClass.showErrorMessage(error); });
                    }, thisClass.timeCounter * 1000);
                    var tm = setInterval(function () {
                        thisClass.timeCounter--;
                        if (thisClass.timeCounter === 0) {
                            clearInterval(tm);
                        }
                    }, 1000);
                };
                ListComponent.prototype.init = function (data) {
                    this.sortDataByIndex(data);
                    this.copyData('initialData', 'data');
                    this.copyData('oldData', 'data');
                    if (this.listUpdate) {
                        this.listUpdate = false;
                    }
                    ;
                };
                ListComponent.prototype.sortDataByIndex = function (data) {
                    var thisClass = this;
                    //set placeholder value
                    for (var i = 0; i < data.length; i++) {
                        data[i].placeholder = data[i].index;
                    }
                    this.data = data.sort(function (a, b) {
                        if (thisClass.validateNumber(a.index)) {
                            a.index = Number(a.index);
                        }
                        else {
                            a.index = -1;
                        }
                        if (thisClass.validateNumber(b.index)) {
                            b.index = Number(b.index);
                        }
                        else {
                            b.index = -1;
                        }
                        return a.index - b.index;
                    });
                };
                ListComponent.prototype.validateNumber = function (value) {
                    var checkReg = false;
                    var re = "^-?[0-9]*([.][0-9]*)?$";
                    var res = new RegExp(re);
                    checkReg = res.test(value);
                    return (checkReg) ? true : false;
                };
                //copy data to lose reference
                ListComponent.prototype.copyData = function (data, fromData) {
                    this[data] = [];
                    var dataLength = this[fromData].length;
                    for (var x = 0; x < dataLength; x++) {
                        this[data].push(Object.assign({}, this[fromData][x]));
                    }
                };
                ListComponent.prototype.countReposition = function () {
                    for (var x = 0; x < this.data.length; x++) {
                        for (var y = 0; y < this.oldData.length; y++) {
                            if (this.data[x].label === this.oldData[y].label) {
                                if (x !== y) {
                                    this.sortCounter += 1;
                                }
                            }
                        }
                    }
                };
                ListComponent.prototype.reSort = function () {
                    this.sortDataByIndex(this.data);
                    this.countReposition();
                    this.copyData('oldData', 'data');
                    this.changed.emit(this.sortCounter);
                };
                ListComponent.prototype.reset = function () {
                    this.copyData('data', 'initialData');
                    this.sortDataByIndex(this.data);
                    this.copyData('oldData', 'data');
                    this.sortCounter = 0;
                    this.changed.emit(this.sortCounter);
                };
                ListComponent.prototype.showErrorMessage = function (errorMessage) {
                    this.errorMessage = errorMessage;
                    this.listUpdate = false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "changed", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "autoSort", void 0);
                ListComponent = __decorate([
                    core_1.Component({
                        selector: '.list',
                        templateUrl: 'app/templates/list.html',
                        directives: [ng2_dragula_1.Dragula],
                        viewProviders: [ng2_dragula_1.DragulaService]
                    }), 
                    __metadata('design:paramtypes', [index_service_1.IndexService, ng2_dragula_1.DragulaService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map