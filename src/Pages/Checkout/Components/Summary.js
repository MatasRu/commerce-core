import React from "react";
import styled from "styled-components";
import { FlexWrapper, TextCaption, TextWrapper } from "../../../styled";
import { grey, grey3 } from "../../../styles/colors";
import summaryImage from "../../../assets/images/summary_item.png";
import { ReactComponent as Guarantee } from "../../../assets/svg/guarantee.svg";
import { useQuery } from "../../../styles/breakpoints";

export default function Summary({ products, getSelectedProduct }) {
  const { isLaptop, isDesktop } = useQuery();
  return (
    <SummaryWrapper
      padding={isDesktop ? "0" : "0 0 0 5.875rem"}
      margin={isLaptop ? "0 1rem" : "5.5rem 0"}
      width={isLaptop ? "80%" : "23.375rem"}
      flexDirection="column"
    >
      <FlexWrapper alignItems="center">
        <Image src={summaryImage} />
        <FlexWrapper margin="0 0 0 0.5rem">
          <BoldText>
            {products && products[getSelectedProduct].value}&nbsp;
          </BoldText>
          {products && products[getSelectedProduct].name}
        </FlexWrapper>
        <FlexWrapper justifyContent="flex-end" width="100%">
          {products && products[getSelectedProduct].price}
        </FlexWrapper>
      </FlexWrapper>

      <TotalWrapper padding="1.5rem 0" margin="1.625rem 0 0 0">
        <GreyText>Total</GreyText>
        <FlexWrapper alignItems="end" width="100%" justifyContent="flex-end">
          <BoldText>USD</BoldText>
          <PriceText margin="0 0 0 0.5rem">
            {products && products[getSelectedProduct].price}
          </PriceText>
        </FlexWrapper>
      </TotalWrapper>
      <GuaranteeWrapper flexDirection="column" padding="1.5rem" margin="0 auto">
        <FlexWrapper alignItems="center">
          <Guarantee />
          <BoldText margin="0 0 0 1.5rem">60-day fit guarantee</BoldText>
        </FlexWrapper>
        <FlexWrapper>
          <TextCaption margin="1rem 0 0 0">
            Either it doesn’t fit or simply you don’t like it You can return it
            within 60 days for a full refund. No questions asked.
          </TextCaption>
        </FlexWrapper>
      </GuaranteeWrapper>
    </SummaryWrapper>
  );
}

const SummaryWrapper = styled(FlexWrapper)`
  margin: 5.5rem 0;
`;

const TotalWrapper = styled(FlexWrapper)`
  border-top: 1px solid ${grey};
`;

const GuaranteeWrapper = styled(FlexWrapper)`
  border: 1px solid ${grey3};
  border-radius: 0.1875rem;
`;

const Image = styled.img`
  max-width: 4.5rem;
`;

const BoldText = styled(TextWrapper)`
  font-size: 0.875;
  font-weight: 900;
  color: ${grey};
`;

const GreyText = styled(TextWrapper)`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${grey3};
`;

const PriceText = styled(TextWrapper)`
  font-size: 1.5rem;
  font-weight: 900;
`;
