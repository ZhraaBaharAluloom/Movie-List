import styled, { createGlobalStyle } from "styled-components";

export const DeletButtonStyled = styled.p`
  float: right;
  color: red;
  justify-content: space-between !important;
  display: flex !important;
  padding: 4px;
`;

export const WatchedButtonStyled = styled.p`
  float: right;
  color: #028090;
  justify-content: space-between !important;
  display: flex !important;
  padding: 4px;
`;

export const ListWrapper = styled.div`
  padding: 10px;
`;

export const WatchedListWrapper = styled.div`
  padding: 10px;
`;

export const ItemWrapper = styled.div`
  padding: 4px;
  border: 1px solid;
  border-radius: 5px;
`;

export const GlobalStyle = createGlobalStyle`
body{
  display: block;
  background-color:#fffffc;
}
h3 {
  margin:auto;
  text-align:center;

}
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
  width: 90%;
  border-radius: 6px;
  margin: auto;
`;

export const AddButtonStyled = styled.div`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 90%;
  border-radius: 6px;
`;
