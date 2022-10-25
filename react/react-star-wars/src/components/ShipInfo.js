export default function ShipInfo({starship}) {
    return (
        <div className="ship-info">
            <span className="info-tab">Crew:</span> {starship.crew}<br/>
            <span className="info-tab">Manufacturer:</span> {starship.manufacturer}<br/>
            <span className="info-tab">Starship Class:</span> {starship.starship_class}
        </div>
    )
}