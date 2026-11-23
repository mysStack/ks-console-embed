import module19 from "unpacked/module-19.js";
import module40 from "unpacked/module-40.js";
import module33 from "unpacked/module-33.js";
import module79 from "unpacked/module-79.js";
const l = module40("iterator");
export default !module19(function() {
    const e = new URL("b?a=1&b=2&c=3", "http://a");
    const e_searchParams = e.searchParams;
    const n = new URLSearchParams("a=1&a=2&b=3");
    let r = "";
    e.pathname = "c%20d";
    e_searchParams.forEach((e, n)=>{
        e_searchParams.delete("b");
        r += n + e;
    });
    n.delete("a", 2);
    n.delete("b", undefined);
    return module79 && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", undefined) || n.has("b")) || !e_searchParams.size && (module79 || !module33) || !e_searchParams.sort || e.href !== "http://a/c%20d?a=1&c=3" || e_searchParams.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !e_searchParams[l] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || r !== "a1c3" || new URL("http://x", undefined).host !== "x";
});
