import styled from "styled-components";

export const Container = styled.div`
  height: 90%;
  padding: 0 30px;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    display: flex;
  }
`;

export const Image = styled.img`
  width: 50%;
  max-width: 700px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  padding: 0 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    display: flex;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 100px;

  color: #2f281e;

  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;

  color: #544837;

  margin: 0;
`;

export const Button = styled.div`
  background: #1895ff;
  height: 56px;
  width: 255px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  cursor: pointer;
`;

export const TextButton = styled.p`
  height: 22px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  text-align: center;
  letter-spacing: 3.6px;

  color: #ffffff;
`;

export const Footer = styled.div`
  position: absolute;

  bottom: 0;
  width: 100vw;
`;

export const TextFooter = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: center;

  color: #a3a3a3;
`;
