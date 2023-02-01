import styled from "styled-components";

export const CartPageContainer = styled.section`

background-color: ${({theme})=> theme.colors.black};
color: ${({theme})=> theme.colors.white};
width: 50%;
margin: 0 auto;
border-radius: 10px;
box-sizing: border-box;
text-transform: uppercase;

.description{
  display: flex;
  width: 100%;
  gap: 20rem;
  padding: 10px;
  font-weight: 700;
}

.snacks{
  display: flex;
  align-items: center;
  gap: 5rem;

  .food{
    display: flex;
    align-items: center;
  }

  .price{
    margin-left: 3rem;
  }

  .amount{
    display: flex;
    gap: 5px;
  }

  .total{
    margin-left: 5rem;
  }
}
`
