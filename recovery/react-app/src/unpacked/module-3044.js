export default function() {
    const e = document.getSelection();
    if (!e.rangeCount) {
        return function() {};
    }
    let document_activeElement = document.activeElement;
    const n = [];
    for(let r = 0; r < e.rangeCount; r++){
        n.push(e.getRangeAt(r));
    }
    switch(document_activeElement.tagName.toUpperCase()){
        case "INPUT":
        case "TEXTAREA":
            document_activeElement.blur();
            break;
        default:
            document_activeElement = null;
    }
    e.removeAllRanges();
    return function() {
        if (e.type === "Caret") {
            e.removeAllRanges();
        }
        if (!e.rangeCount) {
            n.forEach((t)=>{
                e.addRange(t);
            });
        }
        if (document_activeElement) {
            document_activeElement.focus();
        }
    };
};
