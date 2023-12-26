'use client'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";

interface MapProps {
    coords: {
        latitude: number;
        longitude: number;
    };
}

export default function Map({ coords }: MapProps) {
    const { latitude, longitude } = coords;

    function MapView() {
        let map = useMap();
        map.setView([latitude, longitude], map.getZoom());
        return null;
    }
    
    const customIcon = new L.Icon({
      iconUrl: "/map.png",
      iconRetinaUrl: "/map.png",
      iconSize: new L.Point(60, 75),
    });
  

  return (
    <MapContainer className="w-full h-96" center={[latitude, longitude]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>
          <div>
            <h1>Solar01bi</h1>
            <p>Tension : 22,50</p>
            <p>Courant : 3&apos;80</p>
            <p>Production d&apos;energie : 65,&apos;75</p>
            <p>Irradiation Solaire 800&apos;25</p>
            <p>Etat des Batteries :Ok</p>
            <p>Gestion de L&apos;Energie :Optimale</p>
            <Link href="/statistics">Voir le graphique </Link>
          </div>

        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}
