import React from "react";
import * as S from "./styles";
import { SubTitle, Template, Title } from "../../components";

export const Result = () => {
  return (
    <Template>
      <>
        <S.Container>
          <Title title="Result of your test" />
          <SubTitle>
            See video of your test.
            <br /> Test id: <span>507f191e810c19729de860ea</span>
          </SubTitle>
          <S.Content>
            <S.Video
              controls={true}
              src="https://serverem.s3.us-east-2.amazonaws.com/Grava%C3%A7%C3%A3o+de+tela+de+29-06-2021+16%3A42%3A41.webm"
            />
          </S.Content>
        </S.Container>
      </>
    </Template>
  );
};
