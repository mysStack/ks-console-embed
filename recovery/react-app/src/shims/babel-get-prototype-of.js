export default function getPrototypeOf(object) {
  if (object == null) {
    return Object.prototype;
  }
  return Object.getPrototypeOf(object);
}
