import "./module-15.js";
import "./module-84.js";
import "./module-30.js";
import "./module-1931.js";
import "./module-4.js";
import "./module-22.js";
import "./module-24.js";
import "./module-85.js";
import "./module-137.js";
import "./module-75.js";
import "./module-1932.js";
import "./module-1935.js";
import "./module-1936.js";
import "./module-1937.js";
import "./module-1938.js";
import "./module-1939.js";
import "./module-1940.js";
import "./module-1941.js";
import "./module-1942.js";
import "./module-1943.js";
import "./module-1944.js";
import "./module-1945.js";
import "./module-1946.js";
import "./module-1947.js";
import "./module-1948.js";
import "./module-1949.js";
import "./module-1950.js";
import "./module-1951.js";
import "./module-1952.js";
import "./module-1953.js";
import "./module-1954.js";
import "./module-1955.js";
import "./module-1956.js";
import "./module-1957.js";
import "./module-4811.js";
import "./module-4813.js";
import "./module-4814.js";
import "./module-4816.js";
import "./module-436.js";
import "./module-4817.js";
import "./module-4818.js";
import "./module-4819.js";
import "./module-4820.js";
import "./module-4822.js";
import "./module-4823.js";
export function convertToMebiBytes(e) {
    const t = e.toLowerCase();
    if (t.includes("g")) {
        return 1024 * parseFloat(t);
    }
    t.includes("m");
    return parseFloat(t);
}
export const copyToClipboard = function(e) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(e);
    }
    const textareaElement = document.createElement("textarea");
    textareaElement.value = e;
    textareaElement.style.position = "absolute";
    textareaElement.style.opacity = 0;
    textareaElement.style.left = "-999999px";
    textareaElement.style.top = "-999999px";
    document.body.appendChild(textareaElement);
    textareaElement.focus();
    textareaElement.select();
    return new Promise((resolve, reject)=>{
        if (document.execCommand("copy")) {
            resolve();
        } else {
            reject();
        }
        textareaElement.remove();
    });
};
export const binaryStringToBlob = function(e) {
    for(var t = e.length, a = new Uint8Array(t); t--;){
        a[t] = e.charCodeAt(t);
    }
    return new Blob([
        a
    ]);
};
export const convertJVMToMemoryMebiBytes = function(e) {
    const t = e.split(" ")[0];
    if (t.startsWith("-Xms")) {
        return convertToMebiBytes(t.substring(4));
    }
    return 0;
};
