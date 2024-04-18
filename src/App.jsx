
import Navbar from './Components/Navbar'
import WhyUs from './Components/WhyUs';
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Categories from './Components/Categories';


function App() {
  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <Banner />
        <WhyUs />
        <Categories />
        <ContactUs />
        <Footer />

      </div>
    </div>
  );
}


export default App;
