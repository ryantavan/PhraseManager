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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhraseService = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PhraseService = /** @class */ (function () {
    function PhraseService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    PhraseService.prototype.getPhrases = function () {
        return this.http.get(this.baseUrl + 'phrase');
    };
    PhraseService.prototype.savePhrase = function (phrase) {
        return this.http.post(this.baseUrl + 'phrase', phrase);
    };
    PhraseService.prototype.updatePhrase = function (phrase) {
        return this.http.put(this.baseUrl + 'phrase', phrase);
    };
    PhraseService.prototype.deletePhrase = function (phraseId) {
        return this.http.delete(this.baseUrl + 'phrase/?phraseId=' + phraseId);
    };
    PhraseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_2.Inject('BASE_URL')),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], PhraseService);
    return PhraseService;
}());
exports.PhraseService = PhraseService;
//# sourceMappingURL=phrase.service.js.map