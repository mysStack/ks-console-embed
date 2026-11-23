import module1897 from "unpacked/module-1897.js";
export default function(e) {
    try {
        module1897(e);
    } catch (error) {
        if (error instanceof module1897.CycleException) {
            return false;
        }
        throw error;
    }
    return true;
};
