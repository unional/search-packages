"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByKeywords = void 0;
var child_process_1 = __importDefault(require("child_process"));
var pickPackagesWithKeywords_js_1 = require("./pickPackagesWithKeywords.js");
// istanbul ignore next
function searchByKeywords(keywords, fields) {
    return new Promise(function (a, r) {
        child_process_1.default.exec("npm search --json --no-description ".concat(keywords.join(' ')), function (err, stdout) {
            if (err) {
                r(err);
            }
            else {
                var json = JSON.parse(stdout);
                a((0, pickPackagesWithKeywords_js_1.pickPackagesWithKeywords)(json, keywords, fields));
            }
        });
    });
}
exports.searchByKeywords = searchByKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoQnlLZXl3b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlYXJjaEJ5S2V5d29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0VBQStCO0FBQy9CLDZFQUF5RTtBQUl6RSx1QkFBdUI7QUFDdkIsU0FBZ0IsZ0JBQWdCLENBQUMsUUFBa0IsRUFBRSxNQUFpQjtJQUNwRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEIsdUJBQUUsQ0FBQyxJQUFJLENBQUMsNkNBQXNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQzlFLElBQUksR0FBRyxFQUFFO2dCQUNQLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNQO2lCQUNJO2dCQUNILElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQyxJQUFBLHNEQUF3QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBWkQsNENBWUMifQ==