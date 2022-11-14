"use strict";
/*  -------------------------------------------------------------------------------------
                                DECORATORS

    -   Decorators are functions that can be used to modify the behavior of a class, method,
    property, or parameter. Decorators are applied by placing them above the declaration
    to be decorated. Decorators are applied to classes, methods, accessors, properties,
    and parameters.

    -   Decorators are functions that are called at design time, when the class is defined,
    not at runtime. Decorators are applied to the class constructor returned by the class
    declaration, not to the class declaration itself.
    ------------------------------------------------------------------------------------- */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// In the acutal version of TypeScript and JavaScript, decorators are an experimental
// feature. To enable them, you must enable the experimentalDecorators compiler option
// either on the command line or in your tsconfig.json.
// Execute the following command line in the terminal:
//  tsc --target ES5 --experimentalDecorators
// Change the following configuration option in your config file:
/*
    {
        "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }
*/
// To use decorators, you must import the @types/core-decorators package from npm.
// This package contains type definitions for the core-decorators library.
/*  -------------------------------------------------------------------------------------
                                DECORATORS AS CONSTRUCTORS
                            
    -   Decorators are functions that are called at design time, when the class is defined,
    not at runtime. Decorators are applied to the class constructor returned by the class
    declaration, not to the class declaration itself.
    ------------------------------------------------------------------------------------- */
// The following example shows how to use a decorator to modify the behavior of a class
// constructor.
function log(constructor) {
    return function (target) {
        console.log("New: ".concat(constructor.name));
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        log()
    ], Person);
    return Person;
}());
