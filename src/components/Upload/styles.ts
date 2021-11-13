import styled, { css } from "styled-components";

const dragActive = css`
  border-color: "#ffe115";
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})<IDropContainer>`
  border: 1px dashed #737373;
  border-radius: 20px;
  cursor: pointer;

  transition: height 0.2s ease;
  transition: width 0.5s ease;

  height: 356px;
  width: 75%;

  @media (max-width: 800px) {
    width: 100%;
  }

  ${({ isDragActive }) => isDragActive && dragActive};
  ${({ isDragReject }) => isDragReject && dragReject};
`;

export const UploadMessage = styled.p<IUploadMessage>`
  display: flex;
  color: #969696;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
