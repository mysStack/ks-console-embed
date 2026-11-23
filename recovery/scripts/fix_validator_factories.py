#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")


def find_function_body(text: str, idx: int) -> int:
    i = idx + len("(function")
    while i < len(text) and text[i].isspace():
        i += 1
    if i < len(text) and (text[i].isalpha() or text[i] in "_$"):
        while i < len(text) and (text[i].isalnum() or text[i] in "_$"):
            i += 1
        while i < len(text) and text[i].isspace():
            i += 1
    if i >= len(text) or text[i] != "(":
        return -1
    paren = 0
    brace = 0
    while i < len(text):
        char = text[i]
        if char == "{":
            brace += 1
        elif char == "}":
            brace -= 1
        elif char == "(" and brace == 0:
            paren += 1
        elif char == ")" and brace == 0:
            paren -= 1
            if paren == 0:
                i += 1
                break
        i += 1
    else:
        return -1
    while i < len(text) and text[i].isspace():
        i += 1
    if i < len(text) and text[i] == "{":
        return i
    return -1


def convert_factory(text: str) -> str:
    if "export default exports.default" not in text:
        return text
    idx = text.find("(function")
    if idx < 0:
        return text
    brace = find_function_body(text, idx)
    if brace < 0:
        return text
    depth = 0
    i = brace
    while i < len(text):
        char = text[i]
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                if text[i + 1 : i + 2] == "(":
                    return text
                end = i + 1
                if end < len(text) and text[end] == ")":
                    end += 1
                if end < len(text) and text[end] == ";":
                    end += 1
                rewritten = (
                    text[:idx]
                    + "export default function"
                    + text[idx + len("(function") : i + 1]
                    + ";"
                    + text[end:]
                )
                rewritten = rewritten.replace("export default exports.default;", "")
                rewritten = rewritten.replace("export default exports.default", "")
                rewritten = rewritten.replace("\nexports.default;", "")
                rewritten = rewritten.replace("exports.default;", "")
                return rewritten
        i += 1
    return text


def main() -> None:
    changed = []
    for path in sorted(UNPACKED.glob("*.js")):
        original = path.read_text(encoding="utf-8", errors="replace")
        updated = convert_factory(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed.append(path.name)
    print({"changed": len(changed), "files": changed[:20]})


if __name__ == "__main__":
    main()
