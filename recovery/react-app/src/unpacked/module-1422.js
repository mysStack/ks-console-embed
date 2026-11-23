export default Math.sign || function(e) {
    if ((e = +e) == 0 || e != e) {
        return e;
    }
    if (e < 0) {
        return -1;
    }
    return 1;
};
