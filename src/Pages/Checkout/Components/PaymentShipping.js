import React, { useState } from "react";
import styled from "styled-components";
import {
  FlexWrapper,
  Box,
  H5,
  TextWrapper,
  GridWrapper,
  PrimaryButton,
} from "../../../styled";
import { white, grey, greyLight } from "../../../styles/colors";
import { COUNTRY_DATA } from "../../../helpers/countryData";
import secure_payment from "../../../assets/images/secure_payment.png";
import cards from "../../../assets/images/cards.png";
import { ReactComponent as Radio } from "../../../assets/svg/radio.svg";
import { validate } from "../../../helpers/Validators";

export default function PaymentShipping() {
  const [getInputs, setInputs] = useState({
    userInfo: {
      name: "",
      surname: "",
      email: "",
    },
    shippingInfo: {
      address: "",
      city: "",
      country: "",
      state: "",
      postCode: "",
    },
    cardInfo: {
      cardNumber: "",
      monthYear: "",
      cvv: "",
    },
  });

  const [getError, setError] = useState("");

  function inputFill(e) {
    const { id, value } = e.target;
    const stateObject = getInputs;
    if (id === "name" || id === "surname" || id === "email") {
      stateObject.userInfo[id] = value;
    }
    if (
      id === "address" ||
      id === "city" ||
      id === "country" ||
      id === "state" ||
      id === "postCode"
    ) {
      stateObject.shippingInfo[id] = value;
    }
    if (id === "cardNumber" || id === "monthYear" || id === "cvv") {
      stateObject.cardInfo[id] = value;
    }
    setInputs({ ...stateObject });
  }

  function sendData() {
    if (
      getInputs.userInfo.name.length < 2 ||
      getInputs.userInfo.name.length > 50
    ) {
      return setError("Name must contain minimum 2 symbols, and maximum 50.");
    }
    if (
      getInputs.userInfo.surname.length < 2 ||
      getInputs.userInfo.surname.length > 50
    ) {
      return setError(
        "Surname must contain minimum 2 symbols, and maximum 50."
      );
    }
    if (!validate.validateEmail(getInputs.userInfo.email).success) {
      return setError(
        "Wrong entered email address. Please check it and try again"
      );
    }

    setError("");

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ getInputs }),
    };

    fetch("http://localhost:3001/api/import", options)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        console.log(data);
      });
  }

  return (
    <FlexWrapper padding="0 0 0 2rem" width="40rem" flexDirection="column">
      <H5 margin="0 0 0.5rem 0">PAYMENT AND SHIPPING</H5>
      <Box padding="1.5rem">
        <FlexWrapper flexDirection="column">
          <HeadingText>Customer Information</HeadingText>
          <LightText>Fields marked as (*) are required.</LightText>
          <GridWrapper gridTemplateColumns="1fr 1fr" gap="1rem" width="100%">
            <Input
              id="name"
              placeholder="*First name"
              onChange={(e) => inputFill(e)}
            />
            <Input
              id="surname"
              placeholder="*Last name"
              onChange={(e) => inputFill(e)}
            />
          </GridWrapper>
          <FlexWrapper width="100%" margin="1rem 0 0 0">
            <Input
              width="100%"
              id="email"
              placeholder="*Email"
              onChange={(e) => inputFill(e)}
            />
          </FlexWrapper>
          <ErrorMsg>{getError}</ErrorMsg>
        </FlexWrapper>
        <FlexWrapper margin="1rem 0 0 0" flexDirection="column">
          <HeadingText>Shipping Address</HeadingText>
          <FlexWrapper width="100%" flexDirection="column">
            <Input
              margin="1rem 0 0 0"
              id="address"
              placeholder="*Address"
              onChange={(e) => inputFill(e)}
            />
            <Input
              margin="1rem 0 0 0"
              id="city"
              placeholder="*City"
              onChange={(e) => inputFill(e)}
            />
          </FlexWrapper>
          <GridWrapper gap="1rem" gridTemplateColumns="repeat(3, 1fr)">
            <Select
              margin="1rem 0 0 0"
              id="country"
              placeholder="*Country"
              onChange={(e) => inputFill(e)}
            >
              <option value="select">Select</option>
              {COUNTRY_DATA.countries.map((item, index) => (
                <option key={index} value={item.country}>
                  {item.country}
                </option>
              ))}
            </Select>
            <Select
              margin="1rem 0 0 0"
              id="state"
              placeholder="*Country"
              onChange={(e) => inputFill(e)}
            >
              <option value="select">Select</option>
              {!!getInputs.shippingInfo.country &&
                COUNTRY_DATA.countries[
                  COUNTRY_DATA.countries.findIndex(
                    (i) => i.country === getInputs.shippingInfo.country
                  )
                ].states.map((item, index) => (
                  <option key={index} value={item}>
                    {" "}
                    {item}
                  </option>
                ))}
            </Select>
            <Input
              margin="1rem 0 0 0"
              id="postCode"
              placeholder="*Postal code"
              onChange={(e) => inputFill(e)}
            />
          </GridWrapper>
          <FlexWrapper margin="1rem 0 0 0" flexDirection="column">
            <HeadingText>Payment Method</HeadingText>
            <LightText>All Transactions are secure and encrypted</LightText>
            <CreditCardBox margin="1rem 0 0 0" flexDirection="column">
              <FlexWrapper padding="1rem" justifyContent="space-between">
                <FlexWrapper>
                  <Radio />{" "}
                  <TextWrapper margin="0 0 0 0.5rem">Credit Card</TextWrapper>
                </FlexWrapper>
                <Image maxWidth="15rem" src={cards} />
              </FlexWrapper>

              <CreditCardInputBox padding="1rem">
                <Input
                  width="100%"
                  type="number"
                  max={16}
                  id="cardNumber"
                  placeholder="Card number"
                  onChange={(e) => inputFill(e)}
                />
                <Input
                  margin="1rem 1rem 0 0"
                  type="number"
                  id="monthYear"
                  placeholder="MM/YY"
                  onChange={(e) => inputFill(e)}
                />
                <Input
                  width="25%"
                  margin="1rem 0 0 0"
                  type="number"
                  id="cvv"
                  placeholder="CVV"
                  onChange={(e) => inputFill(e)}
                />
              </CreditCardInputBox>
            </CreditCardBox>
            <FlexWrapper
              width="100%"
              alignItems="center"
              flexDirection="column"
            >
              <PrimaryButton
                width="100%"
                maxWidth="37rem"
                margin="1.25rem 0 0 0"
              >
                <CompleteButtonText onClick={() => sendData()}>
                  COMPLETE ORDER
                </CompleteButtonText>
              </PrimaryButton>
              <Image
                margin="1.5rem"
                maxWidth="23.375rem"
                src={secure_payment}
              />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
}

const Input = styled.input`
  padding: 0.75rem;
  height: 2.25rem;
  background-color: ${white};
  border: 1px solid #e0e0e0;
  border-radius: 0.1875rem;
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
`;

const Select = styled.select`
  padding: 0.75rem;
  background-color: ${white};
  border: 1px solid #e0e0e0;
  border-radius: 0.1875rem;
  margin: ${({ margin }) => margin || ""};
`;

const HeadingText = styled(TextWrapper)`
  padding: 0.25rem 0;
  color: ${grey};
  font-size: 0.875rem;
  font-weight: 600;
`;

const LightText = styled(TextWrapper)`
  color: ${greyLight};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin: 0 0 1rem 0;
`;

const CreditCardBox = styled(FlexWrapper)`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
`;

const CreditCardInputBox = styled(FlexWrapper)`
  background: #fafafa;
  flex-wrap: wrap;
`;

const CompleteButtonText = styled(TextWrapper)`
  color: ${white};
  font-style: normal;
  font-weight: 900;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const Image = styled.img`
  margin: ${({ margin }) => margin || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
`;

const ErrorMsg = styled(TextWrapper)`
  color: red;
  font-size: 1.125rem;
  font-weight: 500;
`;
