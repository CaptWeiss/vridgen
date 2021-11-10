/**
 * Gets current day of the year.
 * @returns Current day of the year
 */
export function getYearDay(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.valueOf() - start.valueOf() + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

interface IPaddedNumberArrayOptions {
  /**
   * The length of array to be returned
   */
  length?: number;
  /**
   * Which side of the array to pad. `start` or `end`. default `start`
   */
  position?: 'start' | 'end';
  /**
   * If set to true, Array length will be trim off the array if it's length is greater then the povided length
   */
  enforceLength?: boolean;
}

/**
 * This function converts a number into an array that's initialized by the digits of the array,
 *
 * If length is provided it will pad the array with 0 to make the array lenght equal the provided length.
 * @param num Number which digits are to be splitted into an array
 * @param options Optional parameters that can be passed in to give more control of output.
 * @returns padded number array
 */
export function paddedNumberArray(num: number, options: IPaddedNumberArrayOptions = {}): number[] {
  num = Math.floor(num);
  if (typeof options.position === 'undefined') options.position = 'start';

  const digitsOfDayArray = Array.from(num.toString()).map(Number);

  if (options.length) {
    if (digitsOfDayArray.length < options.length) {
      const padding = new Array(options.length - digitsOfDayArray.length).fill(0);
      options.position === 'start' ? digitsOfDayArray.unshift(...padding) : digitsOfDayArray.push(...padding);
    } else {
      if (options.enforceLength) {
        // trim to length
        if (options.position === 'start') {
          digitsOfDayArray.splice(0, digitsOfDayArray.length - options.length);
        } else {
          digitsOfDayArray.length = options.length;
        }
      }
    }
  }
  return digitsOfDayArray;
}
