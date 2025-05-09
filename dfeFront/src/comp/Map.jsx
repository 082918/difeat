import { useState, useEffect } from "react";

function KakaoMap() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false`;
    kakaoMapScript.async = true;

    kakaoMapScript.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        new window.kakao.maps.Map(container, options); // 여기 반드시 new!
      });
    };

    document.head.appendChild(kakaoMapScript);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "400px",
        height: "400px",
      }}
    />
  );
}

export default KakaoMap;
