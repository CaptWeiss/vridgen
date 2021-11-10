/**
 * @deprecated use `isIdValid`
 */
export default function checkIDIntegrity(
  id: string,
): { status: 'invalid lenght'; data: false } | { status: 'valid'; data: true } | { status: 'not valid'; data: false } {
  const acctNo = id.trim();
  const acctLen = acctNo.length;
  if (acctLen > 8 || acctLen < 8) return { status: 'invalid lenght', data: false };

  // Checksum Validation
  let notValid: boolean;
  let count: number = 6;
  let countToChecksumIndex: number = 0;
  let acctNoSum: number = 0;
  const checksumIndex: number = parseInt(acctNo.charAt(acctLen - 1), 10);
  const checksum = parseInt(acctNo.charAt(checksumIndex), 10);

  // validate number by checksum
  const brkNumString = acctNo.split('', 7);
  brkNumString.forEach((digit) => {
    if ((!digit === null || countToChecksumIndex !== checksumIndex) && countToChecksumIndex < 8) {
      acctNoSum += parseInt(digit, 10) * count;
      count--;
    }
    countToChecksumIndex++;
  });
  let calculatedChecksum: number = 9 - (acctNoSum % 9);
  if (acctNoSum % 9 === 0) {
    calculatedChecksum = 0;
  }
  notValid = calculatedChecksum - checksum !== 0 ? true : false;
  if (notValid) return { status: 'not valid', data: false };
  return { status: 'valid', data: true };
}
