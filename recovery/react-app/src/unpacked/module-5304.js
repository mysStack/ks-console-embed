export class diff_match_patch {
    constructor(){
        this.Diff_Timeout = 1;
        this.Diff_EditCost = 4;
        this.Match_Threshold = 0.5;
        this.Match_Distance = 1000;
        this.Patch_DeleteThreshold = 0.5;
        this.Patch_Margin = 4;
        this.Match_MaxBits = 32;
    }
    diff_main(e, t, r = true, o = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1000 * this.Diff_Timeout) {
        const i = o;
        if (e == null || t == null) {
            throw new Error("Null input. (diff_main)");
        }
        if (e == t) {
            if (e) {
                return [
                    new diff_match_patch.Diff(0, e)
                ];
            }
            return [];
        }
        const a = r;
        let l = this.diff_commonPrefix(e, t);
        const u = e.substring(0, l);
        e = e.substring(l);
        t = t.substring(l);
        l = this.diff_commonSuffix(e, t);
        const s = e.substring(e.length - l);
        e = e.substring(0, e.length - l);
        t = t.substring(0, t.length - l);
        const c = this.diff_compute_(e, t, a, i);
        if (u) {
            c.unshift(new diff_match_patch.Diff(0, u));
        }
        if (s) {
            c.push(new diff_match_patch.Diff(0, s));
        }
        this.diff_cleanupMerge(c);
        return c;
    }
    diff_compute_(e, t, r, o) {
        let i;
        if (!e) {
            return [
                new diff_match_patch.Diff(1, t)
            ];
        }
        if (!t) {
            return [
                new diff_match_patch.Diff(-1, e)
            ];
        }
        const a = e.length > t.length ? e : t;
        const l = e.length > t.length ? t : e;
        const u = a.indexOf(l);
        if (u != -1) {
            i = [
                new diff_match_patch.Diff(1, a.substring(0, u)),
                new diff_match_patch.Diff(0, l),
                new diff_match_patch.Diff(1, a.substring(u + l.length))
            ];
            if (e.length > t.length) {
                i[0][0] = i[2][0] = -1;
            }
            return i;
        }
        if (l.length == 1) {
            return [
                new diff_match_patch.Diff(-1, e),
                new diff_match_patch.Diff(1, t)
            ];
        }
        const s = this.diff_halfMatch_(e, t);
        if (s) {
            const c = s[0];
            const f = s[1];
            const d = s[2];
            const p = s[3];
            const h = s[4];
            const v = this.diff_main(c, d, r, o);
            const g = this.diff_main(f, p, r, o);
            return v.concat([
                new diff_match_patch.Diff(0, h)
            ], g);
        }
        if (r && e.length > 100 && t.length > 100) {
            return this.diff_lineMode_(e, t, o);
        }
        return this.diff_bisect_(e, t, o);
    }
    diff_lineMode_(e, t, r) {
        const o = this.diff_linesToChars_(e, t);
        e = o.chars1;
        t = o.chars2;
        const o_lineArray = o.lineArray;
        const a = this.diff_main(e, t, false, r);
        this.diff_charsToLines_(a, o_lineArray);
        this.diff_cleanupSemantic(a);
        a.push(new diff_match_patch.Diff(0, ""));
        for(let l = 0, u = 0, s = 0, c = "", f = ""; l < a.length;){
            switch(a[l][0]){
                case 1:
                    s++;
                    f += a[l][1];
                    break;
                case -1:
                    u++;
                    c += a[l][1];
                    break;
                case 0:
                    if (u >= 1 && s >= 1) {
                        a.splice(l - u - s, u + s);
                        l = l - u - s;
                        const d = this.diff_main(c, f, false, r);
                        for(let p = d.length - 1; p >= 0; p--){
                            a.splice(l, 0, d[p]);
                        }
                        l += d.length;
                    }
                    s = 0;
                    u = 0;
                    c = "";
                    f = "";
            }
            l++;
        }
        a.pop();
        return a;
    }
    diff_bisect_(e, t, r) {
        const e_length = e.length;
        const t_length = t.length;
        const a = Math.ceil((e_length + t_length) / 2);
        const l = a;
        for(var u = 2 * a, s = new Array(u), c = new Array(u), f = 0; f < u; f++){
            s[f] = -1;
            c[f] = -1;
        }
        s[l + 1] = 0;
        c[l + 1] = 0;
        const d = e_length - t_length;
        const p = d % 2 != 0;
        let h = 0;
        let v = 0;
        let g = 0;
        let y = 0;
        for(let m = 0; m < a && !((new Date).getTime() > r); m++){
            for(let b = -m + h; b <= m - v; b += 2){
                var x = l + b;
                for(var w = (M = b == -m || b != m && s[x - 1] < s[x + 1] ? s[x + 1] : s[x - 1] + 1) - b; M < e_length && w < t_length && e.charAt(M) == t.charAt(w);){
                    M++;
                    w++;
                }
                s[x] = M;
                if (M > e_length) {
                    v += 2;
                } else if (w > t_length) {
                    h += 2;
                } else if (p && (O = l + d - b) >= 0 && O < u && c[O] != -1 && M >= (C = e_length - c[O])) {
                    return this.diff_bisectSplit_(e, t, M, w, r);
                }
            }
            for(let _ = -m + g; _ <= m - y; _ += 2){
                var O = l + _;
                for(var C, E = (C = _ == -m || _ != m && c[O - 1] < c[O + 1] ? c[O + 1] : c[O - 1] + 1) - _; C < e_length && E < t_length && e.charAt(e_length - C - 1) == t.charAt(t_length - E - 1);){
                    C++;
                    E++;
                }
                c[O] = C;
                if (C > e_length) {
                    y += 2;
                } else if (E > t_length) {
                    g += 2;
                } else if (!p) {
                    var M;
                    if ((x = l + d - _) >= 0 && x < u && s[x] != -1) {
                        w = l + (M = s[x]) - x;
                        if (M >= (C = e_length - C)) {
                            return this.diff_bisectSplit_(e, t, M, w, r);
                        }
                    }
                }
            }
        }
        return [
            new diff_match_patch.Diff(-1, e),
            new diff_match_patch.Diff(1, t)
        ];
    }
    diff_bisectSplit_(e, t, n, r, o) {
        const i = e.substring(0, n);
        const a = t.substring(0, r);
        const l = e.substring(n);
        const u = t.substring(r);
        const s = this.diff_main(i, a, false, o);
        const c = this.diff_main(l, u, false, o);
        return s.concat(c);
    }
    diff_linesToChars_(e, t) {
        const lineArray = [];
        const r = {};
        function o(e) {
            let t = "";
            let o = 0;
            for(let a = -1, l = lineArray.length; a < e.length - 1;){
                if ((a = e.indexOf("\n", o)) == -1) {
                    a = e.length - 1;
                }
                let u = e.substring(o, a + 1);
                if (r.hasOwnProperty ? r.hasOwnProperty(u) : r[u] !== undefined) {
                    t += String.fromCharCode(r[u]);
                } else {
                    if (l == i) {
                        u = e.substring(o);
                        a = e.length;
                    }
                    t += String.fromCharCode(l);
                    r[u] = l;
                    lineArray[l++] = u;
                }
                o = a + 1;
            }
            return t;
        }
        lineArray[0] = "";
        var i = 40000;
        const chars1 = o(e);
        i = 65535;
        return {
            chars1,
            chars2: o(t),
            lineArray
        };
    }
    diff_charsToLines_(e, t) {
        for(let n = 0; n < e.length; n++){
            for(var r = e[n][1], o = [], i = 0; i < r.length; i++){
                o[i] = t[r.charCodeAt(i)];
            }
            e[n][1] = o.join("");
        }
    }
    diff_commonPrefix(e, t) {
        if (!e || !t || e.charAt(0) != t.charAt(0)) {
            return 0;
        }
        for(var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;){
            if (e.substring(i, o) == t.substring(i, o)) {
                n = o;
                i = o;
            } else {
                r = o;
            }
            o = Math.floor((r - n) / 2 + n);
        }
        return o;
    }
    diff_commonSuffix(e, t) {
        if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) {
            return 0;
        }
        for(var n = 0, r = Math.min(e.length, t.length), o = r, i = 0; n < o;){
            if (e.substring(e.length - o, e.length - i) == t.substring(t.length - o, t.length - i)) {
                n = o;
                i = o;
            } else {
                r = o;
            }
            o = Math.floor((r - n) / 2 + n);
        }
        return o;
    }
    diff_commonOverlap_(e, t) {
        const e_length = e.length;
        const t_length = t.length;
        if (e_length == 0 || t_length == 0) {
            return 0;
        }
        if (e_length > t_length) {
            e = e.substring(e_length - t_length);
        } else if (e_length < t_length) {
            t = t.substring(0, e_length);
        }
        const o = Math.min(e_length, t_length);
        if (e == t) {
            return o;
        }
        let i = 0;
        let a = 1;
        while(true){
            const l = e.substring(o - a);
            const u = t.indexOf(l);
            if (u == -1) {
                return i;
            }
            a += u;
            if (!(u != 0 && e.substring(o - a) != t.substring(0, a))) {
                i = a;
                a++;
            }
        }
    }
    diff_halfMatch_(e, t) {
        if (this.Diff_Timeout <= 0) {
            return null;
        }
        const n = e.length > t.length ? e : t;
        const r = e.length > t.length ? t : e;
        if (n.length < 4 || 2 * r.length < n.length) {
            return null;
        }
        const _this = this;
        function i(e, t, n) {
            let r;
            let i;
            let a;
            let l;
            for(var u = e.substring(n, n + Math.floor(e.length / 4)), s = -1, c = ""; (s = t.indexOf(u, s + 1)) != -1;){
                const f = _this.diff_commonPrefix(e.substring(n), t.substring(s));
                const d = _this.diff_commonSuffix(e.substring(0, n), t.substring(0, s));
                if (c.length < d + f) {
                    c = t.substring(s - d, s) + t.substring(s, s + f);
                    r = e.substring(0, n - d);
                    i = e.substring(n + f);
                    a = t.substring(0, s - d);
                    l = t.substring(s + f);
                }
            }
            if (2 * c.length >= e.length) {
                return [
                    r,
                    i,
                    a,
                    l,
                    c
                ];
            }
            return null;
        }
        let a;
        let l;
        let u;
        let s;
        let c;
        const f = i(n, r, Math.ceil(n.length / 4));
        const d = i(n, r, Math.ceil(n.length / 2));
        if (f || d) {
            a = d ? f && f[4].length > d[4].length ? f : d : f;
            if (e.length > t.length) {
                l = a[0];
                u = a[1];
                s = a[2];
                c = a[3];
            } else {
                s = a[0];
                c = a[1];
                l = a[2];
                u = a[3];
            }
            return [
                l,
                u,
                s,
                c,
                a[4]
            ];
        }
        return null;
    }
    diff_cleanupSemantic(e) {
        let t = false;
        const r = [];
        let o = 0;
        let i = null;
        for(var a = 0, l = 0, u = 0, s = 0, c = 0; a < e.length;){
            if (e[a][0] == 0) {
                r[o++] = a;
                l = s;
                u = c;
                s = 0;
                c = 0;
                i = e[a][1];
            } else {
                if (e[a][0] == 1) {
                    s += e[a][1].length;
                } else {
                    c += e[a][1].length;
                }
                if (i && i.length <= Math.max(l, u) && i.length <= Math.max(s, c)) {
                    e.splice(r[o - 1], 0, new diff_match_patch.Diff(-1, i));
                    e[r[o - 1] + 1][0] = 1;
                    o--;
                    a = --o > 0 ? r[o - 1] : -1;
                    l = 0;
                    u = 0;
                    s = 0;
                    c = 0;
                    i = null;
                    t = true;
                }
            }
            a++;
        }
        if (t) {
            this.diff_cleanupMerge(e);
        }
        this.diff_cleanupSemanticLossless(e);
        for(a = 1; a < e.length;){
            if (e[a - 1][0] == -1 && e[a][0] == 1) {
                const f = e[a - 1][1];
                const d = e[a][1];
                const p = this.diff_commonOverlap_(f, d);
                const h = this.diff_commonOverlap_(d, f);
                if (p >= h) {
                    if (p >= f.length / 2 || p >= d.length / 2) {
                        e.splice(a, 0, new diff_match_patch.Diff(0, d.substring(0, p)));
                        e[a - 1][1] = f.substring(0, f.length - p);
                        e[a + 1][1] = d.substring(p);
                        a++;
                    }
                } else if (h >= f.length / 2 || h >= d.length / 2) {
                    e.splice(a, 0, new diff_match_patch.Diff(0, f.substring(0, h)));
                    e[a - 1][0] = 1;
                    e[a - 1][1] = d.substring(0, d.length - h);
                    e[a + 1][0] = -1;
                    e[a + 1][1] = f.substring(h);
                    a++;
                }
                a++;
            }
            a++;
        }
    }
    diff_cleanupSemanticLossless(e) {
        function t(e, t) {
            if (!e || !t) {
                return 6;
            }
            const r = e.charAt(e.length - 1);
            const o = t.charAt(0);
            const i = r.match(diff_match_patch.nonAlphaNumericRegex_);
            const a = o.match(diff_match_patch.nonAlphaNumericRegex_);
            const l = i && r.match(diff_match_patch.whitespaceRegex_);
            const u = a && o.match(diff_match_patch.whitespaceRegex_);
            const s = l && r.match(diff_match_patch.linebreakRegex_);
            const c = u && o.match(diff_match_patch.linebreakRegex_);
            const f = s && e.match(diff_match_patch.blanklineEndRegex_);
            const d = c && t.match(diff_match_patch.blanklineStartRegex_);
            if (f || d) {
                return 5;
            }
            if (s || c) {
                return 4;
            }
            if (i && !l && u) {
                return 3;
            }
            if (l || u) {
                return 2;
            }
            if (i || a) {
                return 1;
            }
            return 0;
        }
        for(let r = 1; r < e.length - 1;){
            if (e[r - 1][0] == 0 && e[r + 1][0] == 0) {
                let o = e[r - 1][1];
                let i = e[r][1];
                let a = e[r + 1][1];
                const l = this.diff_commonSuffix(o, i);
                if (l) {
                    const u = i.substring(i.length - l);
                    o = o.substring(0, o.length - l);
                    i = u + i.substring(0, i.length - l);
                    a = u + a;
                }
                let s = o;
                let c = i;
                let f = a;
                let d = t(o, i) + t(i, a);
                while(i.charAt(0) === a.charAt(0)){
                    o += i.charAt(0);
                    i = i.substring(1) + a.charAt(0);
                    a = a.substring(1);
                    const p = t(o, i) + t(i, a);
                    if (p >= d) {
                        d = p;
                        s = o;
                        c = i;
                        f = a;
                    }
                }
                if (e[r - 1][1] != s) {
                    if (s) {
                        e[r - 1][1] = s;
                    } else {
                        e.splice(r - 1, 1);
                        r--;
                    }
                    e[r][1] = c;
                    if (f) {
                        e[r + 1][1] = f;
                    } else {
                        e.splice(r + 1, 1);
                        r--;
                    }
                }
            }
            r++;
        }
    }
    diff_cleanupEfficiency(e) {
        let t = false;
        const r = [];
        let o = 0;
        let i = null;
        for(let a = 0, l = false, u = false, s = false, c = false; a < e.length;){
            if (e[a][0] == 0) {
                if (e[a][1].length < this.Diff_EditCost && (s || c)) {
                    r[o++] = a;
                    l = s;
                    u = c;
                    i = e[a][1];
                } else {
                    o = 0;
                    i = null;
                }
                c = false;
                s = false;
            } else {
                if (e[a][0] == -1) {
                    c = true;
                } else {
                    s = true;
                }
                if (i && (l && u && s && c || i.length < this.Diff_EditCost / 2 && l + u + s + c == 3)) {
                    e.splice(r[o - 1], 0, new diff_match_patch.Diff(-1, i));
                    e[r[o - 1] + 1][0] = 1;
                    o--;
                    i = null;
                    if (l && u) {
                        c = true;
                        s = true;
                        o = 0;
                    } else {
                        a = --o > 0 ? r[o - 1] : -1;
                        c = false;
                        s = false;
                    }
                    t = true;
                }
            }
            a++;
        }
        if (t) {
            this.diff_cleanupMerge(e);
        }
    }
    diff_cleanupMerge(e) {
        e.push(new diff_match_patch.Diff(0, ""));
        let t;
        for(var r = 0, o = 0, i = 0, a = "", l = ""; r < e.length;){
            switch(e[r][0]){
                case 1:
                    i++;
                    l += e[r][1];
                    r++;
                    break;
                case -1:
                    o++;
                    a += e[r][1];
                    r++;
                    break;
                case 0:
                    if (o + i > 1) {
                        if (o !== 0 && i !== 0) {
                            if ((t = this.diff_commonPrefix(l, a)) !== 0) {
                                if (r - o - i > 0 && e[r - o - i - 1][0] == 0) {
                                    e[r - o - i - 1][1] += l.substring(0, t);
                                } else {
                                    e.splice(0, 0, new diff_match_patch.Diff(0, l.substring(0, t)));
                                    r++;
                                }
                                l = l.substring(t);
                                a = a.substring(t);
                            }
                            if ((t = this.diff_commonSuffix(l, a)) !== 0) {
                                e[r][1] = l.substring(l.length - t) + e[r][1];
                                l = l.substring(0, l.length - t);
                                a = a.substring(0, a.length - t);
                            }
                        }
                        r -= o + i;
                        e.splice(r, o + i);
                        if (a.length) {
                            e.splice(r, 0, new diff_match_patch.Diff(-1, a));
                            r++;
                        }
                        if (l.length) {
                            e.splice(r, 0, new diff_match_patch.Diff(1, l));
                            r++;
                        }
                        r++;
                    } else if (r !== 0 && e[r - 1][0] == 0) {
                        e[r - 1][1] += e[r][1];
                        e.splice(r, 1);
                    } else {
                        r++;
                    }
                    i = 0;
                    o = 0;
                    a = "";
                    l = "";
            }
        }
        if (e[e.length - 1][1] === "") {
            e.pop();
        }
        let u = false;
        for(r = 1; r < e.length - 1;){
            if (e[r - 1][0] == 0 && e[r + 1][0] == 0) {
                if (e[r][1].substring(e[r][1].length - e[r - 1][1].length) == e[r - 1][1]) {
                    e[r][1] = e[r - 1][1] + e[r][1].substring(0, e[r][1].length - e[r - 1][1].length);
                    e[r + 1][1] = e[r - 1][1] + e[r + 1][1];
                    e.splice(r - 1, 1);
                    u = true;
                } else if (e[r][1].substring(0, e[r + 1][1].length) == e[r + 1][1]) {
                    e[r - 1][1] += e[r + 1][1];
                    e[r][1] = e[r][1].substring(e[r + 1][1].length) + e[r + 1][1];
                    e.splice(r + 1, 1);
                    u = true;
                }
            }
            r++;
        }
        if (u) {
            this.diff_cleanupMerge(e);
        }
    }
    diff_xIndex(e, t) {
        let n;
        let r = 0;
        let o = 0;
        let i = 0;
        let a = 0;
        for(n = 0; n < e.length && (e[n][0] !== 1 && (r += e[n][1].length), e[n][0] !== -1 && (o += e[n][1].length), !(r > t)); n++){
            i = r;
            a = o;
        }
        if (e.length != n && e[n][0] === -1) {
            return a;
        }
        return a + (t - i);
    }
    diff_prettyHtml(e) {
        const t = [];
        const n = /&/g;
        const r = /</g;
        const o = />/g;
        const i = /\n/g;
        for(let a = 0; a < e.length; a++){
            const l = e[a][0];
            const u = e[a][1].replace(n, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(i, "&para;<br>");
            switch(l){
                case 1:
                    t[a] = `<ins style="background:#e6ffe6;">${u}</ins>`;
                    break;
                case -1:
                    t[a] = `<del style="background:#ffe6e6;">${u}</del>`;
                    break;
                case 0:
                    t[a] = `<span>${u}</span>`;
            }
        }
        return t.join("");
    }
    diff_text1(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            if (e[n][0] !== 1) {
                t[n] = e[n][1];
            }
        }
        return t.join("");
    }
    diff_text2(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            if (e[n][0] !== -1) {
                t[n] = e[n][1];
            }
        }
        return t.join("");
    }
    diff_levenshtein(e) {
        let t = 0;
        let n = 0;
        let r = 0;
        for(let o = 0; o < e.length; o++){
            const i = e[o][0];
            const a = e[o][1];
            switch(i){
                case 1:
                    n += a.length;
                    break;
                case -1:
                    r += a.length;
                    break;
                case 0:
                    t += Math.max(n, r);
                    n = 0;
                    r = 0;
            }
        }
        return t + Math.max(n, r);
    }
    diff_toDelta(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            switch(e[n][0]){
                case 1:
                    t[n] = `+${encodeURI(e[n][1])}`;
                    break;
                case -1:
                    t[n] = `-${e[n][1].length}`;
                    break;
                case 0:
                    t[n] = `=${e[n][1].length}`;
            }
        }
        return t.join("\t").replace(/%20/g, " ");
    }
    diff_fromDelta(e, t) {
        const r = [];
        let o = 0;
        let i = 0;
        for(let a = t.split(/\t/g), l = 0; l < a.length; l++){
            const u = a[l].substring(1);
            switch(a[l].charAt(0)){
                case "+":
                    try {
                        r[o++] = new diff_match_patch.Diff(1, decodeURI(u));
                    } catch (e) {
                        throw new Error(`Illegal escape in diff_fromDelta: ${u}`);
                    }
                    break;
                case "-":
                case "=":
                    const s = parseInt(u, 10);
                    if (isNaN(s) || s < 0) {
                        throw new Error(`Invalid number in diff_fromDelta: ${u}`);
                    }
                    const c = e.substring(i, i += s);
                    if (a[l].charAt(0) == "=") {
                        r[o++] = new diff_match_patch.Diff(0, c);
                    } else {
                        r[o++] = new diff_match_patch.Diff(-1, c);
                    }
                    break;
                default:
                    if (a[l]) {
                        throw new Error(`Invalid diff operation in diff_fromDelta: ${a[l]}`);
                    }
            }
        }
        if (i != e.length) {
            throw new Error(`Delta length (${i}) does not equal source text length (${e.length}).`);
        }
        return r;
    }
    match_main(e, t, n) {
        if (e == null || t == null || n == null) {
            throw new Error("Null input. (match_main)");
        }
        n = Math.max(0, Math.min(n, e.length));
        if (e == t) {
            return 0;
        }
        if (e.length) {
            if (e.substring(n, n + t.length) == t) {
                return n;
            }
            return this.match_bitap_(e, t, n);
        }
        return -1;
    }
    match_bitap_(e, t, n) {
        if (t.length > this.Match_MaxBits) {
            throw new Error("Pattern too long for this browser.");
        }
        const r = this.match_alphabet_(t);
        const _this = this;
        function i(e, r) {
            const i = e / t.length;
            const a = Math.abs(n - r);
            if (_this.Match_Distance) {
                return i + a / _this.Match_Distance;
            }
            if (a) {
                return 1;
            }
            return i;
        }
        let Match_Threshold = this.Match_Threshold;
        let l = e.indexOf(t, n);
        if (l != -1) {
            Match_Threshold = Math.min(i(0, l), Match_Threshold);
            if ((l = e.lastIndexOf(t, n + t.length)) != -1) {
                Match_Threshold = Math.min(i(0, l), Match_Threshold);
            }
        }
        let u;
        let s;
        const c = 1 << t.length - 1;
        l = -1;
        let f;
        let d = t.length + e.length;
        for(let p = 0; p < t.length; p++){
            u = 0;
            for(s = d; u < s;){
                if (i(p, n + s) <= Match_Threshold) {
                    u = s;
                } else {
                    d = s;
                }
                s = Math.floor((d - u) / 2 + u);
            }
            d = s;
            let h = Math.max(1, n - s + 1);
            const v = Math.min(n + s, e.length) + t.length;
            const g = Array(v + 2);
            g[v + 1] = (1 << p) - 1;
            for(let y = v; y >= h; y--){
                const m = r[e.charAt(y - 1)];
                g[y] = p === 0 ? (g[y + 1] << 1 | 1) & m : (g[y + 1] << 1 | 1) & m | (f[y + 1] | f[y]) << 1 | 1 | f[y + 1];
                if (g[y] & c) {
                    const b = i(p, y - 1);
                    if (b <= Match_Threshold) {
                        Match_Threshold = b;
                        if (!((l = y - 1) > n)) {
                            break;
                        }
                        h = Math.max(1, 2 * n - l);
                    }
                }
            }
            if (i(p + 1, n) > Match_Threshold) {
                break;
            }
            f = g;
        }
        return l;
    }
    match_alphabet_(e) {
        const t = {};
        for(var n = 0; n < e.length; n++){
            t[e.charAt(n)] = 0;
        }
        for(n = 0; n < e.length; n++){
            t[e.charAt(n)] |= 1 << e.length - n - 1;
        }
        return t;
    }
    patch_addContext_(e, t) {
        if (t.length != 0) {
            if (e.start2 === null) {
                throw Error("patch not initialized");
            }
            for(var r = t.substring(e.start2, e.start2 + e.length1), o = 0; t.indexOf(r) != t.lastIndexOf(r) && r.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;){
                o += this.Patch_Margin;
                r = t.substring(e.start2 - o, e.start2 + e.length1 + o);
            }
            o += this.Patch_Margin;
            const i = t.substring(e.start2 - o, e.start2);
            if (i) {
                e.diffs.unshift(new diff_match_patch.Diff(0, i));
            }
            const a = t.substring(e.start2 + e.length1, e.start2 + e.length1 + o);
            if (a) {
                e.diffs.push(new diff_match_patch.Diff(0, a));
            }
            e.start1 -= i.length;
            e.start2 -= i.length;
            e.length1 += i.length + a.length;
            e.length2 += i.length + a.length;
        }
    }
    patch_make(e, t, r) {
        let o;
        let i;
        if (typeof e === "string" && typeof t === "string" && r === undefined) {
            o = e;
            if ((i = this.diff_main(o, t, true)).length > 2) {
                this.diff_cleanupSemantic(i);
                this.diff_cleanupEfficiency(i);
            }
        } else if (e && typeof e === "object" && t === undefined && r === undefined) {
            i = e;
            o = this.diff_text1(i);
        } else if (typeof e === "string" && t && typeof t === "object" && r === undefined) {
            o = e;
            i = t;
        } else {
            if (typeof e !== "string" || typeof t !== "string" || !r || typeof r !== "object") {
                throw new Error("Unknown call format to patch_make.");
            }
            o = e;
            i = r;
        }
        if (i.length === 0) {
            return [];
        }
        const a = [];
        let l = new diff_match_patch.patch_obj;
        let u = 0;
        let s = 0;
        let c = 0;
        let f = o;
        let d = o;
        for(let p = 0; p < i.length; p++){
            const h = i[p][0];
            const v = i[p][1];
            if (!(u || h === 0)) {
                l.start1 = s;
                l.start2 = c;
            }
            switch(h){
                case 1:
                    l.diffs[u++] = i[p];
                    l.length2 += v.length;
                    d = d.substring(0, c) + v + d.substring(c);
                    break;
                case -1:
                    l.length1 += v.length;
                    l.diffs[u++] = i[p];
                    d = d.substring(0, c) + d.substring(c + v.length);
                    break;
                case 0:
                    if (v.length <= 2 * this.Patch_Margin && u && i.length != p + 1) {
                        l.diffs[u++] = i[p];
                        l.length1 += v.length;
                        l.length2 += v.length;
                    } else if (v.length >= 2 * this.Patch_Margin && u) {
                        this.patch_addContext_(l, f);
                        a.push(l);
                        l = new diff_match_patch.patch_obj;
                        u = 0;
                        f = d;
                        s = c;
                    }
            }
            if (h !== 1) {
                s += v.length;
            }
            if (h !== -1) {
                c += v.length;
            }
        }
        if (u) {
            this.patch_addContext_(l, f);
            a.push(l);
        }
        return a;
    }
    patch_deepCopy(e) {
        const t = [];
        for(let r = 0; r < e.length; r++){
            const o = e[r];
            const i = new diff_match_patch.patch_obj;
            i.diffs = [];
            for(let a = 0; a < o.diffs.length; a++){
                i.diffs[a] = new diff_match_patch.Diff(o.diffs[a][0], o.diffs[a][1]);
            }
            i.start1 = o.start1;
            i.start2 = o.start2;
            i.length1 = o.length1;
            i.length2 = o.length2;
            t[r] = i;
        }
        return t;
    }
    patch_apply(e, t) {
        if (e.length == 0) {
            return [
                t,
                []
            ];
        }
        e = this.patch_deepCopy(e);
        const n = this.patch_addPadding(e);
        t = n + t + n;
        this.patch_splitMax(e);
        let r = 0;
        const o = [];
        for(let i = 0; i < e.length; i++){
            let a;
            let l;
            const u = e[i].start2 + r;
            const s = this.diff_text1(e[i].diffs);
            let c = -1;
            if (s.length > this.Match_MaxBits) {
                if ((a = this.match_main(t, s.substring(0, this.Match_MaxBits), u)) != -1 && ((c = this.match_main(t, s.substring(s.length - this.Match_MaxBits), u + s.length - this.Match_MaxBits)) == -1 || a >= c)) {
                    a = -1;
                }
            } else {
                a = this.match_main(t, s, u);
            }
            if (a == -1) {
                o[i] = false;
                r -= e[i].length2 - e[i].length1;
            } else {
                o[i] = true;
                r = a - u;
                if (s == (l = c == -1 ? t.substring(a, a + s.length) : t.substring(a, c + this.Match_MaxBits))) {
                    t = t.substring(0, a) + this.diff_text2(e[i].diffs) + t.substring(a + s.length);
                } else {
                    const f = this.diff_main(s, l, false);
                    if (s.length > this.Match_MaxBits && this.diff_levenshtein(f) / s.length > this.Patch_DeleteThreshold) {
                        o[i] = false;
                    } else {
                        this.diff_cleanupSemanticLossless(f);
                        let d;
                        let p = 0;
                        for(let h = 0; h < e[i].diffs.length; h++){
                            const v = e[i].diffs[h];
                            if (v[0] !== 0) {
                                d = this.diff_xIndex(f, p);
                            }
                            if (v[0] === 1) {
                                t = t.substring(0, a + d) + v[1] + t.substring(a + d);
                            } else if (v[0] === -1) {
                                t = t.substring(0, a + d) + t.substring(a + this.diff_xIndex(f, p + v[1].length));
                            }
                            if (v[0] !== -1) {
                                p += v[1].length;
                            }
                        }
                    }
                }
            }
        }
        return [
            t = t.substring(n.length, t.length - n.length),
            o
        ];
    }
    patch_addPadding(e) {
        for(var t = this.Patch_Margin, r = "", o = 1; o <= t; o++){
            r += String.fromCharCode(o);
        }
        for(o = 0; o < e.length; o++){
            e[o].start1 += t;
            e[o].start2 += t;
        }
        let i = e[0];
        let i_diffs = i.diffs;
        if (i_diffs.length == 0 || i_diffs[0][0] != 0) {
            i_diffs.unshift(new diff_match_patch.Diff(0, r));
            i.start1 -= t;
            i.start2 -= t;
            i.length1 += t;
            i.length2 += t;
        } else if (t > i_diffs[0][1].length) {
            var l = t - i_diffs[0][1].length;
            i_diffs[0][1] = r.substring(i_diffs[0][1].length) + i_diffs[0][1];
            i.start1 -= l;
            i.start2 -= l;
            i.length1 += l;
            i.length2 += l;
        }
        if ((i_diffs = (i = e[e.length - 1]).diffs).length == 0 || i_diffs[i_diffs.length - 1][0] != 0) {
            i_diffs.push(new diff_match_patch.Diff(0, r));
            i.length1 += t;
            i.length2 += t;
        } else if (t > i_diffs[i_diffs.length - 1][1].length) {
            l = t - i_diffs[i_diffs.length - 1][1].length;
            i_diffs[i_diffs.length - 1][1] += r.substring(0, l);
            i.length1 += l;
            i.length2 += l;
        }
        return r;
    }
    patch_splitMax(e) {
        const Match_MaxBits = this.Match_MaxBits;
        for(let r = 0; r < e.length; r++){
            if (!(e[r].length1 <= Match_MaxBits)) {
                const o = e[r];
                e.splice(r--, 1);
                let i = o.start1;
                let a = o.start2;
                let l = "";
                while(o.diffs.length !== 0){
                    const u = new diff_match_patch.patch_obj;
                    let s = true;
                    u.start1 = i - l.length;
                    u.start2 = a - l.length;
                    if (l !== "") {
                        u.length1 = u.length2 = l.length;
                        u.diffs.push(new diff_match_patch.Diff(0, l));
                    }
                    while(o.diffs.length !== 0 && u.length1 < Match_MaxBits - this.Patch_Margin){
                        const c = o.diffs[0][0];
                        let f = o.diffs[0][1];
                        if (c === 1) {
                            u.length2 += f.length;
                            a += f.length;
                            u.diffs.push(o.diffs.shift());
                            s = false;
                        } else if (c === -1 && u.diffs.length == 1 && u.diffs[0][0] == 0 && f.length > 2 * Match_MaxBits) {
                            u.length1 += f.length;
                            i += f.length;
                            s = false;
                            u.diffs.push(new diff_match_patch.Diff(c, f));
                            o.diffs.shift();
                        } else {
                            f = f.substring(0, Match_MaxBits - u.length1 - this.Patch_Margin);
                            u.length1 += f.length;
                            i += f.length;
                            if (c === 0) {
                                u.length2 += f.length;
                                a += f.length;
                            } else {
                                s = false;
                            }
                            u.diffs.push(new diff_match_patch.Diff(c, f));
                            if (f == o.diffs[0][1]) {
                                o.diffs.shift();
                            } else {
                                o.diffs[0][1] = o.diffs[0][1].substring(f.length);
                            }
                        }
                    }
                    l = (l = this.diff_text2(u.diffs)).substring(l.length - this.Patch_Margin);
                    const d = this.diff_text1(o.diffs).substring(0, this.Patch_Margin);
                    if (d !== "") {
                        u.length1 += d.length;
                        u.length2 += d.length;
                        if (u.diffs.length !== 0 && u.diffs[u.diffs.length - 1][0] === 0) {
                            u.diffs[u.diffs.length - 1][1] += d;
                        } else {
                            u.diffs.push(new diff_match_patch.Diff(0, d));
                        }
                    }
                    if (!s) {
                        e.splice(++r, 0, u);
                    }
                }
            }
        }
    }
    patch_toText(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            t[n] = e[n];
        }
        return t.join("");
    }
    patch_fromText(e) {
        const t = [];
        if (!e) {
            return t;
        }
        for(let r = e.split("\n"), o = 0, i = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; o < r.length;){
            const a = r[o].match(i);
            if (!a) {
                throw new Error(`Invalid patch string: ${r[o]}`);
            }
            const l = new diff_match_patch.patch_obj;
            t.push(l);
            l.start1 = parseInt(a[1], 10);
            if (a[2] === "") {
                l.start1--;
                l.length1 = 1;
            } else if (a[2] == "0") {
                l.length1 = 0;
            } else {
                l.start1--;
                l.length1 = parseInt(a[2], 10);
            }
            l.start2 = parseInt(a[3], 10);
            if (a[4] === "") {
                l.start2--;
                l.length2 = 1;
            } else if (a[4] == "0") {
                l.length2 = 0;
            } else {
                l.start2--;
                l.length2 = parseInt(a[4], 10);
            }
            o++;
            while(o < r.length){
                const u = r[o].charAt(0);
                try {
                    var s = decodeURI(r[o].substring(1));
                } catch (e) {
                    throw new Error(`Illegal escape in patch_fromText: ${s}`);
                }
                if (u == "-") {
                    l.diffs.push(new diff_match_patch.Diff(-1, s));
                } else if (u == "+") {
                    l.diffs.push(new diff_match_patch.Diff(1, s));
                } else if (u == " ") {
                    l.diffs.push(new diff_match_patch.Diff(0, s));
                } else {
                    if (u == "@") {
                        break;
                    }
                    if (u !== "") {
                        throw new Error(`Invalid patch mode "${u}" in: ${s}`);
                    }
                }
                o++;
            }
        }
        return t;
    }
}
diff_match_patch.Diff = function(e, t) {
    return [
        e,
        t
    ];
};
diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
diff_match_patch.whitespaceRegex_ = /\s/;
diff_match_patch.linebreakRegex_ = /[\r\n]/;
diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
(diff_match_patch.patch_obj = function() {
    this.diffs = [];
    this.start1 = null;
    this.start2 = null;
    this.length1 = 0;
    this.length2 = 0;
}).prototype.toString = function() {
    let e;
    const t = [
        `@@ -${this.length1 === 0 ? `${this.start1},0` : this.length1 == 1 ? this.start1 + 1 : `${this.start1 + 1},${this.length1}`} +${this.length2 === 0 ? `${this.start2},0` : this.length2 == 1 ? this.start2 + 1 : `${this.start2 + 1},${this.length2}`} @@
`
    ];
    for(let n = 0; n < this.diffs.length; n++){
        switch(this.diffs[n][0]){
            case 1:
                e = "+";
                break;
            case -1:
                e = "-";
                break;
            case 0:
                e = " ";
        }
        t[n + 1] = `${e + encodeURI(this.diffs[n][1])}
`;
    }
    return t.join("").replace(/%20/g, " ");
};
export default diff_match_patch;
diff_match_patch.diff_match_patch = diff_match_patch;
export const DIFF_DELETE = diff_match_patch.DIFF_DELETE = -1;
export const DIFF_INSERT = diff_match_patch.DIFF_INSERT = 1;
export const DIFF_EQUAL = diff_match_patch.DIFF_EQUAL = 0;
