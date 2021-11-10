interface IIsIdValid {
  valid: boolean;
  message: string;
}

/**
 * Checks the integrity of an id generated with the `generateId` method.
 * @param id id to be validated
 * @returns object wiith `valid` true if id is valid and false otherwise
 */
export default function isIdValid(id: string): IIsIdValid {
  const ID = id.trim();
  const IDArray = ID.split('').map(Number);
  const IDLen = ID.length;

  if (IDLen > 8 || IDLen < 8) return { valid: false, message: 'ID does not have a valid length' };

  // Checksum Validation
  let count = 6;
  let countToChecksumIndex = 0;
  let IDSum = 0;
  const checksumIndex = IDArray[IDLen - 1];
  const checksum = IDArray[checksumIndex];

  // validate number by checksum
  IDArray.forEach((digit, idx) => {
    if (idx === IDLen - 1) return;
    if (countToChecksumIndex !== checksumIndex && countToChecksumIndex < 8) {
      IDSum += digit * count;
      count--;
    }
    countToChecksumIndex++;
  });
  let calculatedChecksum = 9 - (IDSum % 9);
  if (IDSum % 9 === 0) {
    calculatedChecksum = 0;
  }

  if (calculatedChecksum - checksum !== 0) return { valid: false, message: 'invalid checksum' };

  return { valid: true, message: 'Valid' };
}
