import PropTypes from 'prop-types';

const ButtonSubmit = (props) =>{
    const {type ="button", children, color, data , onClick=()=>{}, id, title} = props 
    return(
        <button className={`${color} rounded-md h-10 p-5 flex justify-center items-center m-1 font-semibold text-black`}
         type={type}
         id={id}
         onClick={onClick}
         data={data} //price
         title={title}
         >
            {children}
        </button>
    )
}
ButtonSubmit.propTypes={
    type: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    data: PropTypes.number,
    onClick: PropTypes.func
}
export default ButtonSubmit;
