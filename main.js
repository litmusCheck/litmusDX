(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directive/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_directive/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dialog_open_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/dialog-open.service */ "./src/app/_service/dialog-open.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n          <div class=\"jw-modal-body\">\n              <ng-content></ng-content>\n          </div>\n      </div>\n      <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [src_app_service_dialog_open_service__WEBPACK_IMPORTED_MODULE_1__["DialogOpenService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/_directive/test.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/_directive/test.directive.ts ***!
  \**********************************************/
/*! exports provided: TestDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDirective", function() { return TestDirective; });
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

var TestDirective = /** @class */ (function () {
    function TestDirective() {
    }
    TestDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTest]'
        }),
        __metadata("design:paramtypes", [])
    ], TestDirective);
    return TestDirective;
}());



/***/ }),

/***/ "./src/app/_guard/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/_guard/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/authentication.service */ "./src/app/_service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.authenticationService.isLogged()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/login'], {
            queryParams: {
                redirectUrl: redirectUrl
            }
        }));
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_service/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_service/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        alert('alertservice');
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.putalert = function () {
        alert('Go home');
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_service/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_service/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOKEN = 'TOKEN';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.setToken = function (token, lname) {
        if ('1' === token) {
            localStorage.setItem(TOKEN, lname);
            alert('settoken docDtl');
        }
        else {
            localStorage.setItem(TOKEN, "false");
            alert('settoken false');
        }
    };
    AuthenticationService.prototype.isLogged = function () {
        if ((localStorage.getItem(TOKEN) === 'false')) {
            return false;
        }
        else {
            return (localStorage.getItem(TOKEN) !== null);
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_service/customer-login.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_service/customer-login.service.ts ***!
  \****************************************************/
/*! exports provided: CustomerLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLoginService", function() { return CustomerLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerLoginService = /** @class */ (function () {
    function CustomerLoginService(http) {
        this.http = http;
    }
    CustomerLoginService.prototype.login = function (userInput) {
        return this.http.post("https://medikate.org/glclapitest/login/doc", userInput);
    };
    CustomerLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerLoginService);
    return CustomerLoginService;
}());



/***/ }),

/***/ "./src/app/_service/dialog-open.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_service/dialog-open.service.ts ***!
  \*************************************************/
/*! exports provided: DialogOpenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOpenService", function() { return DialogOpenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogOpenService = /** @class */ (function () {
    function DialogOpenService() {
        this.modals = [];
    }
    DialogOpenService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    DialogOpenService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    DialogOpenService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    DialogOpenService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    DialogOpenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DialogOpenService);
    return DialogOpenService;
}());



/***/ }),

/***/ "./src/app/_service/registeration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_service/registeration.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationService", function() { return RegisterationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterationService = /** @class */ (function () {
    function RegisterationService(http) {
        this.http = http;
    }
    RegisterationService.prototype.getDocSpecilazion = function () {
        return this.http.get("https://medikate.org/glclapitest/docspecilizations/available");
    };
    RegisterationService.prototype.getLanguageList = function () {
        return this.http.get("https://medikate.org/glclapitest/language");
    };
    RegisterationService.prototype.getDocQualificationList = function () {
        return this.http.get("https://medikate.org/glclapitest/docqualifications");
    };
    RegisterationService.prototype.sendOtp = function (strJson) {
        return this.http.post("https://medikate.org/glclapitest/docregs/pre", strJson);
    };
    RegisterationService.prototype.registerDoc = function (dto) {
        return this.http.post("https://medikate.org/glclapitest/docregs", dto);
    };
    RegisterationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterationService);
    return RegisterationService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guard/auth.guard */ "./src/app/_guard/auth.guard.ts");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    // {
    //   path:'dashboard',
    //   component:HomeComponent,
    //   canActivate:[AuthGuard]
    //  },
    {
        path: 'login/new-register',
        component: _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"]
    },
    {
        path: 'login/password-forgot',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'login/home',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test{\r\n    display: none !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'litmusDX';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_service/authentication.service */ "./src/app/_service/authentication.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_service/alert.service */ "./src/app/_service/alert.service.ts");
/* harmony import */ var _service_customer_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_service/customer-login.service */ "./src/app/_service/customer-login.service.ts");
/* harmony import */ var _directive_test_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_directive/test.directive */ "./src/app/_directive/test.directive.ts");
/* harmony import */ var _directive_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_directive/modal/modal.component */ "./src/app/_directive/modal/modal.component.ts");
/* harmony import */ var _service_dialog_open_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_service/dialog-open.service */ "./src/app/_service/dialog-open.service.ts");
/* harmony import */ var _service_registeration_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_service/registeration.service */ "./src/app/_service/registeration.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _directive_test_directive__WEBPACK_IMPORTED_MODULE_13__["TestDirective"],
                _directive_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"]
            ],
            providers: [
                _service_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _service_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _service_customer_login_service__WEBPACK_IMPORTED_MODULE_12__["CustomerLoginService"],
                _service_dialog_open_service__WEBPACK_IMPORTED_MODULE_15__["DialogOpenService"],
                _service_registeration_service__WEBPACK_IMPORTED_MODULE_16__["RegisterationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
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

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-image:url('login_bg.jpg');\r\n    background-position: 0% 0%;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-size: cover !important;\r\n}\r\n.main-header, header,.main-footer,footer{\r\n    display: none !important;\r\n}\r\n.login_page {\r\n    padding-top: 100px;\r\n}\r\n.login-panel {\t\r\n    position: relative;\r\n    padding: 30px 75px;\r\n    border-radius: 8px;\r\n    background-color: rgba(255,255,255,0.25);\r\n    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.5);\r\n}\r\n.login-panel h1, h2, h3 { margin:0 0 15px 0; padding: 0;color:red;}\r\n.login-button { width: 150px; text-transform: uppercase; font-size:18px;}\r\n.input-holder {\r\n    list-style: none;\r\n    margin: 0; padding: 0;\r\n    font-size: 20px;\r\n    color:#fff;\r\n    font-weight:normal;\r\n}\r\n.input-holder li {\r\n    position: relative;\r\n    float:left;\r\n    margin-bottom: 15px;\r\n}\r\n.partition {\r\n    width: 100%;\r\n    height: 0px;\r\n    margin: 10px 0;\r\n    border-top:2px solid rgba(0,0,0,0.5) !important;\r\n    border-bottom:1px solid rgba(255,255,255,0.5) !important;\r\n}\r\nlds-roller {\r\n    position: fixed;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n.lds-roller div {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    -webkit-transform-origin: 32px 32px;\r\n            transform-origin: 32px 32px;\r\n  }\r\n.lds-roller div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: rgb(231, 60, 8);\r\n    margin: -3px 0 0 -3px;\r\n  }\r\n.lds-roller div:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n.lds-roller div:nth-child(1):after {\r\n    top: 50px;\r\n    left: 50px;\r\n  }\r\n.lds-roller div:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n.lds-roller div:nth-child(2):after {\r\n    top: 54px;\r\n    left: 45px;\r\n  }\r\n.lds-roller div:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n.lds-roller div:nth-child(3):after {\r\n    top: 57px;\r\n    left: 39px;\r\n  }\r\n.lds-roller div:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n.lds-roller div:nth-child(4):after {\r\n    top: 58px;\r\n    left: 32px;\r\n  }\r\n.lds-roller div:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n.lds-roller div:nth-child(5):after {\r\n    top: 57px;\r\n    left: 25px;\r\n  }\r\n.lds-roller div:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n.lds-roller div:nth-child(6):after {\r\n    top: 54px;\r\n    left: 19px;\r\n  }\r\n.lds-roller div:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n.lds-roller div:nth-child(7):after {\r\n    top: 50px;\r\n    left: 14px;\r\n  }\r\n.lds-roller div:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n.lds-roller div:nth-child(8):after {\r\n    top: 45px;\r\n    left: 10px;\r\n  }\r\n@-webkit-keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n@keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>  \n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>LitmusDX</title>\n<!-- <link href=\"https://fonts.googleapis.com/css?famil=yRoboto\" rel=\"stylesheet\"> -->\n\n<!-- Bootstrap -->\n<!-- <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.css\"> -->\n\n\n<!--HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n<!--[if lt IE 9]>\n      <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\n      <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n</head>\n<body>\n<div class=\"container login_page\">\n  <div class=\"row\">\n\t<div class=\"col-md-4 align-center\">\n\t  <div class=\"logo-holder\">\n\t\t\t\t<img src=\"../../assets/images/logo_litmusDx.png\" alt=\"LitmusDX\" width=\"\" height=\"\" />\n\t  </div>\n\t\t</div>\n\t<div class=\"col-md-7\">\n\t  <div class=\"login-panel\">\n\t\t\t\t<h3 class=\"align-center txt-white\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Doctor Login</h3>\n\t\t\t\t<div class=\"inputs\">\t\t\t\t\n\t\t\t\t  <div class=\"row\">\n\t\t\n\t\t\t\t\t<form action=\"\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t<ul class=\"input-holder form-group\" >\n\t\t\t\t\t\t  <li class=\"col-md-4\">Email</li>\n              <li class=\"col-md-8\"><input class=\"form-control\" type=\"text\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" >\n                    <span *ngIf=\"f.email.errors.required\"><font  style=\"color:red\">User name is required</font></span>\n                </div> \n              </li>\n\t\t\t\t\t\t  <li class=\"col-md-4\">Password</li>\n              <li class=\"col-md-8\"><input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\">\n                    <span *ngIf=\"f.password.errors.required\" ><span><font style=\"color:red\">Password is required</font></span></span>\n                </div> \n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<!--  loading gif show when it makes to login api calls\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && !(validateLogin)\" class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> \n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t  <li class=\"col-md-4\">&nbsp;</li>\n\t\t\t\t\t\t\t<li class=\"col-md-8\"><button type=\"submit\"  class=\"btn btn-md btn-success login-button\">Login</button>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && validateLogin\">\n\t\t\t\t\t\t\t\t\t<span><font style=\"color:red\">Invalid user name or Password</font></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t  <li class=\"col-md-4\">&nbsp;</li>\n\t\t\t\t\t\t  <li class=\"col-md-8 text-small\"> <a role=\"button\" (click)=\"changePass('forgotPassDlg')\" >Forgot your password?</a><span style=\"float: right;\">New User?  <a routerLink=\"new-register\">Sign up</a></span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</form>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t  <hr class=\"partition\"/>\n\t\t\t\t  <div class=\"row align-center\">\n\t\t\t\t\t\t<h4 class =\"align-center txt-white\"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Find \"Hellolyf for Doctors\" in Playstore</h4>\n\t\t\t\t\t<ul class=\"icon-holder\">\n\t\t\t\t\t  <li><img src=\"../../assets/images/icon_googlePlay.svg\" width=\"225\" /></li>\n\t\t\t\t\t  <li><img src=\"../../assets/images/icon_qrCode.svg\" width=\"70\" /></li>\n\t\t\t    \t</ul>\n\t\t\t\t\t</div>\t\t  \t\t\t\t\n\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"disclaimer\">\n\t\t\t<p><b>DISCLAIMER:</b> The contents of LitmusDx are for informational purposes only, and do not provide a substitute for professional medical advice, diagnosis, or treatment. LitmusDx does not recommend or endorse any specific tests, procedures, opinions, or other information that may be mentioned herein. Your signup implies that you have assumed complete accountability for the use of this product, including but not limited to indemnification of LitmusDx and its team from any liabilities arising out of such use</p>\n\t\t</div>\n\t\t</div>\n\t</div><!-- row ends -->\n</div>\n\n\n<footer class=\"text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <p>Copyright © Glocal Healthcare Systems. All rights reserved.</p>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- jQuery (necessary for Bootstrap's JavaScript plugins) \n<script src=\"../../node_modules/jquery/dist/jquery.min.js\"></script> \n Include all compiled plugins (below), or include individual files as needed  \n<script src=\"../../node_modules/bootstrap/dist/js/bootstrap.js\"></script> --> \n</body>\n\n<!-- modal start from here -->\n<jw-modal id=\"forgotPassDlg\" spellcheck=\"true\" draggable=\"true\"  style=\"animation: alternate; background-position-x: 0%; background-position-y: 0%\">\n    <h1 class=\"dlgheader\">Change Password:</h1>\n\t\t<p>Register EmailId :<input type=\"text\" [(ngModel)]=\"emailForPassChange\"></p>\n\t\t<div *ngIf =\"!checkerOTP\">\n\t\t\t\t<button (click)=\"sendOtp();\">sendOtp</button>\n\t\t</div>\n\t\t<div *ngIf =\"checkerOTP\">\n\t\t\t\tEnter OTP:<input type=\"text\" [(ngModel)]=\"otp\">\n\t\t\t\t<button (click)=\"verifyOTP();\">Verify</button>\n\t\t</div>\n\t\t<div *ngIf =\"verifyOTPValue\">\n\t\t\t\t<p>Enter New Password: &nbsp; &nbsp; &nbsp; &nbsp;<input type=\"text\" [(ngModel)]=\"newPass\" placeholder=\"New Password\"></p>\n\t\t\t\t<p>ReEnter New Password:&nbsp; &nbsp;&nbsp; <input type=\"text\" [(ngModel)]=\"newPassCheck\" placeholder=\"New Password\"></p>\t\n\t\t\t\t<button (click)=\"changePassword();\">changePassword</button>\n\t\t</div>\n    <button (click)=\"closeModal('forgotPassDlg');\">Close</button>\n  </jw-modal>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_doclogindtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/doclogindtl */ "./src/app/model/doclogindtl.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/authentication.service */ "./src/app/_service/authentication.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/alert.service */ "./src/app/_service/alert.service.ts");
/* harmony import */ var _service_customer_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_service/customer-login.service */ "./src/app/_service/customer-login.service.ts");
/* harmony import */ var _service_dialog_open_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_service/dialog-open.service */ "./src/app/_service/dialog-open.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, loginService, dialogOpenService, http) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loginService = loginService;
        this.dialogOpenService = dialogOpenService;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.checkerOTP = false;
        this.verifyOTPValue = false;
        this.validateLogin = false;
        this.userInput = new _model_doclogindtl__WEBPACK_IMPORTED_MODULE_3__["Doclogindtl"]();
        this.docDtl = new _model_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.validateLogin = false;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.userInput.userId = this.f.email.value;
        this.userInput.loginPwd = this.f.password.value;
        this.loginService.login(this.userInput)
            .subscribe(function (r) {
            _this.docDtl = r;
            if (null !== r.resStatus) {
                _this.authenticationService.setToken(r.resStatus, JSON.stringify(_this.docDtl));
                _this.validateLogin = !(_this.authenticationService.isLogged());
                _this.router.navigate(['/', 'dashboard']);
                console.log(_this.docDtl);
            }
        }, function (r) {
            alert('Error while login:');
        });
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    };
    LoginComponent.prototype.changePass = function (id) {
        this.dialogOpenService.open(id);
    };
    LoginComponent.prototype.closeModal = function (id) {
        this.dialogOpenService.close(id);
    };
    LoginComponent.prototype.sendOtp = function () {
        // verify register emailid
        //send otp to register emailid
        alert('otp send to register emailid:' + this.emailForPassChange);
        this.checkerOTP = true;
    };
    LoginComponent.prototype.changePassword = function () {
        // check newPassword === reenter password 
        //if not equal show error
        //else change password and show successfull message
        alert('password successfully update');
        this.dialogOpenService.close('forgotPassDlg');
    };
    LoginComponent.prototype.verifyOTP = function () {
        // verify send otp 
        //if false then show wrong otp
        //else 
        this.verifyOTPValue = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _service_customer_login_service__WEBPACK_IMPORTED_MODULE_6__["CustomerLoginService"],
            _service_dialog_open_service__WEBPACK_IMPORTED_MODULE_7__["DialogOpenService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/doc-pre-reg-dtl.ts":
/*!******************************************!*\
  !*** ./src/app/model/doc-pre-reg-dtl.ts ***!
  \******************************************/
/*! exports provided: DocPreRegDtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPreRegDtl", function() { return DocPreRegDtl; });
var DocPreRegDtl = /** @class */ (function () {
    function DocPreRegDtl() {
    }
    return DocPreRegDtl;
}());



/***/ }),

/***/ "./src/app/model/doclogindtl.ts":
/*!**************************************!*\
  !*** ./src/app/model/doclogindtl.ts ***!
  \**************************************/
/*! exports provided: Doclogindtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doclogindtl", function() { return Doclogindtl; });
var Doclogindtl = /** @class */ (function () {
    function Doclogindtl() {
    }
    return Doclogindtl;
}());



/***/ }),

/***/ "./src/app/model/response-dto.ts":
/*!***************************************!*\
  !*** ./src/app/model/response-dto.ts ***!
  \***************************************/
/*! exports provided: ResponseDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseDto", function() { return ResponseDto; });
var ResponseDto = /** @class */ (function () {
    function ResponseDto() {
    }
    return ResponseDto;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerclass{\r\n    text-align: center;\r\n    color: red\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class= \"headerclass\">Page Not Found</h1>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-form/register-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-form/register-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>LitmusDX</title>\n\n<!-- Bootstrap -->\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i\" />\n<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Philosopher\" />\n\n<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n<!--[if lt IE 9]>\n      <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\n      <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n</head>\n<body>\n<!-- <app-default-header ></app-default-header> -->\n<header>\n\t\t<div class=\"header\">\n\t\t\t<nav class=\"navbar fixed-top navbar-light\">\n\t\t\t\t<div class=\"col-md-4 brand-container\">\n\t\t\t\t\t<a class=\"navbar-brand clearfix\" href=\"#\">\t\t\n\t\t\t\t\t\t<img src=\"../../assets/images/hellolyf.svg\" width=\"175px\" height=\"auto\" />\t\t\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"logo-part\">\n\t\t\t\t\t<li class=\"helpline-number\"><img src=\"../../assets/images/icon/icon-phone.svg\" width=\"14px\" height=\"auto\"/><a href=\"tel:18001234425\">1800 1234 425</a></li>\n\t\t\t\t\t<li class=\"helpline-mail\"><img src=\"../../assets/images/icon/icon-email.svg\" width=\"14x\" height=\"auto\"/><a href=\"mailto:crmhead@glocal.healthcare\">crmhead@glocal.healthcare</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\t  \n\t\t\t</nav>\n\t\t</div>\n\t</header> \n<div class=\"content-block\">\n\n<form id=\"registration\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"container\">\n  <div class=\"row\">\n\t<div class=\"col-md-4 left-column\">\n\t <h2 class=\"intro-text\"><span>The presence of a doctor is the beginning of the cure</span></h2>\n\t</div>\n\t<div class=\"col-md-8\">\n\t <h4>Physician Registration</h4>\n\t <div class=\"registration-formHolder\">\n\t \n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">First Name</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon\">Dr.</span>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"docFirstName\" placeholder=\"First Name\">\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">Last Name</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"docLastName\" placeholder=\"Last Name\" >\n\t\t\t</div>\t\t\t\t\n\t\t</div><!-- row ends -->\n\t </div>\n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-sm-6\">\t\t\t\t\n\t\t\t\t<label for=\"\" class=\"\">\n\t\t\t\t\tSelect your Specialization\n\t\t\t\t</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<select class=\"custom-select\" id=\"specialization\" formControlName=\"selectedSpecId\" required=\"\">\n\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t<option value=\"{{specialization.litDocSpecalizeId}}\" *ngFor=\"let specialization of docSpecList\">\n\t\t\t\t\t\t{{specialization.specializationName}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\t\t\t\t\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">\n\t\t\t\t\tSelect your Qualification\n\t\t\t\t</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<ng-select [items]=\"qualificationList\"\n\t\t\t\t\tbindLabel=\"qualificationName\"\n\t\t\t\t\tbindValue=\"qualificationId\"\n\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\tplaceholder=\"Select Qulifications\"\n\t\t\t\t\tformControlName=\"seletedQualIds\">\n\t\t\t\t</ng-select>\n\t\t\t</div>\t\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\t </div>\n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-sm-6\">\t\t\t\t\n\t\t\t\t<label for=\"\" class=\"\">Select Language (Multiple)</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<!-- <select multiple=\"multiple\" class=\"form-control js-example-basic-multiple\" id=\"language\" placeholder=\"Select Languages\" formControlName=\"selectedLangIds\" >\n\t\t\t\t\t\t <option value=\"\">Select</option> \n\t\t\t\t\t\t<option value=\"{{languageDto.languageId}}\" *ngFor=\"let languageDto of languageList\">\n\t\t\t\t\t\t\t{{languageDto.language}}\n\t\t\t\t\t\t</option>\t\t\t\t\t\n\t\t\t\t</select> -->\n\t\t\t\t \n\t\t\t\t\t<ng-select class=\"js-example-basic-multipl \" \n\t\t\t\t\t\t\t[items]=\"languageList\"\n\t\t\t\t\t\t\tbindLabel=\"language\"\n\t\t\t\t\t\t\tbindValue=\"languageId\"\n\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\tplaceholder=\"Select Languages\"\n\t\t\t\t\t\t\tformControlName=\"selectedLangIds\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t \n\t\t\t</div>\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">Email</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<input type=\"email\" class=\"form-control\" maxlength=\"50\" (change)=\"ValidateEmail();\" id=\"emailId\" formControlName=\"emailId\" placeholder=\"example@xxx.yyy\" > \n\t\t\t</div>\t\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\t </div>\t \n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\t\t\t\t\t\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<label for=\"\" class=\"\">Experience (Years)</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<input type=\"text\" class=\"form-control phone-number\" maxlength=\"2\" id=\"experience\" formControlName=\"expYears\"  placeholder=\"\" > \n\t\t\t</div>\t\t\n\t\t\t\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<label for=\"docImg\" class=\"\">Profile Image</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t  <input  type=\"file\" class=\"custom-file-input\"  (change)=\"profilePicUpload($event)\" accept=\"image/*\" id=\"docImg\" >\n\t\t\t\t  <label class=\"custom-file-label\" for=\"docImg\">Choose file</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<label for=\"signature\" class=\"\">Upload Signature</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t  <input type=\"file\" class=\"custom-file-input\" id=\"signature\" (change)=\"signUpload($event)\" value=\"\">\n\t\t\t\t  <label class=\"custom-file-label\" for=\"Signature\">Choose file</label>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t\t\n\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\n\n\t </div>\t\t \n \n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"mciRegNo\" class=\"\">MCI Registration Number (MBBS or equivalent)</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"20\" placeholder=\"\" id=\"mciRegNo\" formControlName=\"mciNo\" > \n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"certificate\" >MCI Certificate (MBBS or Equivalent)</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t  <input type=\"file\" class=\"custom-file-input\" id=\"certificate\" (change)=\"certificateUpload($event)\" >\n\t\t\t\t  <label class=\"custom-file-label\" for=\"certificate\">Choose file</label>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\t </div>\t \n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"mciRegNo_md\" class=\"\">MCI Registration Number (MD or equivalent)</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"20\" id=\"mciRegNo_md\" formControlName=\"mciRegNo_md\" placeholder=\"\" > \n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label  for=\"certificate_md\" class=\"\">MCI Certificate (MD or Equivalent)</label>\n\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t  <input type=\"file\" class=\"custom-file-input\" id=\"certificate_md\" (change)=\"certificatemdUpload($event)\" value=\"\">\n\t\t\t\t  <label class=\"custom-file-label\" for=\"certificate_md\">Choose file</label>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\t </div>\t\t \n\t <div class=\"form-group\">\n\t\t<div class=\"row\">\t\t\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"mciRegNo_dm\" class=\"\">MCI Registration Number (DM or equivalent)</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" maxlength=\"20\" id=\"mciRegNo_dm\" formControlName=\"mciRegNo_dm\"  placeholder=\"\" > \n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"certificate_dm\" class=\"\">MCI Certificate (DM or Equivalent)</label>\n\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t  <input type=\"file\" class=\"custom-file-input\" id=\"certificate_dm\" (change)=\"certificateDmUpload($event)\" value=\"\">\n\t\t\t\t  <label class=\"custom-file-label\" for=\"certificate_dm\">Choose file</label>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div><!-- row ends -->\t\t \n\t </div>\n\n\t<div class=\"form-group\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">Mobile Number</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control phone-number\" maxlength=\"10\"  id=\"mobNumber\" formControlName=\"mobNumber\" placeholder=\"\" >\t\t\t\t\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-otp\" id=\"OTP_send\" [disabled]=\"isDisabled\" (click)=\"generateOTP()\" >Send OTP</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"\" class=\"\">Enter OTP</label> <span class=\"required-icon\">*</span>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control otp\" id=\"txtotp\" formControlName=\"txtotp\" maxlength=\"10\"  placeholder=\"\" >\t\t\t\t\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-otp\" id=\"OTP\" (click)=\"validateOTP()\">Validate OTP</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<label class=\"required-note\"><span class=\"required-icon\">*</span> fields are mandatory & Only jpg, png, jpeg are allowed for document</label>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<a href=\"#\" onclick=\"formSubmit();\">\n\t\t\t\t\t<input class=\"btn btn-primary btn-lg\" type=\"submit\" value=\"Submit\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- row ends -->\n</div>\n</div>\n</div>\n</form>\n</div><!-- content-block ends -->\n<!-- <pre>{{this.registrationForm.value | json}}</pre>  -->\n<!-- <app-default-footer></app-default-footer> -->\n<footer class=\"text-center\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<p>Copyright © Glocal Healthcare Systems. All rights reserved.</p>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer> \n</body>\n</html>"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_registeration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/registeration.service */ "./src/app/_service/registeration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_doc_pre_reg_dtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/doc-pre-reg-dtl */ "./src/app/model/doc-pre-reg-dtl.ts");
/* harmony import */ var _model_response_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/response-dto */ "./src/app/model/response-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_service/alert.service */ "./src/app/_service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(router, fb, registrationService, http, cd, el, alertService) {
        this.router = router;
        this.fb = fb;
        this.registrationService = registrationService;
        this.http = http;
        this.cd = cd;
        this.el = el;
        this.alertService = alertService;
        this.reffralVals = ['Facebook', 'Media', 'Glocal Website'];
        this.languageList = [];
        this.qualificationList = [];
        this.isDisabled = false;
        this.submitted = false;
        this.docSpecList = [];
        this.selectedDocPreReg = new _model_doc_pre_reg_dtl__WEBPACK_IMPORTED_MODULE_4__["DocPreRegDtl"]();
        this.responseDto = new _model_response_dto__WEBPACK_IMPORTED_MODULE_5__["ResponseDto"]();
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedDocSpec = {};
        var bucketName = '';
        var seletedQuali = [];
        var langIds = [];
        var bucketObjects = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        this.regresponse = new _model_response_dto__WEBPACK_IMPORTED_MODULE_5__["ResponseDto"]();
        // let num : number = 5;
        this.registrationForm = this.fb.group({
            seletedQualIds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedLangIds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedSpecId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // refferal: ['', Validators.required],
            docFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            docLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            expYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            txtotp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            countOtp: [''],
            otpflag: [''],
            mciNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mciRegNo_md: [''],
            mciRegNo_dm: [''],
            certificate_dm: [''],
            certificate_md: [''],
            certificate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            docImg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.registrationService.getDocSpecilazion().subscribe(function (response) {
            _this.docSpecList = response;
        });
        this.registrationService.getLanguageList().subscribe(function (response) {
            _this.languageList = response;
            // console.log(this.languageList);
        });
        this.registrationService.getDocQualificationList().subscribe(function (Response) {
            _this.qualificationList = Response;
            // console.log(this.qualificationList);
        });
        // load js files in order else get error(jquery.deferred exception $(...).funName is not a function)
        this.loadScript3();
        this.loadScript();
    };
    Object.defineProperty(RegisterFormComponent.prototype, "f", {
        get: function () { return this.registrationForm.controls; },
        enumerable: true,
        configurable: true
    });
    // add custom js file in xhtml 
    RegisterFormComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '../../assets/customJs/custom.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    RegisterFormComponent.prototype.loadScript3 = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '../../assets/customJs/jquery.mask_1.14.15.min.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    RegisterFormComponent.prototype.generateOTP = function () {
        var _this = this;
        var count;
        if (this.registrationForm.controls['mobNumber'].value === '') {
            alert("Please enter your mobile no.!");
            this.nameField.nativeElement.focus();
            return;
        }
        else if (this.registrationForm.controls['mobNumber'].value.length !== 10) {
            alert("Please enter a valid 10 digit mobile number.!");
            this.nameField.nativeElement.focus();
            return false;
        }
        if (this.registrationForm.controls['countOtp'].value == "") {
            count = 0;
        }
        else {
            count = parseInt(this.registrationForm.controls['countOtp'].value);
        }
        this.registrationForm.controls['countOtp'].setValue(count + 1);
        alert('otp sent');
        if (parseInt(count) < parseInt("2")) {
            this.docPreReg = new _model_doc_pre_reg_dtl__WEBPACK_IMPORTED_MODULE_4__["DocPreRegDtl"]();
            this.docPreReg.countryCode = "+91";
            this.docPreReg.doctorName = "";
            this.docPreReg.litDocSpecalizeId = this.registrationForm.controls['selectedSpecId'].value;
            this.docPreReg.mobileNo = this.registrationForm.controls['mobNumber'].value;
            this.docPreReg.otp = "";
            this.docPreReg.smsSender = "";
            this.docPreReg.status = "";
            this.registrationService.sendOtp(this.docPreReg).subscribe(function (Response) {
                console.log(Response);
                _this.selectedDocPreReg = Response;
            });
        }
        else {
            this.isDisabled = true;
        }
    };
    RegisterFormComponent.prototype.validateOTP = function () {
        var txtOTP = this.registrationForm.controls['txtotp'].value;
        if (txtOTP == "") {
            alert("Please enter OTP!");
            return;
        }
        if (this.selectedDocPreReg.otp !== txtOTP) {
            alert("Invalid OTP!");
            this.registrationForm.controls['otpflag'].setValue("INVALID");
        }
        else if (this.selectedDocPreReg.otp == txtOTP) {
            alert("OTP validation done successfully!");
            this.registrationForm.controls['otpflag'].setValue("VALID");
        }
    };
    RegisterFormComponent.prototype.ValidateEmail = function () {
        if (this.registrationForm.controls.emailId.errors) {
            alert('enter a valid email id');
        }
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        var _this = this;
        alert('submitted');
        this.submitted = true;
        //  All input fields Validation check and showing error messages ===> focus on first invalid element
        // if(this.registrationForm.controls.refferal.errors){
        //   alert("Please select refferal source!");
        //   return false;
        // }
        if (this.registrationForm.controls.docFirstName.errors) {
            alert("Please enter first name!");
            return;
        }
        if (this.registrationForm.controls.docLastName.errors) {
            alert("Please enter last name!");
            return;
        }
        if (this.registrationForm.controls.selectedSpecId.errors) {
            alert("Please enter specialization!");
            return;
        }
        if (this.registrationForm.controls.seletedQualIds.errors) {
            alert("Please enter qualification!");
            return;
        }
        if (this.registrationForm.controls.selectedLangIds.errors) {
            alert("Please enter language!");
            return;
        }
        if (this.registrationForm.controls.emailId.errors) {
            if (this.registrationForm.controls.emailId.errors.required) {
                alert("Please enter email!");
                return;
            }
            else {
                alert("Please enter valid email!");
                return;
            }
        }
        if (this.registrationForm.controls.expYears.errors) {
            alert("Please enter experience!");
            return;
        }
        if (this.registrationForm.controls.docImg.errors) {
            alert("Please upload profile pic!");
            return;
        }
        if (this.registrationForm.controls.signature.errors) {
            alert("Please upload Signature!");
            return false;
        }
        if (this.registrationForm.controls.mciNo.errors) {
            alert("Please enter MCI registration no.!");
            return false;
        }
        if (this.registrationForm.controls.certificate.errors) {
            alert("Please upload certificate!");
            return false;
        }
        if (this.registrationForm.controls['mciRegNo_md'].value !== "") {
            if (this.registrationForm.controls['certificate_md'].value == "") {
                alert("Please upload MD or equivalent certificate!");
                return false;
            }
        }
        if (this.registrationForm.controls['mciRegNo_dm'].value !== "") {
            if (this.registrationForm.controls['certificate_dm'].value == "") {
                alert("Please upload DM or equivalent certificate!");
                return false;
            }
        }
        if (this.registrationForm.controls.mobNumber.errors) {
            alert("Please enter mobile no.!");
            return;
        }
        if (this.registrationForm.controls['otpflag'].value !== "VALID") {
            alert("Please enter OTP!");
            return false;
        }
        if (this.submitted) {
            var strQuali = "";
            var i;
            var strArrayObj = [];
            strArrayObj = this.f.seletedQualIds.value;
            strQuali = strArrayObj[0];
            for (i = 1; i < strArrayObj.length; i++)
                strQuali = strQuali + "," + strArrayObj[i];
            //console.log(strQuali);
            var strLang = "";
            var i;
            var strArrayObj2 = [];
            strArrayObj = this.f.selectedLangIds.value;
            strLang = strArrayObj[0];
            for (i = 1; i < strArrayObj.length; i++)
                strLang = strLang + "," + strArrayObj[i];
            //console.log(strLang);
        }
        var dto = {
            "accountFlag": "",
            "blockId": "",
            "countryId": "",
            "degreeCertificateImgFileData": this.registrationForm.controls.certificate.value,
            "degreeCertificateImgFileName": "mbbs.jpg",
            "districtId": "",
            "dmCertificateImgFileData": this.f.certificate_dm.value,
            "dmCertificateImgFileName": "dm.jpg",
            "docId": "",
            "docSignImgFileData": this.f.signature.value,
            "docSignImgFileName": "sign.jpg",
            "expYr": this.f.expYears.value,
            "languageIds": "",
            "litDocSpecalizeId": this.f.selectedSpecId.value,
            "logInTyp": "",
            "machineIpaddress": "",
            "mdCertificateImgFileData": this.f.certificate_dm.value,
            "mdCertificateImgFileName": "md.jpg",
            "pinCode": "",
            "productId": "",
            "profileImgFileData": this.f.docImg.value,
            "profileImgFileName": "docImg.jpg",
            "referralSourceId": "RDI0002",
            "stateId": "",
            "subProductId": "",
            "userCustomerId": "",
            "userDate": "",
            "userDmRegnId": this.f.mciRegNo_dm.value,
            "userFname": this.f.docFirstName.value,
            "userLname": this.f.docLastName.value,
            "userMailId": this.f.emailId.value,
            "userMdRegnId": this.f.mciRegNo_md.value,
            "userMname": "",
            "userMobileNo": this.f.mobNumber.value,
            "userQualification": "",
            "userRegnId": this.f.mciNo.value,
            "userTime": "",
            "userTitle": "Dr.",
            "userType": "",
            "useravilableFlag": ""
        };
        this.registrationService.registerDoc(dto).subscribe(function (res) {
            _this.responseDto = res;
            if (_this.responseDto.returnValue == "0") {
                alert("There is some error. Please try again");
            }
            else if (_this.responseDto.returnValue === "2") {
                alert("This email id is alredy registered!");
            }
            else if (_this.responseDto.returnValue === "1") {
                alert('Successfully register Your docId is: ' + _this.responseDto.message);
                //this.alertService.success(this.regresponse.message, true);
                //this.router.navigate(['/','login']);
            }
        }, function (error) {
            alert('something went wrong');
        });
        // console.log('langids'+this.registrationForm.controls['selectedLangIds'].value + '  ##qualificationids'+this.registrationForm.controls['seletedQualIds'].value +' @@@'+strJson);
        // const result: any = Object.assign({}, this.registrationForm.value);
        // result.selectedDocSpec = Object.assign({}, result.selectedDocSpec);
        // console.log(result);
        //this.registrationService.registerDoc(strJson)
    };
    RegisterFormComponent.prototype.signUpload = function (event) {
        var _this = this;
        //console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            //console.log(event.target.files && event.target.files.length);
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var test = String(reader.result);
                _this.registrationForm.patchValue({
                    signature: test.split(",")[1]
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    RegisterFormComponent.prototype.profilePicUpload = function (event) {
        var _this = this;
        // console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            //console.log(event.target.files && event.target.files.length);
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var test = String(reader.result);
                _this.registrationForm.patchValue({
                    docImg: test.split(",")[1]
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    RegisterFormComponent.prototype.certificateUpload = function (event) {
        var _this = this;
        //console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            //console.log(event.target.files && event.target.files.length);
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var test = String(reader.result);
                _this.registrationForm.patchValue({
                    certificate: test.split(",")[1]
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    RegisterFormComponent.prototype.certificateDmUpload = function (event) {
        var _this = this;
        //console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            //console.log(event.target.files && event.target.files.length);
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var test = String(reader.result);
                _this.registrationForm.patchValue({
                    certificate_dm: test.split(",")[1]
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    RegisterFormComponent.prototype.certificatemdUpload = function (event) {
        var _this = this;
        // console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            // console.log(event.target.files && event.target.files.length);
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var test = String(reader.result);
                _this.registrationForm.patchValue({
                    certificate_md: test.split(",")[1]
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("mobNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterFormComponent.prototype, "nameField", void 0);
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/register-form/register-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_registeration_service__WEBPACK_IMPORTED_MODULE_2__["RegisterationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\angular6project\litmusDX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map