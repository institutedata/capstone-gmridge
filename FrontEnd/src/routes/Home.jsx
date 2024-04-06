import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Guide from '../components/Guide';

function Home () {
 return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://cardata.co/wp-content/uploads/2023/02/AdobeStock_496470382.jpeg"
    title="Welcome to DrivenLogic"
    text="A mileage tracker app that helps you keep track of your mileage and expenses. Download now and start tracking your mileage today!"
    buttonText="Download Now"
    url="https://play.google.com/store/search?q=mileage&c=apps"
    btnClass="show"
    />
    <Guide/>
    </>
 )
}

export default Home;