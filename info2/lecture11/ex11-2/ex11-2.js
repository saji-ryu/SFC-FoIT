function initMap() {
  // 地図の中心を決める
  var latlng = new google.maps.LatLng(35.388276, 139.427348);

  // 地図を表示するためのオプションを設定する
  var opt = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  // 地図を表示する。
  var map = new google.maps.Map(document.getElementById("map"), opt);

  // イベントリスナ（コールバック関数）
  function click_callback(e) {
    alert(e.latLng.toString());
  }

  // イベントリスナの設定
  map.addListener("click", click_callback);
}
