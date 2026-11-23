export default function() {
    try {
        Object.keys("primitive");
        return true;
    } catch (e) {
        return false;
    }
};
