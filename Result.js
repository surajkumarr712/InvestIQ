import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  background: 'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .3)',
});

const Result = ({ roi, profit, companyInfo }) => (
  <StyledBox sx={{ mt: 3 }}>
    <Typography variant="h5">Return on Investment: {roi}%</Typography>
    <Typography variant="h6">Total Profit: ₹{profit}</Typography>
    {companyInfo && (
      <>
        <Typography variant="h6">Company: {companyInfo.name}</Typography>
        <Typography variant="h6">Sector: {companyInfo.sector}</Typography>
        <Typography variant="body1">{companyInfo.description}</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {companyInfo.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img src={image} alt={`Company ${index}`} style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>Quarterly Results:</Typography>
        <Grid container spacing={2}>
          {companyInfo.quarterlyResults.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1">{result.quarter}: ₹{result.amount}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>Yearly Results:</Typography>
        <Grid container spacing={2}>
          {companyInfo.yearlyResults.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1">{result.year}: ₹{result.amount}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    )}
  </StyledBox>
);

export default Result;