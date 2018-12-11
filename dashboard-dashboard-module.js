(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "./src/app/dashboard/test/test.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-footer/default-footer.component */ "./src/app/dashboard/default-footer/default-footer.component.ts");
/* harmony import */ var _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-header/default-header.component */ "./src/app/dashboard/default-header/default-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            declarations: [
                _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_5__["DefaultFooterComponent"],
                _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_6__["DefaultHeaderComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/default-footer/default-footer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/default-footer/default-footer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/default-footer/default-footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/default-footer/default-footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/default-footer/default-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/default-footer/default-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: DefaultFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFooterComponent", function() { return DefaultFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultFooterComponent = /** @class */ (function () {
    function DefaultFooterComponent() {
    }
    DefaultFooterComponent.prototype.ngOnInit = function () {
    };
    DefaultFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./default-footer.component.html */ "./src/app/dashboard/default-footer/default-footer.component.html"),
            styles: [__webpack_require__(/*! ./default-footer.component.css */ "./src/app/dashboard/default-footer/default-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultFooterComponent);
    return DefaultFooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/default-header/default-header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/default-header/default-header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/default-header/default-header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/default-header/default-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    Header Header\r\n</header>"

/***/ }),

/***/ "./src/app/dashboard/default-header/default-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/default-header/default-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: DefaultHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHeaderComponent", function() { return DefaultHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultHeaderComponent = /** @class */ (function () {
    function DefaultHeaderComponent() {
    }
    DefaultHeaderComponent.prototype.ngOnInit = function () {
    };
    DefaultHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./default-header.component.html */ "./src/app/dashboard/default-header/default-header.component.html"),
            styles: [__webpack_require__(/*! ./default-header.component.css */ "./src/app/dashboard/default-header/default-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultHeaderComponent);
    return DefaultHeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-doctor{\r\n    color: green;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <body>\n      <div>\n            <app-header></app-header> \n      </div>\n      <div class=\"newRow\">\n          <h3 class=\"header-doctor\">Welcome Dr. {{docLName}}</h3>\n          <li class=\"col-md-8\"><button (click)=\"logout()\" type=\"button\"  class=\"btn btn-md btn-success login-button\">Logout</button>\n      </div>\n      <!-- <test-dash></test-dash> -->\n      <!-- <app-footer></app-footer> -->\n      <!-- <app-default-footer ></app-default-footer> -->\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http) {
        this.router = router;
        this.http = http;
        var myDtl;
        //console.log(localStorage.getItem('TOKEN'));
        myDtl = JSON.parse(localStorage.getItem('TOKEN'));
        //console.log(myDtl);
        this.docLName = String(myDtl['doctorId']);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        alert('logout called');
        var myDtl;
        //console.log(localStorage.getItem('TOKEN'));
        myDtl = JSON.parse(localStorage.getItem('TOKEN'));
        //console.log(myDtl);
        this.docLName = String(myDtl['doctorId']);
        this.http.put("https://medikate.org/glclapitest/login/doclogout", {
            "doctorId": String(myDtl['doctorId']),
            "loginMode": "",
            "logoutBy": "",
            "sessionId": "",
            "userCustomerId": ""
        }).subscribe(function (res) {
            var responseDto;
            responseDto = res;
            if (responseDto['returnValue'] === '1') {
                localStorage.removeItem('TOKEN');
                _this.router.navigate(['/', 'login']);
            }
            else {
                alert('Error while logout');
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/test/test.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/test/test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/test/test.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/test/test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n<button type=\"button\" (click)= function()>click for magic</button>"

/***/ }),

/***/ "./src/app/dashboard/test/test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/test/test.component.ts ***!
  \**************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/alert.service */ "./src/app/_service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(testservice) {
        this.testservice = testservice;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.function = function () {
        this.testservice.putalert();
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-dash',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/dashboard/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/dashboard/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map