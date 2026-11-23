export default function(e, t) {
    let e_length = e.length;
    for(e.sort(t); e_length--;){
        e[e_length] = e[e_length].value;
    }
    return e;
};
