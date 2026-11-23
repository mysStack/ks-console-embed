import { a as a_1, c } from "./module-1259.js";
export const a = function(e) {
    if (typeof e === "string") {
        return new a_1([
            [
                document.querySelector(e)
            ]
        ], [
            document.documentElement
        ]);
    }
    return new a_1([
        [
            e
        ]
    ], c);
};
