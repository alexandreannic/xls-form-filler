import {Path} from './Path.ts'

describe('Path', () => {
  const values = {
    household: [
      {
        name: 'household A',
        members: [
          {
            name: 'Alice',
            age: '30',
            pets: [
              {
                name: 'Fluffy',
                species: 'cat'
              },
              {
                name: 'Rex',
                species: 'dog'
              }
            ]
          }
        ]
      }
    ]
  }

  it('builds string path correctly', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 0},
      {repeatGroupName: 'pets', index: 1}
    ])

    expect(path.toString()).toBe('household[0].members[0].pets[1]')
  })

  it('gets the last and first tokens', () => {
    const tokens = [
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 1},
    ]
    const path = new Path(tokens)

    expect(path.first).toEqual(tokens[0])
    expect(path.last).toEqual(tokens[1])
  })

  it('returns parent path correctly', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 0}
    ])
    const parent = path.parentPath()
    expect(parent.toString()).toBe('household[0]')
  })

  it('searchValueDeeply finds value at leaf level', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 0},
      {repeatGroupName: 'pets', index: 1}
    ])

    expect(path.searchInBranch(values, 'name')).toBe('Rex')
  })

  it('searchValueDeeply finds value at intermediate level', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 0},
      {repeatGroupName: 'pets', index: 0}
    ])

    expect(path.searchInBranch(values, 'age')).toBe('30')
  })

  it('searchValueDeeply finds value at root level', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0}
    ])

    expect(path.searchInBranch(values, 'name')).toBe('household A')
  })

  it('searchValueDeeply returns undefined if not found', () => {
    const path = new Path([
      {repeatGroupName: 'household', index: 0},
      {repeatGroupName: 'members', index: 0}
    ])

    expect(path.searchInBranch(values, 'nonexistent')).toBeUndefined()
  })
})
