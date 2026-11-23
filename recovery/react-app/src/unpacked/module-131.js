import module39 from "unpacked/module-39.js";
export default function(e, t, n) {
    let o;
    let a;
    for(const i = n ? e : e.iterator, l = e.next; !(o = module39(l, i)).done;){
        if ((a = t(o.value)) !== undefined) {
            return a;
        }
    }
};
