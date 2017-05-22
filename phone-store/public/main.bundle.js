webpackJsonp([0,3],{

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(444);


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneService = (function () {
    function PhoneService(http, SessionService) {
        this.http = http;
        this.SessionService = SessionService;
        this.BASE_URL = 'http://localhost:3000/api';
    }
    PhoneService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.BASE_URL + "/phones", options)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.BASE_URL + "/phones/" + id, options)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.edit = function (phone) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.BASE_URL + "/phones/" + phone.id, phone, options)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.remove = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'JWT ' + this.SessionService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.BASE_URL + "/phones/" + id, options)
            .map(function (res) { return res.json(); });
    };
    PhoneService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _b) || Object])
    ], PhoneService);
    return PhoneService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/phone.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phone_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddListComponent = (function () {
    function AddListComponent(session, phone) {
        this.session = session;
        this.phone = phone;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:3000/api/phones/",
            authToken: "JWT " + this.session.token
        });
        this.newPhone = {
            name: '',
            brand: '',
            specs: []
        };
    }
    AddListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response) {
            _this.feedback = JSON.parse(response).message;
            _this.phone.getList()
                .subscribe(function (phones) {
                _this.phones = phones;
            });
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
        this.phone.getList()
            .subscribe(function (phones) {
            _this.phones = phones;
        });
    };
    AddListComponent.prototype.addSpec = function (spec) {
        this.newPhone.specs.push(spec);
    };
    AddListComponent.prototype.submit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newPhone.name);
            form.append('brand', _this.newPhone.brand);
            form.append('specs', JSON.stringify(_this.newPhone.specs));
        };
        this.uploader.uploadAll();
    };
    AddListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-list',
            template: __webpack_require__(732),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__phone_service__["a" /* PhoneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__phone_service__["a" /* PhoneService */]) === 'function' && _b) || Object])
    ], AddListComponent);
    return AddListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/add-list.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPhoneComponent = (function () {
    function AddPhoneComponent(session) {
        this.session = session;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:3000/api/phones/",
            authToken: "JWT " + this.session.token
        });
        this.newPhone = {
            name: '',
            brand: '',
            specs: []
        };
    }
    AddPhoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response) {
            _this.feedback = JSON.parse(response).message;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
    };
    AddPhoneComponent.prototype.addSpec = function (spec) {
        this.newPhone.specs.push(spec);
    };
    AddPhoneComponent.prototype.submit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newPhone.name);
            form.append('brand', _this.newPhone.brand);
            form.append('specs', JSON.stringify(_this.newPhone.specs));
        };
        this.uploader.uploadAll();
    };
    AddPhoneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-phone',
            template: __webpack_require__(733),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _a) || Object])
    ], AddPhoneComponent);
    return AddPhoneComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/add-phone.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(735),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/home.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.user)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/phone']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(736),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/login.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneDetailsComponent = (function () {
    function PhoneDetailsComponent(router, route, phoneService) {
        this.router = router;
        this.route = route;
        this.phoneService = phoneService;
    }
    PhoneDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getPhoneDetails(params['id']);
        });
    };
    PhoneDetailsComponent.prototype.getPhoneDetails = function (id) {
        var _this = this;
        this.phoneService.get(id)
            .subscribe(function (phone) {
            _this.phone = phone;
        });
    };
    PhoneDetailsComponent.prototype.deletePhone = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.phoneService.remove(this.phone._id)
                .subscribe(function () {
                _this.router.navigate(['']);
            });
        }
    };
    PhoneDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-phone-details',
            template: __webpack_require__(738),
            styles: [__webpack_require__(723)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */]) === 'function' && _c) || Object])
    ], PhoneDetailsComponent);
    return PhoneDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/phone-details.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneListComponent = (function () {
    function PhoneListComponent(phone) {
        this.phone = phone;
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phone.getList()
            .subscribe(function (phones) {
            _this.phones = phones;
        });
    };
    PhoneListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-phone-list',
            template: __webpack_require__(739),
            styles: [__webpack_require__(724)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */]) === 'function' && _a) || Object])
    ], PhoneListComponent);
    return PhoneListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/phone-list.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(session, router) {
        this.session = session;
        this.router = router;
        this.newUser = {
            username: '',
            password: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.newUser)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                console.log('result ok', result);
                _this.router.navigate(['/phone']);
            }
            else {
                console.log('result ko', result);
            }
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(740),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/signup.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 443;


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(561);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(734),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/app.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__phone_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_phone_add_phone_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_list_add_list_component__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__["a" /* PhoneListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_12__add_phone_add_phone_component__["a" /* AddPhoneComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__add_list_add_list_component__["a" /* AddListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__phone_service__["a" /* PhoneService */], __WEBPACK_IMPORTED_MODULE_10__session_service__["a" /* SessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/app.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_phone_add_phone_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_list_add_list_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_2__add_phone_add_phone_component__["a" /* AddPhoneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* SessionService */]] },
    { path: 'addlist', component: __WEBPACK_IMPORTED_MODULE_3__add_list_add_list_component__["a" /* AddListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* SessionService */]] },
    { path: 'phone', component: __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__["a" /* PhoneListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* SessionService */]] },
    { path: 'phone/:id', component: __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* SessionService */]] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/app.routing.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.session.logout();
        // this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(737),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/navbar.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/environment.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/polyfills.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var jwtDecode = __webpack_require__(728);
var SessionService = (function () {
    function SessionService(router, http) {
        this.router = router;
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
        // set token if saved in local storage
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.isAuth = true;
        }
        else {
            this.isAuth = false;
        }
    }
    SessionService.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            // logged in so return true\
            this.token = localStorage.getItem('token');
            this.user = jwtDecode(this.token).user;
            this.isAuth = true;
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        this.isAuth = false;
        return false;
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.token != null ? true : false;
    };
    SessionService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/signup", user)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            var token = response.token;
            var user = response.user;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = jwtDecode(token).user;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                _this.isAuth = true;
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err); });
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var user = response.json() && response.json().user;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = jwtDecode(token).user;
                _this.isAuth = true;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SessionService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.user = null;
        this.isAuth = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    SessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], SessionService);
    return SessionService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/Angular-App-Api/phone-app/src/session.service.js.map

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "img {\n\twidth: 150px;\n}\n\n.item {\n\tdisplay: inline-block;\n\twidth: 200px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "img {\n\twidth: 150px;\n}\n\n.item {\n\tdisplay: inline-block;\n\twidth: 200px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<h1> Add a new phone </h1>\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<form>\n  <fieldset>\n    <legend> Phone info </legend>\n    <label> Brand* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.brand\" name=\"brand\" required />\n\n    <label> Name* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.name\" name=\"name\" required />\n\n    <label> Specs </label>\n    <input type=\"text\" #spec />\n    <button (click)=\"addSpec(spec.value); spec.value = ''\"> add </button>\n\n    <ul>\n      <li *ngFor=\"let spec of newPhone.specs\"> {{ spec }} </li>\n    </ul>\n    <small *ngIf=\"!newPhone.specs.length\"> This phone has no specs :( </small>\n\n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\n  </fieldset>\n  <button (click)=\"submit()\"> submit </button>\n</form>\n\n<p> {{ feedback }} </p>\n\n<h1> Phone list </h1>\n<div>\n  <div *ngFor=\"let phone of phones\" class=\"item\">\n    <img src=\"http://localhost:3000/{{phone.image}}\" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]=\"['/phone', phone._id]\"> View Details </a>\n  </div>\n</div>"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<h1> Add a new phone </h1>\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<form>\n  <fieldset>\n    <legend> Phone info </legend>\n    <label> Brand* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.brand\" name=\"brand\" required />\n\n    <label> Name* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.name\" name=\"name\" required />\n\n    <label> Specs </label>\n    <input type=\"text\" #spec />\n    <button (click)=\"addSpec(spec.value); spec.value = ''\"> add </button>\n\n    <ul>\n      <li *ngFor=\"let spec of newPhone.specs\"> {{ spec }} </li>\n    </ul>\n    <small *ngIf=\"!newPhone.specs.length\"> This phone has no specs :( </small>\n\n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\n  </fieldset>\n  <button (click)=\"submit()\"> submit </button>\n</form>\n\n<p> {{ feedback }} </p>"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\">\n\t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Hello, world!</h1>\n  <p>Welcome to Phone Store</p>\n  <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\" role=\"button\">Login</a></p>\n</div>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-md-offset-4\">\n\t<div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t    <form>\n\t      <div class=\"form-group\">\n\t        <label for=\"InputUsername\">username</label>\n\t        <input type=\"email\" class=\"form-control\" id=\"InputUsername\" placeholder=\"username\" [(ngModel)]=\"user.username\" name=\"username\">\n\t      </div>\n\t      <div class=\"form-group\">\n\t        <label for=\"InputPassword\">Password</label>\n\t        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\">\n\t      </div>\n\t      <button type=\"submit\" class=\"btn btn-default btn-primary\" (click)=\"login()\">Login</button>\n\t    </form>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n      \t<li *ngIf=\"this.session.isAuth\"><a>signed as: {{ this.session.user }}</a></li>\n        <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['login']\">Login</a></li>\n        <li *ngIf=\"this.session.isAuth\"><a (click)=\"logout()\">Logout</a></li>\n        <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['signup']\">Signup</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container -->\n</nav>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<h1> Phone details </h1>\n<a [routerLink]=\"['/phone']\"> Back to list </a>\n<div *ngIf=\"phone\">\n  <div class=\"phone-thumbnail\">\n    <img height=\"300\" [src]=\"phone.image\" />\n  </div>\n\t<button class=\"btn btn-danger\" (click)=\"deletePhone()\"> Delete </button>\n  <div class=\"phone-info\">\n    <h2> {{ phone.name }}&nbsp;</h2>\n    <h3> {{ phone.brand }} </h3>\n\n    <div *ngIf=\"phone.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of phone.specs\"> {{ spec&nbsp;}} </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<a [routerLink]=\"['/phone']\"> Back to list </a>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<h1> Phone list </h1>\n<div>\n  <div *ngFor=\"let phone of phones\" class=\"item\">\n    <img [src]=\"phone.image\" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]=\"['/phone', phone._id]\"> View Details </a>\n  </div>\n</div>"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-md-offset-4\">\n\t<div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t    <form>\n\t      <div class=\"form-group\">\n\t        <label for=\"InputUsername\">username</label>\n\t        <input type=\"text\" class=\"form-control\" id=\"InputUsername\" placeholder=\"username\" [(ngModel)]=\"newUser.username\" name=\"username\">\n\t      </div>\n\t      <div class=\"form-group\">\n\t        <label for=\"InputPassword\">Password</label>\n\t        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\">\n\t      </div>\n\t      <button type=\"submit\" class=\"btn btn-default btn-primary\" (click)=\"signup()\">Signup</button>\n\t    </form>\n\t  </div>\n\t</div>\n</div>"

/***/ })

},[1006]);
//# sourceMappingURL=main.bundle.js.map