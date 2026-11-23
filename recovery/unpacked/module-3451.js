export default function() {
    return typeof Number.isNaN === "function" && !Number.isNaN({}) && Number.isNaN(NaN) && !Number.isNaN(34);
};
