"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import files from the angular framework
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var CdcComponent = /** @class */ (function () {
    // we will use form builder to simplify our syntax
    function CdcComponent(_fb, http) {
        this._fb = _fb;
        this.http = http;
        this.pacAppointUrl = "/api/curriculum-development/appoint/cdc";
    }
    CdcComponent.prototype.ngOnInit = function () {
        // we will initialize our form here
        this.myForm = this._fb.group({
            devCode: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            cdc: this._fb.array([
                this.initAddress(),
            ])
        });
    };
    CdcComponent.prototype.initAddress = function () {
        // initialize our address
        return this._fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            emailAddress: ['', forms_1.Validators.required],
            cellphone: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            workNumber: ['', forms_1.Validators.required]
        });
    };
    CdcComponent.prototype.addAddress = function () {
        // add address to the list
        var control = this.myForm.controls['cdc'];
        control.push(this.initAddress());
    };
    CdcComponent.prototype.removeAddress = function (i) {
        // remove address from the list
        var control = this.myForm.controls['cdc'];
        control.removeAt(i);
    };
    CdcComponent.prototype.save = function (model) {
        // call API to save customer
        // console.log(model);
        console.log(this.myForm.value);
        alert(this.myForm.value);
    };
    CdcComponent.prototype.startNeedAnalysis = function (model) {
        var body = JSON.stringify(this.myForm.value);
        var startHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var startOptions = new http_1.RequestOptions({ headers: startHeaders, method: "post" });
        return this.http.post(this.pacAppointUrl, body, startOptions)
            .map(function (response) { response = response.json(); });
    };
    CdcComponent.prototype.postDataToServer = function () {
        var _this = this;
        this.startNeedAnalysis(this.myForm.value)
            .subscribe(function (data) { return _this.postMyDataToServer = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
        error) { return console.log("Error HTTP Post Service"); }, // in case of failure show this message
        function () { return console.log("Job Done Post !"); } //run this code in all cases
        );
    };
    CdcComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cdc',
            templateUrl: 'cdc.component.html'
        })
    ], CdcComponent);
    return CdcComponent;
}());
exports.CdcComponent = CdcComponent;
