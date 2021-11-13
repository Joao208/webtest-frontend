import React from "react";
import { Template } from "../../components";
import * as S from "./styles";
import LoadingIcon from "../../assets/images/LoadingIcon.gif";

export const Loading = () => {
  return (
    <Template>
      <S.Container>
        <S.Image src={LoadingIcon} />
      </S.Container>
    </Template>
  );
};
