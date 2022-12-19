export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    const value = array[idx];
    idx = appendString + value;
  }

  return array;
}
