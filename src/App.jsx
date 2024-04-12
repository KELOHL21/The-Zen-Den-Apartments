import AboutSection from "./components/AboutSection"
import GallerySection from "./components/GallerySection"
import Header from "./components/Header"
import HouseSection from "./components/HouseSection"
import LocationSection from "./components/Location"
import Navbar from "./components/Navbar"
import PartnerSection from "./components/PartnersSection"


function App() {
 

  return (
    <div className="flex flex-col justify-center m-auto appBody">
        <Navbar />
        <Header />
        <div className="mx-2 -mt-4 bg-white rounded-lg md:mx-6">
          <AboutSection />
          <GallerySection />
          <HouseSection />
          <PartnerSection />
          <LocationSection />
        </div>
        
    </div>
  )
}

export default App
