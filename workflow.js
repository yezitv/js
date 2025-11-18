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
var mjgs=[
    //  "https://go5fxhaw3vi.ixkfzkej.cn/51x0904/?code=888133",
	 "https://aopy-c.alsdbjsh.com/articles/1689?page=d3.html&dl=h5&ii=YSJGXP&hmsr=YSJGXP",
    // "https://www.mm21.net/?qd=yhcxtuav",
// 	"https://dd.esud56.com/download3/3892_0.html",
	"https://dd.esud56.com/download2/3892_0.html",
	"https://dd.esud56.com/download4/3892_0.html",
// 	"https://dd.esud56.com/download/3892_0.html",
//   "https://dd.esud56.com/download4/3892_0.html",
// 	"https://dd.esud56.com/download/3892_0.html",
  

];
var close=["/upload/pds/close.jpeg"];
var imgs=[
// 	"https://static.wixstatic.com/media/4d9c96_aa2ae533f5524fb78dcd05b9c2f5c1ea~mv2.gif",
// 		"https://img.picgo.net/2024/11/20/1f178a82b9014a90c130f498ef773912b31bee8d4aa2024cb5a7afda.md.gif",
'https://origin.picgo.net/2025/08/09/1f178a82b9014a90c130f498ef773912b31bee8d4aa2024cb5a7afdad4124ec83b8d812c.gif',
// "https://img.picgo.net/2024/11/20/dcc451da81cb39db9cd0387396160924ab18308618694e43e5a93c79.md.gif",
// "https://img.picgo.net/2024/11/20/download-12bfd2263721dfc19.md.gif",
// "https://img.picgo.net/2024/11/20/download-2f5278fcf9e56ce5c.md.gif",
// "https://img.picgo.net/2024/11/20/download-35f7fdb8aa6fc984c.md.gif",
"https://img.picgo.net/2024/11/20/download-428f23e3e9fdbddb9.md.gif",
"https://origin.picgo.net/2025/08/09/1f178a82b9014a90c130f498ef773912b31bee8d4aa2024cb5a7afdad536b5f59c8c7654.gif",
"https://origin.picgo.net/2025/08/09/download-10f2ab275146d26f9bf3375b90c36f1a92.gif",
"https://origin.picgo.net/2025/08/09/download-92dc4375e8149682ba9c1212b8da9566d.gif",
"https://origin.picgo.net/2025/08/09/download-147c34a2b495506436e60409e7cdc91316.gif",
"https://origin.picgo.net/2025/08/09/download-166b08ee93fddfaff9f0b8aef55e882704.gif",
"https://origin.picgo.net/2025/08/09/download-175c32a4b449c16c930122687cf07e5347.gif",
"https://origin.picgo.net/2025/08/09/download-187ca679b7e84418d8e36a7463bfa8ec5b.gif",
"https://origin.picgo.net/2025/08/09/download-428f23e3e9fdbddb93981f5f58e75b763.gif",
"https://origin.picgo.net/2025/08/09/download-86113ce2aab74b3c381049524e3287018.gif",
"https://origin.picgo.net/2025/08/09/download-61966254058ff0c5db64e970a194ae02f.gif",
// "https://img.picgo.net/2024/11/20/downloadbb6270f47a534a83.md.gif",
// "https://img.picgo.net/2024/11/20/_20241016124827ba00eed8b972a842.md.gif",
        // "https://img.picgo.net/2024/08/17/ad6e955077f4eeb0b37.gif",
        // "https://img.picgo.net/2024/08/17/ad7acc922b9e7b31f31.gif",

        // "https://img.picgo.net/2024/08/17/ad25ceacc47967c35db.gif",
        // "https://img.picgo.net/2024/08/17/ad373732bee4a79e7d0.gif",
        // "https://img.picgo.net/2024/08/17/ad4199f185b94dc35d3.gif",
        // "https://img.picgo.net/2024/08/17/ad5774884e47420c028.gif",
     
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

var urls=[


 

];

var pds_codes= ['/cps.js?','/comcps.js?']
var rand_weight= [1,1,1,1,1,1];
var video_right_item = [
  ["https://img.picgo.net/2024/11/20/_2024101612482771286274b59d2423.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',],
["https://img.picgo.net/2024/11/20/_20241120130522eb84c748868989b5.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',],
["https://img.picgo.net/2024/11/20/_2024112013053005767f47b669ba32.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',],
["https://img.picgo.net/2024/11/20/_20241120130537b487dfced13f8a1f.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',],
["https://img.picgo.net/2024/11/20/_202411201305442907cb8c7e5fd2e5.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',],
["https://img.picgo.net/2024/11/20/_2024112013055289ffa60275b1bbb6.md.jpg",'https://hk.sxzb888.cn/s/MojEEdWK',]
    
    ];
var	pds_weight=[15,3];
function get_random (weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	}
function loop_pds(){
	var rand = get_random(pds_weight);
	var src=pds_codes[rand];
	var script = document.createElement('script');
	script.src = src + Date.now();  
	document.body.appendChild(script);
}



// function random_fixed(cls,items){
// 	var pds_weight= [1,1];
	
// 	var dv=document.getElementsByClassName(cls)[0];
// 	var rand =get_random(pds_weight);
// 	var target=items[rand];
// 	var href=target[1]
// 	var a = document.createElement('a');
// 	a.target='_blank';
// 	a.href = href;
	
// 	var src=target[0]
// 	var img = document.createElement('img');
// 	img.src = src; 
	
// 	a.appendChild(img);
// 	dv.appendChild(a);
// }

function pc_wad(){
    if (ua.indexOf("android") >= 0 || ua.indexOf("iphone") >= 0 || ua.indexOf("mobile") >= 0 || ua.indexOf("ios") >= 0){
        
    }else{
    var uri='https://.com';
    var pic='https://img.picgo.net/2024/09/14/240422011236a86b1a905624.png';
    if (getCookie('bottomright')){
        
    }else{
         var content = "<style>#bottomright li {   display: inline-block; } #bottomright li a { text-decoration: none !important; } #wz { position: relative; bottom: 0px; color: #fff; font-size: 10px; }</style><div id='bottomright' style='  position: fixed; z-index: 2147483646666666; bottom: 30px; right: 10px; text-align: center; background-color: rgba(0, 0, 0, 0.639216);'><span style='position: fixed; right: 0px;bottom:40'><img class='closepds' width='30px' height='30px' src='/upload/pds/close.jpeg' alt='' /></span><li><a target='_blank' href='" + uri + "'><img src='" + pic + "' border='0' width='' height='120px'></a></li></div>";

        var pdsdiv = document.createElement("div");
        pdsdiv.innerHTML = content;
        document.body.appendChild(pdsdiv);
        $(".closepds").click(function(){
            setCookie('bottomright',true,1);
            $('#bottomright').hide();
        });
        
    }
    }
}
function isAndroidOrIOS() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android/.test(userAgent) || /iphone/.test(userAgent);
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function isAndroid() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android/.test(userAgent)
}

function isIos() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /iphone/.test(userAgent);
}

function rondom_go() {

	
	urls = mjgs.concat(urls);
	console.log(urls);
	var weight = urls.map((v) => {
		if (v.indexOf('tuqzkkjy') > 0) {
			return 0
		}
		return 1
	});
	var url = urls[get_random(weight)];

	
	return url;
}

function hw(){
     var hws = document.getElementsByClassName('video_right_hw');

	 for (var hw of hws) {
        var a = hw.querySelector('a');
        var img = hw.querySelector('img');

       
        a.href = getArrayItems(mjgs, 1);

      
        setTimeout((function(currentImg) {
            return function() {
                currentImg.src = getArrayItems(imgs, 1); 
            };
        })(img), 1000); 
    }
		
}
$(document).ready(function(){


	function ishwb() {
		const userAgent = navigator.userAgent;
		return /Huawei|HUAWEI|HuaweiBrowser|Baidu|baidu|honor/.test(userAgent);
	}


	// Check if the current OS is Android or iOS
	if (isAndroidOrIOS()) {

		var ishw=ishwb();
		if(ishw==true){
			hw();
		}else{
			$('.video_right_hw').hide();
			loop_pds();
		}
		$('.wap_pd').css('display', 'block');
	} else {
		// OS is not Android or iOS, hide the image

		if (document.getElementsByClassName('video_right')[0].childElementCount<1){
			// random_fixed('video_right',video_right_item);
		}
		$('.wap_pd').css('display', 'none');

	};
	$(".closepds").click(function(){

		$('.video_right_hw').hide();
	});
});


// var randoms = {
 
// 	pds_codes: ['/cps.js?','/comcps.js?'],

// 	pds_weight: [5,10],
// 	get_random: function(weight) {
// 		var s = eval(weight.join('+'));
// 		var r = Math.floor(Math.random() * s);
// 		var w = 0;
// 		var n = weight.length - 1;
// 		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
// 		return n;
// 	},
// 	init: function() {
// 		var rand = randoms.get_random(randoms.pds_weight);
//         var src=randoms.pds_codes[rand];
// 		var script = document.createElement('script');
//         script.src = src + Date.now();  
//         document.body.appendChild(script);
// 	}

// }
// randoms.init();

window.playerConfig = {
    adImage: getArrayItems(imgs, 1)[0],
    adLink: getArrayItems(mjgs, 1)[0],
    adDuration: 15
  };