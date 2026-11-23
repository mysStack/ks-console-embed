export default function(e) {
    let t = "";
    t += e.protocol || "";
    t += e.slashes ? "//" : "";
    t += e.auth ? `${e.auth}@` : "";
    if (e.hostname && e.hostname.indexOf(":") !== -1) {
        t += `[${e.hostname}]`;
    } else {
        t += e.hostname || "";
    }
    t += e.port ? `:${e.port}` : "";
    t += e.pathname || "";
    return (t += e.search || "") + (e.hash || "");
};
