import WhyUs from "./Components/WhyUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Offer from "./Components/Offer";
import whatsapp from "./assets/whatsapp.svg"
import { BrowserView, MobileView } from 'react-device-detect';


function App() {
  const nothing = () => { }
  return (
    <div>
      <Banner />
      <WhyUs />
      <Offer />
      <ContactUs />
      <Footer />

      <div className="fixed bottom-12 right-12 hover:bottom-11 hover:right-11 w-10 h-10 hover:w-12 hover:h-12">
        {/* <form action="https://web.whatsapp.com/send" target="_blank"> */}

        <BrowserView>
          <form action="https://web.whatsapp.com/send" target="_blank" data-channel="Whatsapp" >
            <input className="hidden" name="text" type="text" onChange={nothing} value="Hi, I need Support Regarding"></input>
            <input type="hidden" name="phone" onChange={nothing} value="447375863608" />
            <button type="submit" ><img src={whatsapp} /></button>
          </form>
        </BrowserView>
        <MobileView>
          <form action="https://wa.me/447375863608" target="_blank" data-channel="Whatsapp" >
            <input className="hidden" name="text" type="text" onChange={nothing} value="Hi, I need Support Regarding"></input>
            <button type="submit" ><img src={whatsapp} /></button>
          </form>
        </MobileView>
      </div>
    </div>
  );
}

export default App;
