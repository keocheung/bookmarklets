// Switch the result and page language to Japanese for Google
let url = new URL(window.location.href);
url.searchParams.set("lr", "lang_ja");
window.location.href = url.toString();