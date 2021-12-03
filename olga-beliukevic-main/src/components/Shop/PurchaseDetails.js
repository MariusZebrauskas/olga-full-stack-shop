import React, { useState } from 'react';
import { Body, Table, Box, H1, H2, FlexContainer } from './styles';

const PurchaseDetails = ({ purchaseDetales, language }) => {
  const [staticDetaisls, setStaticDetaisls] = useState({
    h1: 'Compleated Purchase Order Details',
    email: 'Email',
    id: 'Id',
    ammount: 'Ammount',
    currency: 'Currency',
    date: 'Date',
    thankYou: `Thank You For Buying From Olga Beliukevičienė Shop. Your Items Will Be Sent To Your Email
    With In One Day`,
  });
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const variantsBill = {
    hidden: {
      opacity: 0,
      scale: 1.5,
     
    },
    animate: {
    
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 15, delay: 0.5 },
    },
  }
  return (
    <Body >
      <FlexContainer>
        <H1>{staticDetaisls.h1}</H1>
      </FlexContainer>
      <Table variants={variantsBill} initial='hidden' animate='animate'>
        <Box first>
          <h4>{staticDetaisls.email}:</h4>
          <h4>{purchaseDetales.email}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.id}</h4>
          <h4>{purchaseDetales.id}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.ammount}:</h4>
          <h4>{purchaseDetales.amount / 100}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.currency}:</h4>
          <h4>{purchaseDetales.currency}</h4>
        </Box>
        <Box last>
          <h4>{staticDetaisls.date}:</h4>
          <h4>{date}</h4>
        </Box>
      </Table>
      <FlexContainer>
        <H2>{staticDetaisls.thankYou}</H2>
      </FlexContainer>
    </Body>
  );
};

export default PurchaseDetails;
