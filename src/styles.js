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
  width: 400px;
  margin: 20px;
`;

export const WatchedListWrapper = styled.div`
  width: 400px;
  margin: 20px;
`;

export const ItemWrapper = styled.div`
  padding: 4px;
  border: 1px solid;
  border-radius: 3px;
`;

export const GlobalStyle = createGlobalStyle`
body{
  display: block;
  background-color:#f7ede2;
}
`;
