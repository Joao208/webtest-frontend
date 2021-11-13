import React from "react";
import { useHistory } from "react-router";
import { Logo } from "../../assets/svg/Logo";
import * as S from "./styles";

export const Template = ({ children }: { children?: React.ReactElement }) => {
  const history = useHistory();

  return (
    <>
      <S.Header>
        <S.Container onClick={() => history.push("/")}>
          <Logo />
        </S.Container>
      </S.Header>
      {children}
    </>
  );
};
