"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAllKeywords = void 0;
function hasAllKeywords(actual, expected) {
    var set = new Set(actual);
    return !expected.find(function (key) { return !set.has(key); });
}
exports.hasAllKeywords = hasAllKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzQWxsS2V5d29yZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9oYXNBbGxLZXl3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixjQUFjLENBQUMsTUFBNEIsRUFBRSxRQUFrQjtJQUM3RSxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQTtBQUM3QyxDQUFDO0FBSEQsd0NBR0MifQ==