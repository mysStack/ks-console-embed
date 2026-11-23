let n = 0;
const r = Math.random();
export default function(e) {
    return `Symbol(${e === undefined ? "" : e})_${(++n + r).toString(36)}`;
};
