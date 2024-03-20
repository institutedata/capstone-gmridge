import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Home () {
 return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://cardata.co/wp-content/uploads/2023/02/AdobeStock_496470382.jpeg"
    title="Welcome to Mileage Tracker"
    text="Keep track of your mileage and expenses with our easy to use app"
    buttonText="Download Now"
    url="https://play.google.com/store/search?q=mileage&c=apps"
    btnClass="show"
    />
    </>
 )
}

export default Home;