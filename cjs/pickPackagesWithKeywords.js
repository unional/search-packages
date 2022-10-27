"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickPackagesWithKeywords = void 0;
var hasAllKeywords_js_1 = require("./hasAllKeywords.js");
function pickPackagesWithKeywords(packageInfos, keywords, fields) {
    var pkgs = packageInfos.filter(function (pkg) { return (0, hasAllKeywords_js_1.hasAllKeywords)(pkg.keywords, keywords); });
    if (fields)
        return pkgs.map(function (pkg) { return fields.reduce(function (p, v) {
            p[v] = pkg[v];
            return p;
        }, { name: pkg.name }); });
    else
        return pkgs.map(function (pkg) { return pkg.name; });
}
exports.pickPackagesWithKeywords = pickPackagesWithKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja1BhY2thZ2VzV2l0aEtleXdvcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcGlja1BhY2thZ2VzV2l0aEtleXdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFxRDtBQUVyRCxTQUFnQix3QkFBd0IsQ0FBQyxZQUFtQyxFQUFFLFFBQWtCLEVBQUUsTUFBaUI7SUFDakgsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUEsa0NBQWMsRUFBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUE7SUFDL0UsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBeUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNoRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2IsT0FBTyxDQUFDLENBQUE7UUFDVixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBSEMsQ0FHRCxDQUFDLENBQUM7O1FBRXhCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQVRELDREQVNDIn0=