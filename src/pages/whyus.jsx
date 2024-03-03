import Logo from "../components/elements/Logo"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import WhyUsPage from "../components/fragments/WhyUsPage"
import TemplateHome from "../components/templates/templateHome"
function Whyus() {
  return (
    <TemplateHome>
        <Logo />
      <Navbar />
    <WhyUsPage />
    <Footer/>
    </TemplateHome>
  )
}

export default Whyus
