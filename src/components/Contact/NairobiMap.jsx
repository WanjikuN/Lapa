import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Custom component to fly to Nairobi
const FlyToLocation = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);

  return null;
};

const NairobiMap = () => {
  // Coordinates for each location
  const nairobiPosition = [-1.286389, 36.817223];
    const newYorkPosition = [40.712776, -74.005974];

  const initialCenter = [0, 0];
  const initialZoom = 2;

  // Google and OpenStreetMap layers
  const googleSat = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      maxNativeZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  const googleTerrain = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      maxNativeZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  const googleStreets = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">L.A.P.A</a>',
    }
  );

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      style={{ height: "100%", width: "100%" }}
    >
      {/* LayersControl to switch between layers */}
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Google Terrain">
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
            maxZoom={20}
            maxNativeZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google Streets">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google Satellite">
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            maxNativeZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Fly to Nairobi */}
      {/* <FlyToLocation center={nairobiPosition} zoom={12} /> */}

      {/* Markers for each location */}
      <Marker position={nairobiPosition}>
        <Popup>Nairobi</Popup>
      </Marker>
      <Marker position={newYorkPosition}>
        <Popup>New York</Popup>
      </Marker>
     
    </MapContainer>
  );
};

export default NairobiMap;
