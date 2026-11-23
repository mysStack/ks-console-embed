export default function(e) {
    e = Number(e);
    if (isNaN(e) || e === 0) {
        return e;
    }
    if (e > 0) {
        return 1;
    }
    return -1;
};
