System.register(['angular2/core', 'angular2/http', './list.component', './services/index.service'], function(exports_1, context_1) {
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
    var core_1, http_1, list_component_1, index_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (index_service_1_1) {
                index_service_1 = index_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.autoSort = false;
                }
                AppComponent.prototype.reSort = function () {
                    this.sortListComponent.reSort();
                };
                AppComponent.prototype.changed = function (changedSortCounter) {
                    this.sortCounter = changedSortCounter;
                };
                AppComponent.prototype.reset = function () {
                    this.sortListComponent.reset();
                };
                __decorate([
                    core_1.ViewChild(list_component_1.ListComponent), 
                    __metadata('design:type', list_component_1.ListComponent)
                ], AppComponent.prototype, "sortListComponent", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.html',
                        providers: [http_1.HTTP_PROVIDERS, index_service_1.IndexService],
                        directives: [list_component_1.ListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map