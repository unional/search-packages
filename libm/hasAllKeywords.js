export function hasAllKeywords(actual, expected) {
    const set = new Set(actual);
    return !expected.find(key => !set.has(key));
}
//# sourceMappingURL=hasAllKeywords.js.map