export type FormValue = any
export type FormValues = Record<string, FormValue>
import get from 'lodash.get'

type PathToken = {
  index: number
  repeatGroupName: string
}

export type LodashPath = (string | number)[]

export class Path {
  private readonly value: PathToken[]

  constructor(tokens: PathToken[] = []) {
    this.value = tokens
  }

  get() {
    return this.value
  }

  add(token: PathToken) {
    return new Path([...this.value, token])
  }

  parentPath(): Path {
    return new Path(this.value.length > 0 ? this.value.slice(0, -1) : [])
  }

  searchValueDeeply(values: FormValues, name: string): any | undefined {
    let cursor: Path = this
    for (; ;) {
      const fullPath = [...cursor.toLodashPath(), name]
      const value = get(values, fullPath)
      if (value !== undefined) return value
      if (cursor.value.length === 0) return
      cursor = cursor.parentPath()
    }
  }

  private findPrimitiveKey(obj: any, key: string): string | undefined {
    if (!obj || typeof obj !== 'object') return undefined
    if (key in obj && typeof obj[key] === 'string') return obj[key]
    return undefined
  }

  get last(): PathToken | undefined {
    return this.value[this.value.length - 1]
  }

  get first(): PathToken | undefined {
    return this.value[0]
  }

  toString() {
    return this.value.flatMap(_ => `${_.repeatGroupName}[${_.index}]`).join('.')
  }

  toLodashPath(): LodashPath {
    return this.value.flatMap(_ => [_.repeatGroupName, _.index])
  }
}