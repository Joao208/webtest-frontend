import React from "react";
import { ArrowLeft } from "../../assets/svg/ArrowLeft";
import * as S from "./styles";

export const Button = ({
  text,
  ...props
}: {
  text: string;
  onClick: () => void;
  styles?: Object;
  id?: string;
  className?: string;
}) => {
  return (
    <S.Button {...props}>
      <S.Title>{text}</S.Title>
      <ArrowLeft />
    </S.Button>
  );
};
