import { useEffect, useState } from "react"
import Card from "../elements/Card"
import Button from "../elements/Button"
import Button2 from "../elements/Button2"
import { useCartContext,useSetCartContext } from "../store/CartStore"
import { UseStateContext } from "../store/ContextProvider"
import ModalDetail from "../elements/Modal"
const CardProductsShop = () =>{
    const {setNotification,notification} = UseStateContext()
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState('')
    const [acticeButton, setActiceButton] = useState('')
    const [loading, setLoading] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useSetCartContext()
    const {cartItems} = useCartContext()
    // console.log(cartItems)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://fakestoreapi.com/products${categories}`)
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
          setProducts(data)}
            )},[categories])
        
        const men = "men's clothing"
        const women = "women's clothing"
        const jewelery = "jewelery"
        const electronics = "electronics"
        const all = "all"

        const changeCategory = (e)=>{
            let clickedCategories = e.target.textContent
            if(clickedCategories === "all"){
                setCategories('')
            }else{
                setCategories("/category/"+ clickedCategories)
            }
            setActiceButton(clickedCategories)
        }
        
        const addToCart = (data) => {
          // Lakukan operasi lain yang diperlukan dengan nilai-nilai ini
            dispatch({
              type:"ADD_TO_CART",
              payload: { id: data.id, qty: 1,price: data.price, data:data },
              
            }) 
            setNotification('Item Added.') 
        };
        useEffect(() => {
          console.log("cart",cartItems)
          if(cartItems.length > 0){
            const sum = cartItems.reduce((acc,item) => {
                return acc + item.price * item.qty
              },0);
              dispatch({
                type:"UPDATE_TOTAL_PRICE",
                payload:{
                total: sum,
              }
          })
          console.log("total",sum)
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
            <div className="w-full flex flex-col h-screen justify-center items-center">
              <div className="h-10 w-1/2">
        {notification && <div className="h-full  bg-green-300 rounded-md text-center font-bold ">
                {notification}
                </div>
                
              }   
          </div>
        <div className="w-1/3 flex flex-row rounded-md justify-center items-center mt-16 mb-8 bg-white">
        <hr />
        <Button2 onClick={changeCategory} color={acticeButton === all ? 'bg-slate-300' : ''}>{all}</Button2>
        <Button2 onClick={changeCategory} color={acticeButton === electronics ? 'bg-slate-300' : ''}>{electronics}</Button2>
        <Button2 onClick={changeCategory} color={acticeButton === jewelery ? 'bg-slate-300' : ''}>{jewelery}</Button2>
        <Button2 onClick={changeCategory} color={acticeButton === men ? 'bg-slate-300' : ''}>{men}</Button2>
        <Button2 onClick={changeCategory} color={acticeButton === women ? 'bg-slate-300' : ''}>{women}</Button2>
        </div>
        {loading && <div>
              <p className="text-3xl font-bold ">Loading...</p>
          </div>}
          <div className="w-4/5 h-screen overflow-auto mb-28">
            <br />
          {!loading && 
          <div className="flex h-auto flex-row flex-wrap justify-center items-start">
        {products.map((product)=>(
          <Card key={product.id}>
            <Card.CardHeader image={product.image}></Card.CardHeader>

              <ModalDetail id={product.id}/>
            <Card.CardBody title={product.title} id={product.id}>
              {product.description}</Card.CardBody>
            <Card.CardFooter price={product.price} id={product.id}>
            <Button color="bg-blue-100" onClick={addToCart} id={product.id} 
            data={{id: product.id, title: product.title, price: product.price,image:product.image, desc:product.description, category: product.category} ||{} }>Add to Cart</Button>
            </Card.CardFooter>
            </Card>
        ))}
        </div>
      }
      </div>
        </div>
        )
}

export default CardProductsShop