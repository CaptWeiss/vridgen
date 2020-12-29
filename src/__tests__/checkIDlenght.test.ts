import CreateRandomID from '../create-random-id';

test('Generate id length is as expected', () => {
  expect(CreateRandomID(234, 142).length).toEqual(8);
});
