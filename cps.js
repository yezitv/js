function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}
var ArrList1=[
//         "https://img.picgo.net/2024/11/20/1f178a82b9014a90c130f498ef773912b31bee8d4aa2024cb5a7afda.md.gif",
// "https://img.picgo.net/2024/11/20/dcc451da81cb39db9cd0387396160924ab18308618694e43e5a93c79.md.gif",
// "https://img.picgo.net/2024/11/20/download-12bfd2263721dfc19.md.gif",
// "https://img.picgo.net/2024/11/20/download-2f5278fcf9e56ce5c.md.gif",
// "https://img.picgo.net/2024/11/20/download-35f7fdb8aa6fc984c.md.gif",
// "https://img.picgo.net/2024/11/20/download-428f23e3e9fdbddb9.md.gif",
// "https://img.picgo.net/2024/11/20/download-53b5d9e3d5b031cb5.md.gif",
// "https://img.picgo.net/2024/11/20/download-61966254058ff0c5d.md.gif",
// "https://img.picgo.net/2024/11/20/download-7682e41c07a288599.md.gif",
// "https://img.picgo.net/2024/11/20/download-86113ce2aab74b3c3.md.gif",
// "https://img.picgo.net/2024/11/20/download-92dc4375e8149682b.md.gif",
// "https://img.picgo.net/2024/11/20/download-10f2ab275146d26f9b.md.gif",
// "https://img.picgo.net/2024/11/20/download-1128930daa0367a2f8.md.gif",
// "https://img.picgo.net/2024/11/20/download-124ddcad2d5cd40b21.md.gif",
// "https://img.picgo.net/2024/11/20/download-1305acbe0e167263d4.md.gif",
// "https://img.picgo.net/2024/11/20/download-147c34a2b495506436.md.gif",
// "https://img.picgo.net/2024/11/20/download-158b06f8b85316281c.md.gif",
// "https://img.picgo.net/2024/11/20/download-166b08ee93fddfaff9.md.gif",
// "https://img.picgo.net/2024/11/20/download-175c32a4b449c16c93.md.gif",
// "https://img.picgo.net/2024/11/20/download-187ca679b7e84418d8.md.gif",
// "https://img.picgo.net/2024/11/20/downloadbb6270f47a534a83.md.gif",
// "https://img.picgo.net/2024/11/20/_20241016124827ba00eed8b972a842.md.gif",
//         "https://img.picgo.net/2024/08/17/ad6e955077f4eeb0b37.gif",
//         "https://img.picgo.net/2024/08/17/ad7acc922b9e7b31f31.gif",
   
//         "https://img.picgo.net/2024/08/17/ad25ceacc47967c35db.gif",
//         "https://img.picgo.net/2024/08/17/ad373732bee4a79e7d0.gif",
//         "https://img.picgo.net/2024/08/17/ad4199f185b94dc35d3.gif",
//         "https://img.picgo.net/2024/08/17/ad5774884e47420c028.gif",

        "https://p1.meituan.net/dpplatform/9214a4f223739c8368a43c146d81bbdd101745.gif",
        
  
   
        "https://p26.toutiaoimg.com/origin/pgc-image/997be1e2e2ae4042b75edf2545a7f884",
        // "https://files.catbox.moe/zirc04.gif",
        // "https://files.catbox.moe/7w51yj.gif",
        // "https://files.catbox.moe/mac8ea.gif",
        // "https://files.catbox.moe/mac8ea.gif",
        // "https://files.catbox.moe/6118tj.gif",
        // "https://files.catbox.moe/1v7pnu.gif",
        "https://cdn.affise.com/affise-media-service-prod/offers/3675/45/300X100_lang_zh_ladyyuan_%20doggie.gif.gif",
        "https://cdn.affise.com/affise-media-service-prod/offers/3675/45/300X100_lang_zh_lierbaby_swtv1.gif.gif",
        "https://cdn.affise.com/affise-media-service-prod/offers/3675/45/300X100_lang_zh_princessdolly_3p.gif.gif"
];

var ArrList2=[
    // "https://go5fxhaw3vi.ixkfzkej.cn/51x0904/?code=888133",
     "https://aopy-c.alsdbjsh.com/articles/1689?page=d3.html&dl=h5&ii=YSJGXP&hmsr=YSJGXP",
    // "https://www.mm21.net/?qd=yhcxtuav",
	// "https://dd.esud56.com/download3/3892_0.html",
	// "https://dd.esud56.com/download2/3892_0.html",
	"https://dd.esud56.com/download4/3892_0.html",
	"https://dd.esud56.com/download/3892_0.html",
  

];
var close=["/upload/pds/close.jpeg"];

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("android") >= 0 || ua.indexOf("iphone") >= 0 || ua.indexOf("mobile") >= 0 || ua.indexOf("ios") >= 0) {
    $(document).ready(function() {
        var content = "<style>#pds li { width: 100% !important; display: inline-block; } #pds li a { text-decoration: none !important; } #wz { position: relative; bottom: 0px; color: #fff; font-size: 10px; }</style><div id='pds' style='width: 100%; position: fixed; z-index: 2147483646666666; bottom: 0px; left: 0px; text-align: center; background-color: rgba(0, 0, 0, 0.639216);'><span style='position: fixed; right: 0px;'><img class='closeads' width='30px' height='30px' src='" + getArrayItems(close, 1)[0] + "' alt='' /></span><li><a target='_blank' href='" + getArrayItems(ArrList2, 1)[0] + "'><img src='" + getArrayItems(ArrList1, 1)[0] + "' border='0' width='' height='120px'></a></li></div>";

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
