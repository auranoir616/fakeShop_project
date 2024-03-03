import PropTypes from 'prop-types';
const TemplateForm = (props) =>{
    const {children} = props 
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-stone-200">
        <div className="w-1/3 bg-slate-600 h-1/2">
        {children}
        </div>
        </div>
    )
}

TemplateForm.propTypes={
    children: PropTypes.object,
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    width: PropTypes.string
}
export default TemplateForm
