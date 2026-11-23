import module1021 from "./module-1021.js";
import module1203 from "./module-1203.js";
const module1203_Symbol = module1203.Symbol;
export default function(e) {
    return Object.defineProperties(e, {
        hasInstance: module1021("", module1203_Symbol && module1203_Symbol.hasInstance || e("hasInstance")),
        isConcatSpreadable: module1021("", module1203_Symbol && module1203_Symbol.isConcatSpreadable || e("isConcatSpreadable")),
        iterator: module1021("", module1203_Symbol && module1203_Symbol.iterator || e("iterator")),
        match: module1021("", module1203_Symbol && module1203_Symbol.match || e("match")),
        replace: module1021("", module1203_Symbol && module1203_Symbol.replace || e("replace")),
        search: module1021("", module1203_Symbol && module1203_Symbol.search || e("search")),
        species: module1021("", module1203_Symbol && module1203_Symbol.species || e("species")),
        split: module1021("", module1203_Symbol && module1203_Symbol.split || e("split")),
        toPrimitive: module1021("", module1203_Symbol && module1203_Symbol.toPrimitive || e("toPrimitive")),
        toStringTag: module1021("", module1203_Symbol && module1203_Symbol.toStringTag || e("toStringTag")),
        unscopables: module1021("", module1203_Symbol && module1203_Symbol.unscopables || e("unscopables"))
    });
};
