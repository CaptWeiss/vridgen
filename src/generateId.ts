import { getYearDay, paddedNumberArray } from './helper';
/**
 * This generates a random verifyable 8 digits numeric ID that can be used for the purpose of short UserID, AccountID or Account Number
 * @param day Day of the year for which the ID should be based on. defaults to current day of the year if not provided.
 * @param nonce An optional randomizer, this could be a user/item serial number
 * @returns Eight (8) character string of numbers.
 */
export default function createRandomID(day?: number, nonce?: number): string {
  const checksumIndex = (nonce ?? Math.floor(Math.random() * 365)) % 7;

  if (typeof day === 'undefined') {
    day = getYearDay();
  }

  const digitsOfDayArray = paddedNumberArray(day, { length: 3 });
  const ID: number[] = [];
  let IDSum: number = 0;
  let digit: number;

  for (let i = 0; i < 6; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    if (i > 0 && i <= 3) {
      digit = digitsOfDayArray.shift()!;
    } else {
      digit = randomDigit;
    }
    ID.push(digit);
    IDSum += digit * (6 - i);
  }

  const split1 = ID.splice(0, checksumIndex);

  let checksum = 9 - (IDSum % 9);
  if (IDSum % 9 === 0) {
    checksum = 0;
  }
  split1.push(checksum);
  ID.unshift(...split1);
  ID.push(checksumIndex);
  return ID.join('');
}
