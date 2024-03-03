import Button2 from './Button2'
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Icon,Label} from 'semantic-ui-react'
import { GridColumn, Header, Popup, Grid } from 'semantic-ui-react'
import { useCartContext,useSetCartContext } from '../store/CartStore'
import { UseStateContext } from '../store/ContextProvider';
const CartButton = (props) => {
  const {setNotification} = UseStateContext()
    const dispatch = useSetCartContext()
    const {data} = props
    const {cartItems, total} = useCartContext()
    const removeItem = (e) =>{
        dispatch({
            type: "REMOVE_ITEMS",
            payload: +e.target.id
        })
        setNotification('Item Removed')
    }
    return(
  <Popup trigger={<Button2><Icon name='shopping cart'/>Cart <Label color='teal' circular>{data}</Label>
  </Button2>} flowing hoverable data={data}>
    <Grid centered divided columns={1} >
      <GridColumn textAlign='center' >
      <div className='bg-slate-200 p-5 rounded-md w-96'>
        <Header className='font-bold text-center text-xl'>
        </Header>
        <table className='w-full'>
            <thead>
                <tr>
                    <th align='left'>product</th>
                    <th>qty</th>
                    <th>price</th>
                    <th  align='center'>action</th>
                </tr>
            </thead>
            <tbody>
          {cartItems.map((item)=>(
            <tr key={item.id}>
            <td>{item.data.title.substring(0, 11)}</td>
            <td align='center'>{item.qty}</td>
            <td align='center'>${item.price}</td>
            <td  align='center'><Button2 onClick={removeItem} color="bg-red-300" id={item.id}>remove</Button2></td>
            </tr>
          ))}
          </tbody>
          <tfoot className='bg-slate-100'>
            <tr>
                <td colSpan={2}>Total Price :</td>
                <td align='center'>${total.toFixed(2)}</td>
            </tr>
          </tfoot>
            </table>
            <br />
        <Button2 link="/paymentdetail" color='bg-blue-300 w-full'>Pay</Button2>
        </div>
      </GridColumn>
    </Grid>
  </Popup>
  
)
    }
    CartButton.propTypes={
        data: PropTypes.number,
}

export default CartButton