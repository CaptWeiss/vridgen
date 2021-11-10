/**
 * @deprecated use `generateId`
 */
export default function createRandomID(nonce: number, day: number) {
  const checksumIndex: number = nonce % 7;

  function getElapseDaysInYear() {
    const arrDay: number[] = [];
    let strNum: number = 0;
    let dayString = day.toString();
    for (let i = 0; i < 3; i++) {
      if (dayString.length < 3) {
        dayString = '0' + dayString;
      }
      strNum = parseInt(dayString.charAt(dayString.length - (i + 1)), 10);
      arrDay.unshift(strNum);
    }
    return arrDay;
  }

  let acctNoString: string = '';
  let loop: boolean | void = true;

  while (loop) {
    loop = false;
    const _day: number[] = getElapseDaysInYear();
    let acctNo: number[] = [];
    let acctNoSum: number = 0;
    let digit: number;
    let split1: number[] = [];
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      if (i === 1 || i === 2 || i === 3) {
        digit = _day.shift()!;
      } else {
        digit = randomDigit;
      }
      acctNo.push(digit);
      acctNoSum += digit * (6 - i);
    }
    split1 = acctNo.splice(0, checksumIndex);

    let checksum = 9 - (acctNoSum % 9);
    if (acctNoSum % 9 === 0) {
      checksum = 0;
    }
    split1.push(checksum);
    acctNo = split1.concat(acctNo);
    acctNo.push(checksumIndex);
    acctNoString = acctNo.join('');
  }
  return acctNoString;
}
