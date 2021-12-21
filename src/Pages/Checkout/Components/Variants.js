import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  FlexWrapper,
  H5,
  Button,
  PrimaryButton,
  TextWrapper,
} from "../../../styled/";
import items from "../../../assets/images/items.png";
import singleItem from "../../../assets/images/item.png";
import { ReactComponent as ArrowDown } from "../../../assets/svg/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../../assets/svg/arrow_up.svg";
import { primaryColor, white, grey } from "../../../styles/colors";

export default function Variants({
  setSelectedProduct,
  getSelectedProduct,
  products,
}) {
  const [getEditBox, setEditBox] = useState(false);

  const handleSelect = (productKey) => {
    setSelectedProduct(productKey);
  };

  return (
    <FlexWrapper
      padding="0 0 0 2rem"
      width="40rem"
      margin="89px 0 0 0"
      flexDirection="column"
    >
      <H5 margin="1rem 0">VARIANTS</H5>
      <Box padding="1.5rem">
        <FlexWrapper alignItems="center">
          <Image src={items} />
          <PriceText>
            {products && products[getSelectedProduct].value}&nbsp;
          </PriceText>
          {products && products[getSelectedProduct].name}
          <FlexWrapper width="100%" justifyContent="flex-end">
            <ChangeButton onClick={() => setEditBox(!getEditBox)}>
              Change {getEditBox ? <ArrowDown /> : <ArrowUp />}
            </ChangeButton>
          </FlexWrapper>
        </FlexWrapper>

        {getEditBox ? (
          <EditProductsBox flexDirection="column">
            {products &&
              products.map((item, index) => (
                <SelectProductBox
                  alignItems="center"
                  onClick={() => handleSelect(index)}
                  key={index}
                >
                  <Image
                    $isSelected={getSelectedProduct === index}
                    src={singleItem}
                  />

                  <FlexWrapper margin="0 0 0 0.5rem">
                    <PriceText>{item.value}&nbsp;</PriceText>
                    {item.name}
                  </FlexWrapper>

                  <FlexWrapper width="100%" justifyContent="flex-end">
                    <PriceText>{item.price}</PriceText>
                  </FlexWrapper>
                </SelectProductBox>
              ))}
            <FlexWrapper width="100%" justifyContent="flex-end">
              <PrimaryButton
                margin="2rem 0 0 0"
                onClick={() => setEditBox(!getEditBox)}
              >
                <ButtonText>SAVE CHANGES</ButtonText>
              </PrimaryButton>
            </FlexWrapper>
          </EditProductsBox>
        ) : null}
      </Box>
    </FlexWrapper>
  );
}

const EditProductsBox = styled(FlexWrapper)`
  border-top: 1px solid grey;
  margin: 1rem 0;
`;

const Image = styled.img`
  margin: 0 0.5rem 0 0;
  max-width: 2.5rem;
  border: ${({ $isSelected }) =>
    $isSelected ? `0.5px solid ${primaryColor}` : ""};
`;

const SelectProductBox = styled(FlexWrapper)`
  margin: 1rem 0 0 0;
  cursor: pointer;
`;

const PriceText = styled(TextWrapper)`
  font-size: 0.875;
  font-weight: 900;
  color: ${grey};
`;

const ButtonText = styled(TextWrapper)`
  font-size: 0.875;
  font-weight: 900;
  color: ${white};
`;

const ChangeButton = styled(Button)`
  color: ${primaryColor};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.5rem;
  letter-spacing: 0px;
  padding: 0;
`;
