import React from "react";

import * as S from "./styles";

const File = ({ uploadedFile }: { uploadedFile: IUploadedFile }) => (
  <S.Container>
    <li key={uploadedFile.name}>
      <S.FileInfo>
        <S.Preview src={uploadedFile.preview} />
      </S.FileInfo>
    </li>
  </S.Container>
);

export default File;
