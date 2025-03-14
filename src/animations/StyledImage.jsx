import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color: cyan;
  }
  50% {
    border-color: magenta;
  }
  100% {
    border-color: cyan;
  }
`;

const StyledImage = styled.img`
  width: 50%; /* Ajustar el ancho de la imagen */
  height: auto;
  border: 5px solid cyan;
  animation: ${borderAnimation} 5s infinite;
  border-radius: 10px;
  margin: 0 auto; /* Centrar la imagen horizontalmente */
  display: block; /* Asegurar que la imagen sea un bloque */
`;

export default StyledImage;
