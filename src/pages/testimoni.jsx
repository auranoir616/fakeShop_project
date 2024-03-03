import Logo from "../components/elements/Logo"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import TemplateHome from "../components/templates/templateHome"
import TestimoniItem from "../components/elements/TestimoniItem"
function Testimoni() {
  return (
    <TemplateHome>
        <Logo />
      <Navbar />
      <TestimoniItem />
    <Footer/>
    </TemplateHome>
  )
}

export default Testimoni
