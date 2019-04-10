import styled from "styled-components";

const BtnBotCamp = styled.button.attrs({
  children: props => props.content
})`
  width: 280px;
  height: 50px;
  border-radius: 25px;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  background-color: #ee3e25;
`;

export default BtnBotCamp;
