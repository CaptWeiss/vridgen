import isIdValid from '../isIdValid';

const testIds = [
  {
    id: '63153984',
    desc: 'should pass',
    shouldBe: true,
  },
  {
    id: '43154424',
    desc: 'should pass',
    shouldBe: true,
  },
  {
    id: '6315394',
    desc: 'should fail',
    shouldBe: false,
  },
  {
    id: '43154423',
    desc: 'should fail',
    shouldBe: false,
  },
];
describe('Is ID Valid', () => {
  testIds.forEach(({ desc, shouldBe, id }) => {
    it(desc, () => {
      expect(isIdValid(id).valid).toBe<boolean>(shouldBe);
    });
  });
});
