import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../styled/";
import { useQuery } from "../../styles/breakpoints";
import { primaryBackground } from "../../styles/colors";
import PaymentShipping from "./Components/PaymentShipping";
import Summary from "./Components/Summary";
import Variants from "./Components/Variants";

export default function Checkout() {
  const [getProductsFromAPI, setPoductsFromAPI] = useState("");
  const [getSelectedProduct, setSelectedProduct] = useState(0);
  const { isLaptop, isDesktop } = useQuery();

  useEffect(() => {
    fetch(`http://localhost:3001/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setPoductsFromAPI(data.PRODUCTS);
      });
  }, []);

  return (
    <FlexWrapper
      width="100%"
      height="100%"
      alignItems={isLaptop ? "center" : ""}
      flexDirection={isLaptop ? "column" : "row"}
    >
      <CheckoutWrapper
        width={isDesktop ? "100%" : "53.25rem"}
        maxWidth="53.25rem"
        alignItems="center"
        flexDirection="column"
      >
        <Variants
          products={getProductsFromAPI}
          setSelectedProduct={setSelectedProduct}
          getSelectedProduct={getSelectedProduct}
        />
        <PaymentShipping />
      </CheckoutWrapper>
      <Summary
        products={getProductsFromAPI}
        getSelectedProduct={getSelectedProduct}
      />
    </FlexWrapper>
  );
}

const CheckoutWrapper = styled(FlexWrapper)`
  background-color: ${primaryBackground};
  box-shadow: 0px 4px 4px 0px #00000040;
  height: 100%;
`;
