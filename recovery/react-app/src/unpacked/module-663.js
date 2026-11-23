const n = self.crypto || self.msCrypto;
export default function(e) {
    return n.getRandomValues(new Uint8Array(e));
};
