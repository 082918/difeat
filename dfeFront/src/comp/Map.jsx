import { useState, useEffect, createElement } from "react";
import "./Map.css";

function KakaoMap() {
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false;`;
    mapScript.async = true;

    mapScript.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    document.head.appendChild(mapScript);
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
}

export default KakaoMap;
