function initMap() {
  // ラベルに使うカウンターの設定
  var counter = 1;

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
    // マーカー追加
    var marker = new google.maps.Marker({
      position: e.latLng,
      label: String(counter),
      map: map,
    });
    // カウンターを一増やす
    counter++;
  }

  // イベントリスナの設定
  map.addListener("click", click_callback);
}
