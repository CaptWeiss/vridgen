import CheckIDIntegrity from '../check-id-integrity';

test('Checking ID Integrity', () => {
  expect(CheckIDIntegrity('43244032')).toStrictEqual({ status: 'valid', data: true });
});
