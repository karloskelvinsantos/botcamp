import styled from "styled-components";

import logo from "../../assets/images/botcamp.png";

const LogoBotCamp = styled.img.attrs({
  src: logo,
  alt: "imagem botcamp"
})`
  width: 248px;
  margin-left: 20%;
  margin-top: 120px;
`;

export default LogoBotCamp;
