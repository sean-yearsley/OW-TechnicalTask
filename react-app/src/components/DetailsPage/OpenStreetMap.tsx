import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface OpenStreetMapProps {
    x: number;
    y: number;
    propertyAddress: string;
}

function OpenStreetMap({
    x,
    y,
    propertyAddress
}: OpenStreetMapProps) {
    return (
        <>
            <MapContainer center={[y, x]} zoom={17} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[y, x]}>
                    <Popup>
                        {propertyAddress}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default OpenStreetMap;
