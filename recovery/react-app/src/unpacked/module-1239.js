export default function(e) {
    if (isNaN(e = +e)) {
        return 0;
    }
    return (e > 0 ? Math.floor : Math.ceil)(e);
};
