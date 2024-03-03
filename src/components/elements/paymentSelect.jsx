import { useState } from 'react';
import { FormField, Form, Radio } from 'semantic-ui-react';

const PaymentSelect = () => {
  const [value, setValue] = useState();

  const handleChange = (e, { value }) => setValue(value);

  return (
    <Form>
      <FormField>
        Payment Method: <b>{value}</b>
      </FormField>
      <FormField>
        <Radio
        className='text-3xl font-extrabold'
          label='Transfer Bank'
          name='radioGroup'
          value='Transfer Bank'
          checked={value === 'Transfer Bank'}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Radio
          className='text-3xl font-extrabold'
          label='Cash On Delivery'
          name='radioGroup'
          value='Cash On Delivery'
          checked={value === 'Cash On Delivery'}
          onChange={handleChange}
        />
      </FormField>
    </Form>
  );
};

export default PaymentSelect;
