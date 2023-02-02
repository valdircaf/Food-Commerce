import styled from "styled-components";

export const CartPageContainer = styled.section`

background-color: ${({theme})=> theme.colors.black};
color: ${({theme})=> theme.colors.white};
width: 70%;
margin: 0 auto;
border-radius: 10px;
box-sizing: border-box;
text-transform: uppercase;

svg{
  color: ${({theme})=> theme.colors.red};
  font-size: 2rem;
}

button{
background-color: ${({theme})=> theme.colors.black};
border: none;
}


.container-snacks{

  background-color: ${({theme})=> theme.colors.gray800};
  margin-top: 1px;

  button{
  background-color: ${({theme})=> theme.colors.gray800};
  border: none;
}

  .snacks{
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img{
      border-radius: 5px;
    }
  }
}

`
