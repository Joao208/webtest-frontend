import React from "react";
import { useHistory } from "react-router";
import image from "../../assets/images/Miroodles.png";
import { Template } from "../../components";
import * as S from "./styles";

export const Landing = () => {
  const history = useHistory();

  return (
    <Template>
      <S.Container>
        <S.ContainerText>
          <S.Title>
            Make <br /> Automated <br /> Web Tests
          </S.Title>
          <S.Subtitle>
            Run full integration tests from 0 with a <br /> few clicks
          </S.Subtitle>
          <S.Button onClick={() => history.push("/upload")}>
            <S.TextButton>START TEST</S.TextButton>
          </S.Button>
        </S.ContainerText>
        <S.Image src={image} />
        <S.Footer>
          <S.TextFooter>
            Copyright @ 2020, João Augusto All rights reserved.
          </S.TextFooter>
        </S.Footer>
      </S.Container>
    </Template>
  );
};
