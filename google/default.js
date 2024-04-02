let url = new URL(window.location.href);
url.searchParams.delete("lr");
window.location.href = url.toString();