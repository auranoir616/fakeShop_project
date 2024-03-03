import { useEffect, useState } from "react"
import Card from "../elements/Card"
import Button from "../elements/Button"
import ModalDetail from "../elements/Modal"


const CardProductsHome = () =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=6')
        .then(res=>res.json())
        .then(data=>
            setProducts(data)
        )},[])
    return(
        <div className="w-4/5 flex flex-col h-screen justify-center items-center">

        <p className="font-bold text-center text-5xl">LATEST PRODUCT</p>
        <br />
        <div className="w-full flex flex-wrap flex-row h-auto justify-between">
        {products.map((product)=>(
            <Card key={product.id}>
            <Card.CardHeader image={product.image}></Card.CardHeader>
            <Card.CardBody title={product.title} id={product.id}>{product.description}
            </Card.CardBody>
            <ModalDetail/>
            <Card.CardFooter price={product.price} id={product.id}>
            {/* <Button color="bg-blue-600">Add to Cart</Button> */}
            </Card.CardFooter>
            </Card>
        ))}
        </div>
        <Button type="button" color="bg-white-50" link="/shop">View All Product</Button>
        </div>
        )
}
export default CardProductsHome