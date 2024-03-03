import Logo from "../components/elements/Logo"
import CardProductsHome from "../components/fragments/CardProductsHome"
import Carousel from "../components/elements/Carousel"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import WhyUs from "../components/elements/WhyUs"
import TemplateHome from "../components/templates/templateHome"

function Home() {

  return (
    <TemplateHome>
        <Logo />
      <Navbar />
    <Carousel />
    <CardProductsHome />
    <WhyUs/>
    <Footer/>
    </TemplateHome>
  )
}

export default Home
