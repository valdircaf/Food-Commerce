import styled from "styled-components";

export const CartContainer = styled.button`

  width: 10rem;
  height: 3rem;
  background: ${({theme})=> theme.colors.red};
  border-radius: 10px;
  color: ${({theme})=> theme.colors.white};
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`
