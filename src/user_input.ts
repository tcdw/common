const unicodeNBMP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

export function checkEmpty(e: string) {
    return (e.trim() === "") || e === null || typeof e === "undefined";
}

export function checkName(e: string) {
    return checkEmpty(e);
}

export function checkEmail(e: string) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.trim());
}

export function checkWebsite(e: string) {
    return checkEmpty(e);
}

export function checkContentLength(e: string) {
    return e.trim().replace(unicodeNBMP, "_").length <= 1000;
}

export function checkContent(e: string) {
    if (checkEmpty(e)) {
        return false;
    }
    return checkContentLength(e);
}
