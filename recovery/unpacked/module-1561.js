const r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>";
const o = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
export const HTML_TAG_RE = new RegExp(`^(?:${r}|${o}|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`);
export const HTML_OPEN_CLOSE_TAG_RE = new RegExp(`^(?:${r}|${o})`);
