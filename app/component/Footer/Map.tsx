import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import React from "react";

export default function YandexMap() {
  return (
    <YMaps>
      <Map
        className="bg-white"
        width="463px"
        height="304px"
        state={{ zoom: 14, center: [41.324742, 69.289054] }}
      >
        <Placemark
          geometry={[41.324742, 69.289054]}
          options={{ draggable: true }}
        />
        <TypeSelector />
        <ZoomControl />
        <FullscreenControl />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
}
