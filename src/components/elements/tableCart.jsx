import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  TableFooter,
  Table,
} from 'semantic-ui-react'
import { useCartContext } from '../store/CartStore'
const TableItems = () =>{
    const {cartItems, total} = useCartContext()
return(
    <div className='w-1/2'>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Quantity</TableHeaderCell>
        <TableHeaderCell>Price</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
    {cartItems.map((item)=>(
        <TableRow key={item.id}>
        <TableCell>{item.data.title}</TableCell>
        <TableCell>{item.qty}</TableCell>
        <TableCell>${item.price}</TableCell>
      </TableRow>
            ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableHeaderCell><p className='font-bold text-3xl'>Total :</p> </TableHeaderCell>
        <TableHeaderCell />
        <TableHeaderCell ><p className='font-bold text-3xl'>${total.toFixed(2)}</p></TableHeaderCell>
      </TableRow>
    </TableFooter>
      </Table>
</div>
)
} 


export default TableItems