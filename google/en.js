// Switch the result and page language to English for Google
let url = new URL(window.location.href);
url.searchParams.set("lr", "lang_en");
window.location.href = url.toString();