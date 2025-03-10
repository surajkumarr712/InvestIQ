import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
});

const Form = ({ calculateROI }) => {
  const [companyName, setCompanyName] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');
  const [shares, setShares] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateROI(companyName, initialInvestment, shares, purchasePrice, currentPrice);
  };

  return (
    <StyledBox component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Initial Investment" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} fullWidth margin="normal" />
      <TextField label="Number of Shares" value={shares} onChange={(e) => setShares(e.target.value)} fullWidth margin="normal" />
      <TextField label="Purchase Price per Share" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} fullWidth margin="normal" />
      <TextField label="Current Price per Share" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>Calculate ROI</Button>
    </StyledBox>
  );
};

export default Form;