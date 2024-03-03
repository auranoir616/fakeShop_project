import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name, height, width="w-full" } = props;
    return (
      <input
        type={type}
        className={`text-sm border rounded-md ${height} ${width} py-2 px-3 text-slate-700 placeholder:opacity-50`}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    );
  });
  Input.propTypes={
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
}
Input.displayName = "Input"
export default Input