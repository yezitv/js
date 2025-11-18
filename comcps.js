


var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("android") >= 0 || ua.indexOf("iphone") >= 0 || ua.indexOf("mobile") >= 0 || ua.indexOf("ios") >= 0) {
    $(document).ready(function() {
        var content = "<style>#pds li { width: 100% !important; display: inline-block; } #pds li a { text-decoration: none !important; } #wz { position: relative; bottom: 0px; color: #fff; font-size: 10px; }</style><div id='pds' style='width: 100%; position: fixed; z-index: 2147483646666666; bottom: 0px; left: 0px; text-align: center; background-color: rgba(0, 0, 0, 0.639216);'><span style='position: fixed; right: 0px;'><img class='closeads' width='30px' height='30px' src='" + getArrayItems(close, 1)[0] + "' alt='' /></span><li><a target='_blank' href='" + getArrayItems(urls, 1)[0] + "'><img src='" + getArrayItems(imgs, 1)[0] + "' border='0' width='' height='120px'></a></li></div>";

        var adsdiv = document.createElement("div");
        adsdiv.innerHTML = content;
        if (navigator.userAgent.indexOf("UCBrowser") > -1){
            setTimeout(function() {
                document.body.appendChild(adsdiv);
            }, 3000);
        } else {
            document.body.appendChild(adsdiv);
        };
        $(".closeads").click(function(){
            $('#pds').hide();
        });
    });
}
