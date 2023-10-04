import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const OrderCreation = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [error, setError] = useState('');

  const steps = ['Product Details', 'Address Details', 'Order Details'];

  const handleNext = () => {
    if (activeStep === 0) {
      // Handle product details and validation
    } else if (activeStep === 1) {
      if (!selectedAddress) {
        setError('Please select an address.');
      } else {
        // Make an API request to confirm the order
        // If successful, proceed to the next step
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 2) {
      // Handle order confirmation
      // If successful, redirect to the product page
      history.push('/products');
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          /* Product Details Step */
          <div>
            {/* Product details form */}
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}
        {activeStep === 1 && (
          /* Address Details Step */
          <div>
            {/* Address details form */}
            {error && <div>{error}</div>}
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}
        {activeStep === 2 && (
          /* Order Details Step */
          <div>
            <div>Your order is confirmed.</div>
            <Button onClick={handleBack}>Back to Products</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCreation;
