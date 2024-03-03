import Logo from "../components/elements/Logo"
import Footer from "../components/elements/Footer"
import Navbar from "../components/elements/Navbar"
import TemplateHome from "../components/templates/templateHome"
import PaymentDetail from "../components/fragments/Payment"
function Payment() {

  return (
    <TemplateHome>
        <Logo />
      <Navbar />
      <PaymentDetail />
    <Footer/>
    </TemplateHome>
  )
}

export default Payment
