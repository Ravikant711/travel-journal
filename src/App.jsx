import Navbar from "./travel-journal/Navbar"
import TravelCard from "./travel-journal/TravelCard"
import data from "./Data"


function App() {
 
  const travelCard = data.map((item, index) => {
    return (
      <TravelCard
        key={index}
        item = {item}
      />
    )
  }
  )

  return (
    <>
      <Navbar />
      <div className="travel-place-container">
        {travelCard}
      </div>
    </>
  )
}

export default App
