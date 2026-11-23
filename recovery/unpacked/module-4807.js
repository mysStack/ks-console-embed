export default function(e) {
    const t = Math.round(e);
    if (t < 0) {
        return 0;
    }
    if (t > 255) {
        return 255;
    }
    return 255 & t;
};
