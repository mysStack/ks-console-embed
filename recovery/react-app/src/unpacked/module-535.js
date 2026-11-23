export default Math.trunc || function(e) {
    const t = +e;
    return (t > 0 ? Math.floor : Math.ceil)(t);
};
