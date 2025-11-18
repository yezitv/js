    function get_random (weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	}
    function random_fixed(cls,items){
      
        
        var dv=document.getElementsByClassName(cls)[0];
        var rand =get_random(rand_weight);
        var target=items[rand];
        var href=target[1]
        var a = document.createElement('a');
        a.target='_blank';
        a.href = href;
        
        var src=target[0]
        var img = document.createElement('img');
        img.src = src;
        img.style="width: 92%";
        
        a.appendChild(img);
        dv.appendChild(a);
    }

    const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        if (screenWidth == 1366 && screenHeight==1366) {
            document.cookie = "block_resolution=true;path=/;max-age=11186400"; // 
        }

      
        document.cookie = "visited_today=true;path=/;max-age=86400";

