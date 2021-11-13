import React from "react";

import { useDropzone } from "react-dropzone";
import { UploadIcon } from "../../assets/svg/UploadIcon";

import File from "./File";
import * as S from "./styles";

export const Upload = ({
  onUpload,
  file = null,
}: {
  onUpload?: (files: Array<File>) => void;
  file?: IUploadedFile | null;
}) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      maxFiles: 1,
      accept: "text/markdown",
      onDropAccepted: onUpload,
    });

  const renderDragMessage = () => {
    if (file?.name && file?.preview) return <File uploadedFile={file} />;

    return (
      <S.Container>
        <UploadIcon />
        <S.UploadMessage>Browse or drop here</S.UploadMessage>
      </S.Container>
    );
  };

  return (
    <S.DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
    >
      <input {...getInputProps()} />
      {renderDragMessage()}
    </S.DropContainer>
  );
};
