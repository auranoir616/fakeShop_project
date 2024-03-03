import PropTypes from 'prop-types';
const TemplateHome = (props) =>{
    const {children, width="w-10/12", direction="flex-col", align="items-center", justify = "justify-start"} = props 
    return(
        <div className="w-screen h-auto flex flex-col justify-start items-center bg-stone-200">
        <div className={`w-10/12 ${width} h-auto flex ${direction} ${justify} ${align}` }>
        {children}
        </div>
        </div>
    )
}

TemplateHome.propTypes={
    children: PropTypes.array.isRequired,
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    width: PropTypes.string
}
export default TemplateHome
