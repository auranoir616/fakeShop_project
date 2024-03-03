import PropTypes from 'prop-types';
import { UseStateContext } from '../store/ContextProvider';
const Card = (props) =>{
    const {children} =props
    return(
<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
</div>
    )
}
Card.propTypes={
    children: PropTypes.array
}

const CardHeader = (props) =>{
    const {image} = props
    return(
        <div className='p-5 rounded-t-lg h-60 w-full object-cover'>
        <img src={image} alt=""  className='h-full w-full'/>       
        </div>
    )
}
CardHeader.propTypes={
    image: PropTypes.string.isRequired
}

const CardBody = (props) =>{
    const {setDetail} = UseStateContext() 
    const {title, children, id} = props
    //memanggil fungsi setdetail yang akan menampilkan modal yang berisi data
    const handleClick = (e) => {
    e.preventDefault();
    setDetail(id)
  };

    return(
        <div className="px-5 pb-5 h-full">
        <a href="#" onClick={handleClick} id={id}>
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {title.substring(0, 20)}...
            </h5>
          <p className="text-m text-white">
            {children.substring(0, 100)}...
          </p>
        </a>
      </div>
        )
}
CardBody.propTypes={
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    onClick: PropTypes.func
}


const CardFooter =(props)=>{
    const {price, children} = props
    return( 
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">${price}</span>
        {children}
      </div>
    )
}
CardFooter.propTypes = {
    price: PropTypes.node.isRequired,
    children: PropTypes.node,
}

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;

export default Card;

