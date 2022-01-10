interface Listener
{
}

class Container implements Listener
{
  constructor (public id: string, public name: string) {}
}

describe('Container', () => {
  test('ensure Container can receive id and name', () => {
    const sut = new Container('any_id', 'id_name')
    
    expect(sut.name).toBe('any_name')
  })
  test('ensure Container is instance of Listener', () => {
    const sut = new Container ('any_id', 'any_name')
    
    expect (sut).toBeInstanceOf(Listener)
  })
});
