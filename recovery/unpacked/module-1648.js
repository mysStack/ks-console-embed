export default function copyArrayBuffer(input, isDeep) {
  if (isDeep) {
    return input.slice();
  }
  if (typeof Buffer !== "undefined" && Buffer.from) {
    return Buffer.from(input);
  }
  return input.slice();
}
