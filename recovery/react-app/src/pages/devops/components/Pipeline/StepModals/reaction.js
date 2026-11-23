import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import "unpacked/module-31.js";
import module246 from "unpacked/module-246.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-448.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-193.js";
import module1335 from "unpacked/module-1335.js";
import module74 from "unpacked/module-74.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
export const defaultConfig = [
    {
        name: "fromCodeRepository",
        type: "importCodeRepo",
        reactions: JSON.stringify([
            {
                target: "url",
                fulfill: {
                    state: {
                        value: "{{$context?.getRepoUrl?.($self.value)}}"
                    }
                }
            },
            {
                target: "credentialsId",
                fulfill: {
                    state: {
                        value: "{{$self.value?.secret}}"
                    }
                }
            }
        ])
    },
    {
        name: "url",
        type: "string",
        required: true,
        display: "URL"
    },
    {
        name: "credentialsId",
        type: "secret",
        display: "Credential Name"
    },
    {
        name: "codeRepository",
        type: "codeRepository",
        required: true,
        display: "CODE_REPO"
    },
    {
        name: "branch",
        type: "string",
        required: true,
        display: "Branch",
        defaultValue: "master"
    }
];
export function runTemplate(e, t) {
    const a = /^\s*\{\{([\s\S]*)\}\}\s*$/;
    if (a.test(e)) {
        const res = [];
        const n = e.replace(a, (e, a)=>{
            try {
                const n = new Function("root", `with(root) {return ${a}}`)(t);
                if (module246(n) === "object") {
                    res.push(n);
                    return `res[${res.length - 1}]`;
                }
                return n;
            } catch (error) {
                console.error("Error evaluating expression:", error);
                return "undefined";
            }
        });
        try {
            if (res.length) {
                return new Function("root", `with(root) {return ${n}}`)({
                    res,
                    ...t
                });
            }
            return n;
        } catch (e) {
            return;
        }
    }
    return e;
}
export const Reaction = function e(t, r = {}) {
    const _this = this;
    module36(this, e);
    this.state = {};
    this.values = {};
    this.config = [];
    this.context = {};
    this.init = function(e, t) {
        const r = e.map((e)=>({
                ...e,
                reactions: e.reactions ? JSON.parse(e.reactions) : []
            }));
        _this.config = r;
        let n = 0;
        const l = [];
        const u = {};
        const o = [];
        r.forEach((e)=>{
            if (module26(t, e.name) !== undefined) {
                module74(u, e.name, t[e.name]);
            }
            l[e.name] = {
                order: n++,
                display: "block",
                value: module26(t, e.name),
                reactions: e.reactions ?? [],
                "x-props": e
            };
            o.push(function() {
                _this.handleValueChange({
                    key: e.name,
                    value: module26(t, e.name)
                }, true);
            });
        });
        _this.state = l;
        _this.values = u;
        o.forEach((e)=>e());
    };
    this.setValues = function(e, t) {
        if (t !== undefined) {
            module74(_this.values, e, t);
        } else {
            _this.values = module189(_this.values, e);
        }
    };
    this.handleValueChange = function(e) {
        const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const state = _this.state;
        _this.setValues(e.key, e.value);
        _this.state[e.key].value = e.value;
        const reactions = state[e.key].reactions;
        reactions?.forEach(function(n) {
            _this.getStateByReaction(n, state[e.key], t);
        });
    };
    this.getStateByReaction = function(e, $self) {
        const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        const { target, fulfill } = e;
        const o = [];
        Object.entries(fulfill.state).forEach((e)=>{
            const u = module96(e, 2);
            const i = u[0];
            const c = u[1];
            if (!r || i !== "value") {
                const s = _this.reactions[i];
                const f = runTemplate(c, {
                    $self,
                    $context: _this.context
                });
                if (_this.state[target]) {
                    _this.state[target][i] = f;
                    if (s) {
                        o.push(function() {
                            return s(target, f);
                        });
                    }
                }
            }
        });
        o.forEach((e)=>e());
    };
    this.handleFieldValueChange = function(e, t) {
        if (_this.state[e]) {
            _this.handleValueChange({
                key: e,
                value: t
            });
            _this.update?.();
        }
    };
    this.handleChangeValue = function(key, t) {
        _this.handleValueChange({
            key,
            value: t
        });
    };
    this.handleDisplayChange = function(e, t) {
        if (t !== "none") {
            _this.handleValueChange({
                key: e,
                value: _this.state[e].value
            });
        } else {
            _this.handleValueChange({
                key: e,
                value: undefined
            });
        }
    };
    this.getValues = function() {
        return _this.values;
    };
    this.getFields = function() {
        return module1335(Object.values(_this.state), "order").reduce((acc, item)=>{
            if (item.display === "block") {
                acc.push(item["x-props"]);
            }
            return acc;
        }, []);
    };
    this.update = t;
    this.context = r;
    this.reactions = {
        display: this.handleDisplayChange.bind(this),
        value: this.handleChangeValue.bind(this)
    };
};
