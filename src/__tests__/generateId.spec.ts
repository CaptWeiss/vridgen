import generateId from '../generateId';

describe('Create Random ID', () => {
  it('should generate id without args', () => {
    for (let index = 0; index < 20; index++) {
      const userID = generateId();
      expect(userID.length).toBe(8);
    }
  });
  it('should generate id with args', () => {
    for (let index = 0; index < 20; index++) {
      const userID = generateId(233, index);
      expect(userID.length).toBe(8);
      expect(userID.split('').map(Number)[7]).toBe(index % 7);
    }
  });
});
