import ComponentsForm from "./ComponentForm"
import { useState } from "react";
import { FormField, Radio } from 'semantic-ui-react';
import ButtonSubmit from "./ButtonSubmit";
import { UseStateContext } from "../store/ContextProvider";
import { useCartContext } from "../store/CartStore";
const PaymentInfo=()=>{
    const [value, setValue] = useState();
    const handleChange = (e, { value }) => setValue(value);
    const {setInformation} = UseStateContext() 
    const {total} = useCartContext()
const handleSubmit = (e) =>{
    e.preventDefault()
    const data = {
        email: e.target.email.value,
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        phone: e.target.phone.value,
        city: e.target.city.value,
        state: e.target.state.value,
        postCode: e.target.postCode.value,
        address: e.target.address.value,
        notes: e.target.notes.value,
        payment: {value},
        total: {total}
    };
    setInformation(data);
    window.location.href = '/invoice'  

}

    return(
        <div className='w-1/4 h-screen ml-10 '>
        {/* {total.toFixed(2)} */}
        <p className='text-4xl font-semibold'>Information</p>
        <form onSubmit={handleSubmit}>

        <ComponentsForm name="email" label="Email" type="email" placeholder="" />
        <div className='w-full flex flex-row '>
        <ComponentsForm name="firstname" label="First Name" type="text" placeholder="" width="w-10/12"/>
        <ComponentsForm name="lastname" label="Last Name" type="text" placeholder="" />
        </div>
        <ComponentsForm name="phone" label="Phone" type="number" placeholder="" />
        <ComponentsForm name="city" label="City" type="text" placeholder="" />
        <div className='w-full flex flex-row '>
        <ComponentsForm name="state" label="State" type="text" placeholder=""  width="w-10/12"/>
        <ComponentsForm name="postCode" label="Post Code" type="text" placeholder=""/>
        </div>
        <ComponentsForm name="address" label="Address" type="text" placeholder="" height="h-16"/>
        <ComponentsForm name="notes" label="Notes" type="text" placeholder="" height="h-20"/>
        <div className="w-full">
        <div>
        <FormField>
        Payment Method:
      </FormField>
      <FormField>
        <Radio
        className='text-3xl font-extrabold'
        label='Transfer Bank'
        name='radioGroup'
        value='Transfer Bank'
        checked={value === 'Transfer Bank'}
        onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Radio
          className='text-3xl font-extrabold'
          label='Cash On Delivery'
          name='radioGroup'
          value='Cash On Delivery'
          checked={value === 'Cash On Delivery'}
          onChange={handleChange}
          />
      </FormField>
          </div>
          <div className="my-5 font-extrabold text-4xl">
          Total : ${total.toFixed(2)}
           </div>

          <div className="w-full">
        <ButtonSubmit className="w-full" color="bg-blue-200" type="submit">Process</ButtonSubmit>
          </div>
          </div>
        </form>
        </div>

    )
}
export default PaymentInfo