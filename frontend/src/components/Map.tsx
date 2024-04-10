

interface MapProps {
    lat: string;
    lon: string;
    title: string;
}

const Map: React.FC<MapProps> = ({ lat, lon, title }) => {
    return (
        <>
            <iframe
                id="mapIframe"
                src={"/map/map.html" + `?lat=${lat}&lon=${lon}&title=${title}`}
                style={{ height: '350px', width: '350px', border: '2px solid black', marginTop: '20px', marginBottom: '90px' }}
                title="Map"
            ></iframe>
        </>
    );
}

export default Map;
