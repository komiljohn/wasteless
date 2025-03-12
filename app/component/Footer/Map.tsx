import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import React, { useState } from "react";

export default function YandexMap() {
  const [coords] = useState([41.324742, 69.289054]);

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY,
      }}
    >
      <Map
        className="bg-white"
        style={{ width: "463px", height: "304px", backgroundColor: "#fafafa" }}
        state={{ zoom: 14, center: coords }}
      >
        <Placemark geometry={coords} />
        <TypeSelector />
        <ZoomControl />
        <FullscreenControl />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
}
