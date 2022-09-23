'use strict'; // https://www.w3schools.com/js/js_strict.asp

let location_hostname = location.hostname;
let host = '';
if (location_hostname === 'localhost') {
host = 'http://' + location_hostname + ':' + 3000;
}
if (location.hostname === 'allworldtrade.com' || location.hostname.endsWith('.allworldtrade.com')) {
host = 'https://' + location_hostname;
}