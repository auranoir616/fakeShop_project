import Logo from "../components/elements/Logo"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import TemplateHome from "../components/templates/templateHome"
import ContactUsFrag from "../components/fragments/ContactUsPage"
function ContactUs() {
  return (
    <TemplateHome>
        <Logo />
      <Navbar />
    <ContactUsFrag/>
    <Footer/>
    </TemplateHome>
  )
}

export default ContactUs
