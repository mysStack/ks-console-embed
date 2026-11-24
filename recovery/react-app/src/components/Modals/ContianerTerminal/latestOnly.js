function createLatestOnly() {
  let seq = 0;
  return {
    next() {
      seq += 1;
      return seq;
    },
    isCurrent(id) {
      return id === seq;
    },
  };
}

module.exports = {
  createLatestOnly,
};
