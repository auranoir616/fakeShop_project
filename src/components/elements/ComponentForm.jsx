import Label from "./Label";
import Input from "./Input";
import PropTypes from 'prop-types';
import { forwardRef } from "react";

const ComponentsForm = forwardRef((props, ref) =>{
    const {label, name, type, placeholder, height, width="w-full"} = props
    return(
        <div className="mb-4 w-full">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} height={height} width={width}></Input>
        </div>
    )
})

ComponentsForm.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
}
ComponentsForm.displayName = 'ComponentsForm';

export default ComponentsForm;