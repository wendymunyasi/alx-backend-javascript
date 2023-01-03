/**
 * Returns a Map of groceries with their quantities.
 *
 * @return {Map} A Map of groceries with their quantities
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
