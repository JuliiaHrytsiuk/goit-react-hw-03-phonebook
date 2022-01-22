import styled from "@emotion/styled";

export const PhoneForm = styled.form`
  color: black;
  font-weight: 500;
  margin: auto;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  color: red;
  font-size: 25px;
  padding: 30px;

  cursor: pointer;
  /* transition: 0.3s all ease-in-out; */

  border-radius: 5px;
  background: beige;
  box-shadow: 16px 16px 44px grey, -16px -16px 44px grey;
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  padding: auto;
  margin: auto;
  padding: 20px;

  cursor: pointer;
  transition: 0.3s all ease-in-out;

  border-radius: 5px;
  background: beige;
  box-shadow: 6px 6px 44px pink, -16px -16px 44px beige;
`;

export const FormButton = styled.button`
  margin: 10px auto;
  padding: 10px;
  font-size: 20px;

  cursor: pointer;

  border: none;
  border-radius: 10px;
  background: pink;
`;
