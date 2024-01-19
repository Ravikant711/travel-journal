import locationLogo from "../assets/location-logo.png"

function TravelCard(props) {

  // console.log(props)
  return (
      <div className="container">
        <div className="place-image">
          <img src={props.item.imageUrl} alt="mount-fuji" />
        </div>
        <div className="travel-info">
          <div className="place-location">
            <img src={locationLogo} alt="" />
            <p className="title">{props.item.title}</p>
            <a className="url-link" href={props.item.googleMapUrl}>View on Google Maps</a>
          </div>
          <div>
            <h2 className="place-name">{props.item.location}</h2>
          </div>
          <div>
            <p className="travel-date">{props.item.startDate} - {props.item.endDate}</p>
          </div>
          <div>
            <p className="travel-description">
              {props.item.description}
            </p>
          </div>
        </div>
      </div>
  )
}

export default TravelCard