// Switch the result and page language to Chinese Traditional for Google
let url = new URL(window.location.href);
url.searchParams.set("lr", "lang_zh-TW");
window.location.href = url.toString();