import { hasAllKeywords } from './hasAllKeywords';
export function pickPackagesWithKeywords(packageInfos, keywords) {
    return packageInfos.filter(pkg => hasAllKeywords(pkg.keywords, keywords)).map(pkg => pkg.name);
}
//# sourceMappingURL=pickPackagesWithKeywords.js.map