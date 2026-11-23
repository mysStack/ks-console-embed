export default function isBuffer(value) {
  return typeof Buffer !== "undefined" && typeof Buffer.isBuffer === "function"
    ? Buffer.isBuffer(value)
    : false;
}
