import cp from 'child_process';
import { pickPackagesWithKeywords } from './pickPackagesWithKeywords';

export function searchByKeywords(keywords: string[]): Promise<string[]>
export function searchByKeywords(keywords: string[], fields: string[]): Promise<Record<string, any> & { name: string }[]>
// istanbul ignore next
export function searchByKeywords(keywords: string[], fields?: string[]) {
  return new Promise((a, r) => {
    cp.exec(`npm search --json --no-description ${keywords.join(' ')}`, (err, stdout) => {
      if (err) {
        r(err)
      }
      else {
        const json = JSON.parse(stdout)
        a(pickPackagesWithKeywords(json, keywords, fields))
      }
    })
  })
}
