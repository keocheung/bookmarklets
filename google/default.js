var uri = window.location.href;
var key = "lr";
var separator = "&";
var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
if (uri.match(re)) {
    window.location.href = uri.replace(re, "");
}
