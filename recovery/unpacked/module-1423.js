export default !Math.expm1 || Math.expm1(10) > 22025.465794806718 || Math.expm1(10) < 22025.465794806718 || Math.expm1(-2e-17) != -2e-17 ? function(e) {
    if ((e = +e) == 0) {
        return e;
    }
    if (e > -0.000001 && e < 0.000001) {
        return e + e * e / 2;
    }
    return Math.exp(e) - 1;
} : Math.expm1;
