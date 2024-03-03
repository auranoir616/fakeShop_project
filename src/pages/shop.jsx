import Logo from "../components/elements/Logo"
import CardProductsShop from "../components/fragments/CardProductsShop"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import TemplateHome from "../components/templates/templateHome"

function Shop() {
  return (
    <TemplateHome>
        <Logo />
      <Navbar />
      
      {/* <p>{user}</p> */}
        <div className="w-screen">
    <CardProductsShop />
        </div>
    <Footer/>
    </TemplateHome>
  )
}

export default Shop