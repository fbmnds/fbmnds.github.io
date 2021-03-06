var fun_p64 = 0;
var zen     = 0;
var store   = 0;
var eth     = 0;
var api_key = "";
var ip      = "";
var url0    = "";
var ctls    = [ "#fun-p64", "#zen", "#store", "#eth" ];
var l_btn = `
<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
Loading
`;
var r_btn = "Retry";
var btn   = "Submit";
function toggle_btn (x = 'undefined') { $('#refresh-btn').html(x); };
function post_opts () {
    // Default options are marked with *
    return {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
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
        enable_ctls();
        toggle_btn (btn);
    }).catch(function (_) {
        fun_p64 = 0;
        zen = 0;
        store = 0;
        eth = 0;
        disable_ctls();
        toggle_btn (r_btn);
    });
};
function enable_ctls () {
    //for (x in ctls) { $(x).prop('disabled',false); };
    $('#fun-p64').prop('disabled',false);
    $('#zen').prop('disabled',false);
    $('#store').prop('disabled',false);
    $('#eth').prop('disabled',false);
};
function disable_ctls () {
    //for (x in ctls) { $(x).prop('disabled',true); };
    $('#fun-p64').prop('disabled',true);
    $('#zen').prop('disabled',true);
    $('#store').prop('disabled',true);
    $('#eth').prop('disabled',true);
};
function swx_ctl_state () {
    fun_p64 ? $('#fun-p64').prop('checked',true) : $('#fun-p64').prop('checked',false);
    zen     ? $('#zen').prop('checked',true)     : $('#zen').prop('checked',false);
    store   ? $('#store').prop('checked',true)   : $('#store').prop('checked',false);
    eth     ? $('#eth').prop('checked',true)     : $('#eth').prop('checked',false);
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
    disable_ctls();
    toggle_btn (l_btn);
    if (x == 'fun-p64')    { url += "/1"; swx_ctl(fun_p64); }
    else if (x == 'zen')   { url += "/3"; swx_ctl(zen); }
    else if (x == 'store') { url += "/2"; swx_ctl(store); }
    else if (x == 'eth')   { url += "/4"; swx_ctl(eth); }
    else { return -1; };
    fetch(url, post_opts()).then(function (response) {
        return {};
    }).then(function (_) {
        status();
    }).catch (function (_) {
        toggle_btn (r_btn);
    });
};
function swx1 () { swx('fun-p64'); };
function swx2 () { swx('zen'); };
function swx3 () { swx('store'); };
function swx4 () { swx('eth'); };
function refresh () {
    ip      = document.getElementById("ip").value;
    api_key = document.getElementById("api_key").value;
    url0    = "https://" + ip;
    disable_ctls();
    toggle_btn (l_btn);
    status();
};
