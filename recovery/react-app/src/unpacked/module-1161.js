export const ifOverflowMatches = function({ alwaysShow, ifOverflow }, t) {
    if (alwaysShow) {
        ifOverflow = "extendDomain";
    }
    return ifOverflow === t;
};
