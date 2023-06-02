// Switch the result and page language to English for Google
var uri = window.location.href;
var key = "lr";
var value = "lang_en";
var separator = "&";
var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + "=" + value + '$2');
} else {
    uri = uri + separator + key + "=" + value;
}
key = "hl";
value = "en";
separator = "&";
re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + "=" + value + '$2');
} else {
    uri = uri + separator + key + "=" + value;
}
window.location.href = uri;
