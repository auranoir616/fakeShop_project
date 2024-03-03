import Button2 from '../elements/Button2'
import { UseStateContext } from '../store/ContextProvider';
import { useEffect } from 'react';
import {
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Item,
} from 'semantic-ui-react'
import { useCartContext, useSetCartContext } from '../store/CartStore'
import PaymentInfo from '../elements/PaymentInfo';
const PaymentDetail = () =>{
  const {setNotification} = UseStateContext()
  const dispatch = useSetCartContext()
  const {cartItems} = useCartContext()
  const removeItem = (e) =>{
    dispatch({
        type: "REMOVE_ITEMS",
        payload: +e.target.id
    })
    setNotification('berhasil menghapus item')
}

useEffect(() => {
  console.log("cart",cartItems)
  if(cartItems.length > 0){
    let sum = cartItems.reduce((acc,item) => {
        return acc + item.price * item.qty
      },0)
      dispatch({
        type:"UPDATE_TOTAL_PRICE",
        payload:{
        total: sum,
      }
  })
}else{
  dispatch({
    type:"UPDATE_TOTAL_PRICE",
    payload:{
    total: 0,
  }
})

}
}, [cartItems]);
   return(
      
       <ItemGroup className='w-full h-full flex flex-row bg-white p-5'>
        {/* <p className='text-4xl font-semibold '>Items</p> */}
        <div className='h-screen w-1/2 overflow-auto'>
        {cartItems.map((item)=>(
          <Item  key={item.id} className='flex flex-row justify-start items-start m-10'>
      <img className='w-20 h-20 mr-5' src={item.data.image} />
      <ItemContent verticalAlign='middle'>
          <ItemHeader className='text-xl font-bold'>
            {item.data.title.substring(0, 10)}
        </ItemHeader>
        <ItemDescription>
        {item.data.desc.substring(0, 50)}
        </ItemDescription>
        <ItemExtra>
       price : ${item.price} <br />
       quantity: <b>{item.qty}</b>
        <Button2 onClick={removeItem} color="bg-red-300" id={item.id}>remove</Button2>
        </ItemExtra>
        </ItemContent>
        <hr />
    </Item>
        ))}
        </div>
        <PaymentInfo/>
        
  </ItemGroup>

   )
}

export default PaymentDetail