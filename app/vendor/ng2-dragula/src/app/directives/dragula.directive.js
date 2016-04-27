"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var dragula_provider_1 = require('../providers/dragula.provider');
var dragula = require('dragula');
var Dragula = (function () {
    function Dragula(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.container = el.nativeElement;
    }
    Dragula.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bag);
        var bag = this.dragulaService.find(this.bag);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula({
                containers: [this.container]
            });
            checkModel();
            this.dragulaService.add(this.bag, this.drake);
        }
    };
    Dragula.prototype.ngOnChanges = function (changes) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes['dragulaModel']) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes['dragulaModel'].previousValue);
                    this.drake.models.splice(modelIndex, 1, changes['dragulaModel'].currentValue);
                }
                else {
                    this.drake.models = [changes['dragulaModel'].currentValue];
                }
            }
        }
    };
    __decorate([
        core_1.Input('dragula'), 
        __metadata('design:type', String)
    ], Dragula.prototype, "bag", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Dragula.prototype, "dragulaModel", void 0);
    Dragula = __decorate([
        core_1.Directive({
            selector: '[dragula]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, dragula_provider_1.DragulaService])
    ], Dragula);
    return Dragula;
}());
exports.Dragula = Dragula;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3VsYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmFndWxhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBT08sZUFBZSxDQUFDLENBQUE7QUFDdkIsaUNBQTZCLCtCQUErQixDQUFDLENBQUE7QUFDN0QsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFLbkM7SUFNRSxpQkFBb0IsRUFBYyxFQUFVLGNBQThCO1FBQXRELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJDLHlCQUF5QjtRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxVQUFVLEdBQUc7WUFDZixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsVUFBVSxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNuQixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILFVBQVUsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksT0FBMkM7UUFDckQsaURBQWlEO1FBQ2pELHdCQUF3QjtRQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQS9DRDtRQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O3dDQUFBO0lBQ2pCO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUxWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUM7O2VBQUE7SUFrREYsY0FBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksZUFBTyxVQWlEbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RyYWd1bGFTZXJ2aWNlfSBmcm9tICcuLi9wcm92aWRlcnMvZHJhZ3VsYS5wcm92aWRlcic7XG5pbXBvcnQgKiBhcyBkcmFndWxhIGZyb20gJ2RyYWd1bGEnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZ3VsYV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWd1bGEgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZHJhZ3VsYScpIGJhZzogc3RyaW5nO1xuICBASW5wdXQoKSBkcmFndWxhTW9kZWw6IGFueTtcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBkcmFrZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IERyYWd1bGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5iYWcpO1xuICAgIGxldCBiYWcgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5iYWcpO1xuICAgIGxldCBjaGVja01vZGVsID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW3RoaXMuZHJhZ3VsYU1vZGVsXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGJhZykge1xuICAgICAgdGhpcy5kcmFrZSA9IGJhZy5kcmFrZTtcbiAgICAgIGNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmFrZSA9IGRyYWd1bGEoe1xuICAgICAgICBjb250YWluZXJzOiBbdGhpcy5jb250YWluZXJdXG4gICAgICB9KTtcbiAgICAgIGNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2UuYWRkKHRoaXMuYmFnLCB0aGlzLmRyYWtlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RyYWd1bGEuZGlyZWN0aXZlOiBuZ09uQ2hhbmdlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXNbJ2RyYWd1bGFNb2RlbCddKSB7XG4gICAgICBpZiAodGhpcy5kcmFrZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgICBsZXQgbW9kZWxJbmRleCA9IHRoaXMuZHJha2UubW9kZWxzLmluZGV4T2YoY2hhbmdlc1snZHJhZ3VsYU1vZGVsJ10ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEsIGNoYW5nZXNbJ2RyYWd1bGFNb2RlbCddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbY2hhbmdlc1snZHJhZ3VsYU1vZGVsJ10uY3VycmVudFZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19