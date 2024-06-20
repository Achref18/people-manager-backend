/**
 * Splits a given string into an array of substrings based on a specified delimiter.
 *
 * @param {string} inputString - The string to be split.
 * @param {string} delimiter - The delimiter by which to split the input string. example: ':' , ','
 * @returns {string[]} An array of substrings.
 *
 */

export function splitString(inputString: string, delimiter: string): string[] {
  return inputString.split(delimiter);
}
