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
    <YMaps>
      <Map
        className="bg-white"
        width="463px"
        height="304px"
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
