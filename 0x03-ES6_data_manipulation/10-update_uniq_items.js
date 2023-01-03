/**
 * Updates the values of unique items in a Map.
 *
 * For each entry of the map where the quantity is 1, update the quantity
 * to 100.
 *
 * @param {Map} map - The Map to process
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    // If the value is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
