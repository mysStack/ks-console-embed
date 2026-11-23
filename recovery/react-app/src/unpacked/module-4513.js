const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const i2c = `${r}+/`;
const i2cUrl = `${r}-_`;
const a = (e)=>{
    const t = {};
    for(let n = 0; n < 64; n++){
        t[e.charAt(n)] = n;
    }
    return t;
};
export default {
    i2c,
    c2i: a(i2c),
    i2cUrl,
    c2iUrl: a(i2cUrl)
};
