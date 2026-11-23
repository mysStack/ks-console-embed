export default function() {
    return typeof Math.sign === "function" && Math.sign(10) === 1 && Math.sign(-20) === -1;
};
