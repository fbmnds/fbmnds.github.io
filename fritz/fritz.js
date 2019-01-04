var fun_p64 = 0;
var zen     = 0;
var store   = 0;
var eth     = 0;
var api_key = "";
var ip      = "";
var url0    = "";
function post_opts () {
    // Default options are marked with *
    return {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "text/plain"  // avoid preflight request
            //"Content-Type": "application/json",
            //"Content-Type": "application/x-www-form-urlencoded",
        },
        credentials : "omit",
        //redirect: "follow", // manual, *follow, error
        //referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({ "api_key": api_key }) // body data type must match "Content-Type" header
    }
};

function status () {
    fetch(url0 + "/status", post_opts()).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        fun_p64 = json.fun_p64;
        zen = json.zen;
        store = json.store;
        eth = json.eth;
        //swx_visibility("get-status");
        //swx_visibility("controls");
        swx_ctl_state();
    });
};
function swx_ctl_state () {
    fun_p64 ? document.getElementById('fun-p64').checked = true : document.getElementById('fun-p64').checked = false;
    zen     ? document.getElementById('zen').checked     = true : document.getElementById('zen').checked     = false;
    store   ? document.getElementById('store').checked   = true : document.getElementById('store').checked   = false;
    eth     ? document.getElementById('eth').checked     = true : document.getElementById('eth').checked     = false;
};
function swx_visibility (id = 'undefined') {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
};
function swx (x = 'undefined') {
    var url = url0;
    function swx_ctl (c = -1) {
        if (c == 0) { c = 1; url += "/on"; }
        else        { c = 0; url += "/off"; }
    };
    if (x == 'fun-p64')    { url += "/1"; swx_ctl(fun_p64); }
    else if (x == 'zen')   { url += "/3"; swx_ctl(zen); }
    else if (x == 'store') { url += "/2"; swx_ctl(store); }
    else if (x == 'eth')   { url += "/4"; swx_ctl(eth); }
    else { return -1; }

    fetch(url, post_opts()).then(function (response) {
        return {};
    }).then(function (_) {
        fetch(url0 + "/status", post_opts()).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            fun_p64 = json.fun_p64;
            zen = json.zen;
            store = json.store;
            eth = json.eth;
            swx_ctl_state();
        });
    });
};
function swx1 () { swx('fun-p64'); };
function swx2 () { swx('zen'); };
function swx3 () { swx('store'); };
function swx4 () { swx('eth'); };

function refresh () {
    ip = document.getElementById("ip").value;
    api_key = document.getElementById("api_key").value;
    url0    = "https://" + ip;
    status ();
};
