import './Map.css';

function Map() {
  return (
    <div className="map-page">
      <div className="map-container">
        <h1>Booth Map</h1>
        <p className="map-intro">Find where all the booths are located!</p>

        <div className="map-wrapper">
          {/* Map image not updated yet
          <img
            src="/oldMatsuriMap.png"
            alt="Matsuri Festival Map"
            className="map-image"
          />
          */}
          <div className="map-coming-soon">Coming soon!</div>
        </div>
      </div>
    </div>
  );
}

export default Map;
