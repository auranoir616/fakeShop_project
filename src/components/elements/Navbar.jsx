import Button from "./Button"
import CartButton from "./CartButton"
import { useCartContext } from "../store/CartStore"
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';
// import { useAuthLogin } from "../getUserHooks";
const Navbar = () =>{
        // const user = useAuthLogin()
        const {cartItems} = useCartContext()
        const totalQty = cartItems.reduce((a,b)=>{
                return a + b.qty
        },0)
    return(

        <div className="h-auto bg-stone-50 w-full flex justify-center p-2 rounded-md" >
                <Button type="button" color="bg-stone-50" link="/">            
                <Icon name='home' />Home
                </Button>
                <Button type="button" color="bg-stone-50" link="/shop">
                <Icon name='list' />      
                Shop
                </Button>
                <Button type="button" color="bg-stone-50" link={"/whyus"}>
                <Icon name='users' />      
                Why Us</Button>
                <Button type="button" color="bg-stone-50" link={"/testimoni"}>
                <Icon name='mail' />      
                Testimonial</Button>
                <Button type="button" color="bg-stone-50" link={"/contactus"}>
                <Icon name='phone' />      
                Contact Us</Button>
                <a href="/testimoni">teslink</a>
                <CartButton data={totalQty}/>
        
        </div>
       
        )
}
Navbar.propTypes={
        name: PropTypes.string
    }
    

    export default Navbar