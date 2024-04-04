import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JourneyNav from "../components/Journey-Nav";

function Mileage () {
    return (
       <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
    title="Track Your Mileage and Expenses"
    text="Manually import journeys or use GPS tracking to automatically log your trips."
    buttonText="Download Now"
    url="https://play.google.com/store/search?q=mileage&c=apps"
    btnClass="show"
    />
    <JourneyNav/>
       </>
    )
   }
   
   export default Mileage;