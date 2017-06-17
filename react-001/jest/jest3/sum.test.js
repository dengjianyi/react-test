var thing = require('./thing.js');
var sum = require('./sum.js');
jest.dontMock('./sum.js');
jest.mock('./thing.js');

describe('sum', function() {
  it('adds numbers', function() {
    expect(sum(1, 2)).toBe(3);
  });

  it('mocks the thing dependency', function() {
    expect(thing()).toBe(undefined);
  });

  it('does not when I ask nicely', function() {
    expect(thing()).toBe(undefined);
  });

  it('mocks it only in the scope of the argument (this fails)', function() {
    expect(thing()).toBe(undefined);
  });
});
