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

function createTerminalSession() {
  const gate = createLatestOnly();
  let state = {
    url: null,
    terminalError: null,
    terminalLoading: false,
  };
  return {
    next() {
      return gate.next();
    },
    isCurrent(id) {
      return gate.isCurrent(id);
    },
    begin() {
      state = {
        url: null,
        terminalError: null,
        terminalLoading: true,
      };
      return state;
    },
    succeed(url) {
      state = {
        url: url || null,
        terminalError: null,
        terminalLoading: false,
      };
      return state;
    },
    fail(err) {
      const message =
        err && err.message ? err.message : String(err || "Failed to open container terminal");
      state = {
        url: null,
        terminalError: message,
        terminalLoading: false,
      };
      return state;
    },
    snapshot() {
      return state;
    },
  };
}

module.exports = {
  createLatestOnly,
  createTerminalSession,
};
