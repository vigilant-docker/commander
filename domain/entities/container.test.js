class Container
{
  constructor (public id: string, public name: string) {}
}

describe('Container', () => {
  test('ensure Container can receive id and name', () => {
    const sut = new Container('any_id', 'id_name')
    
    expect(sut.name).toBe('any_name')
  })
});
