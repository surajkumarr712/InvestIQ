import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import stockImage from './stock-image.jpg';

const App = () => {
  const [roi, setRoi] = useState(null);
  const [profit, setProfit] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  const calculateROI = (companyName, initialInvestment, shares, purchasePrice, currentPrice) => {
    const totalInvestment = shares * purchasePrice;
    const currentValue = shares * currentPrice;
    const roi = ((currentValue - totalInvestment) / totalInvestment) * 100;
    const profit = currentValue - totalInvestment;

    setRoi(roi.toFixed(2));
    setProfit(profit.toFixed(2));

    // Mock data for company information
    const mockData = {
      name: companyName,
      sector: "Technology",
      description: "A leading company in the technology sector.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      quarterlyResults: [
        { quarter: "Q1 2025", amount: 500000 },
        { quarter: "Q2 2025", amount: 600000 },
        { quarter: "Q3 2025", amount: 700000 },
        { quarter: "Q4 2025", amount: 800000 }
      ],
      yearlyResults: [
        { year: "2024", amount: 2500000 },
        { year: "2023", amount: 2200000 },
        { year: "2022", amount: 2000000 }
      ]
    };
    setCompanyInfo(mockData);
  };

  return (
    <Container>
      <Header />
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <img src={stockImage} alt="Stock Market" style={{ width: '100%', borderRadius: '10px' }} />
      </Box>
      <Form calculateROI={calculateROI} />
      {roi !== null && <Result roi={roi} profit={profit} companyInfo={companyInfo} />}
    </Container>
  );
};

export default App;