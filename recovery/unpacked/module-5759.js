export const DEFAULT_BELL_SOUND = "data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAADpAFgCwAMlBZoG/wdmCcoKRAypDQ8PbRDBEQQTOxRtFYcWlBePGIUZXhoiG88bcBz7HHIdzh0WHlMeZx51HmkeUx4WHs8dah0AHXwc3hs9G4saxRnyGBIYGBcQFv8U4RPAEoYRQBACD70NWwwHC6gJOwjWBloF7gOBAhABkf8b/qv8R/ve+Xf4Ife79W/0JfPZ8Z/wde9N7ijtE+wU6xvqM+lb6H7nw+YX5mrlxuQz5Mzje+Ma49fioeKD4nXiYeJy4pHitOL04j/jn+MN5IPkFOWs5U3mDefM55/ogOl36m7rdOyE7abuyu8D8Unyj/Pg9D/2qfcb+Yn6/vuK/Qj/lAAlAg==";
export class SoundManager {
    constructor(e){
        this._terminal = e;
    }
    playBellSound() {
        const e = window.AudioContext || window.webkitAudioContext;
        if (!this._audioContext && e) {
            this._audioContext = new e;
        }
        if (this._audioContext) {
            const t = this._audioContext.createBufferSource();
            const i = this._audioContext;
            this._audioContext.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._terminal.options.bellSound)), function(e) {
                t.buffer = e;
                t.connect(i.destination);
                t.start(0);
            });
        } else {
            console.warn("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version");
        }
    }
    _base64ToArrayBuffer(e) {
        const t = window.atob(e);
        for(var i = t.length, r = new Uint8Array(i), n = 0; n < i; n++){
            r[n] = t.charCodeAt(n);
        }
        return r.buffer;
    }
    _removeMimeType(e) {
        return e.split(",")[1];
    }
}
