import { execa } from 'execa'
import { pickPackagesWithKeywords } from './pickPackagesWithKeywords.js'

export function searchByKeywords(keywords: string[]): Promise<string[]>
export function searchByKeywords(keywords: string[], fields: string[]): Promise<Record<string, any> & { name: string }[]>
// istanbul ignore next
export async function searchByKeywords(keywords: string[], fields?: string[]) {
  const { stdout } = await execa(`npm`, ['search', '--json', '--no-description', ...keywords])
  const json = JSON.parse(stdout)
  return pickPackagesWithKeywords(json, keywords, fields)
}
