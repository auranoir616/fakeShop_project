import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button2 = (props) =>{
    const {type ="button", children, color, link, data , onClick=()=>{}, id} = props 
    return(
        <Link to={link}>
        <button className={`${color} rounded-md h-10 p-5 flex justify-center items-center m-1 font-semibold text-black`}
         type={type}
         id={id}
         onClick={onClick}
         data={data} //price
         >
            {children}
        </button>
        </Link>
    )
}
Button2.propTypes={
    type: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.number,
    data: PropTypes.object,
    onClick: PropTypes.func
}
export default Button2;
