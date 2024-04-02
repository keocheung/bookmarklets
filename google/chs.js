// Switch the result and page language to Chinese Simplified for Google
let url = new URL(window.location.href);
url.searchParams.set("lr", "lang_zh-CN");
window.location.href = url.toString();