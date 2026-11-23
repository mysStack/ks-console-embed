class r {
    constructor(e, t, n){
        this.locales = e;
        this.formats = t;
        this.pluralFn = n;
    }
    compile(e) {
        this.pluralStack = [];
        this.currentPlural = null;
        this.pluralNumberFormat = null;
        return this.compileMessage(e);
    }
    compileMessage(e) {
        if (!e || e.type !== "messageFormatPattern") {
            throw new Error('Message AST is not of type: "messageFormatPattern"');
        }
        let t;
        let n;
        let r;
        const e_elements = e.elements;
        const a = [];
        t = 0;
        for(n = e_elements.length; t < n; t += 1){
            switch((r = e_elements[t]).type){
                case "messageTextElement":
                    a.push(this.compileMessageText(r));
                    break;
                case "argumentElement":
                    a.push(this.compileArgument(r));
                    break;
                default:
                    throw new Error("Message element does not have a valid type");
            }
        }
        return a;
    }
    compileMessageText(e) {
        if (this.currentPlural && /(^|[^\\])#/g.test(e.value)) {
            if (!this.pluralNumberFormat) {
                this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
            }
            return new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value);
        }
        return e.value.replace(/\\#/g, "#");
    }
    compileArgument(e) {
        const e_format = e.format;
        if (!e_format) {
            return new o(e.id);
        }
        let n;
        const formats = this.formats;
        const locales = this.locales;
        const pluralFn = this.pluralFn;
        switch(e_format.type){
            case "numberFormat":
                n = formats.number[e_format.style];
                return {
                    id: e.id,
                    format: new Intl.NumberFormat(locales, n).format
                };
            case "dateFormat":
                n = formats.date[e_format.style];
                return {
                    id: e.id,
                    format: new Intl.DateTimeFormat(locales, n).format
                };
            case "timeFormat":
                n = formats.time[e_format.style];
                return {
                    id: e.id,
                    format: new Intl.DateTimeFormat(locales, n).format
                };
            case "pluralFormat":
                n = this.compileOptions(e);
                return new a(e.id, e_format.ordinal, e_format.offset, n, pluralFn);
            case "selectFormat":
                n = this.compileOptions(e);
                return new l(e.id, n);
            default:
                throw new Error("Message element does not have a valid format type");
        }
    }
    compileOptions(e) {
        let t;
        let n;
        let r;
        const e_format = e.format;
        const o_options = e_format.options;
        const i = {};
        this.pluralStack.push(this.currentPlural);
        this.currentPlural = e_format.type === "pluralFormat" ? e : null;
        t = 0;
        for(n = o_options.length; t < n; t += 1){
            i[(r = o_options[t]).selector] = this.compileMessage(r.value);
        }
        this.currentPlural = this.pluralStack.pop();
        return i;
    }
}
class o {
    constructor(e){
        this.id = e;
    }
    format(e) {
        if (e || typeof e === "number") {
            if (typeof e === "string") {
                return e;
            }
            return String(e);
        }
        return "";
    }
}
class a {
    constructor(e, t, n, r, o){
        this.id = e;
        this.useOrdinal = t;
        this.offset = n;
        this.options = r;
        this.pluralFn = o;
    }
    getOption(e) {
        const options = this.options;
        return options[`=${e}`] || options[this.pluralFn(e - this.offset, this.useOrdinal)] || options.other;
    }
}
class i {
    constructor(e, t, n, r){
        this.id = e;
        this.offset = t;
        this.numberFormat = n;
        this.string = r;
    }
    format(e) {
        const t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, `\$1${t}`).replace(/\\#/g, "#");
    }
}
class l {
    constructor(e, t){
        this.id = e;
        this.options = t;
    }
    getOption(e) {
        const options = this.options;
        return options[e] || options.other;
    }
}
export default r;
