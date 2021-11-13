import React, { useState } from "react";
import filesize from "filesize";

import * as S from "./styles";

import { Button, Progress, SubTitle, Template, Title } from "../../components";
import { Upload as UploadComponent } from "../../components";
import { useHistory } from "react-router";

export const Upload = () => {
  const history = useHistory();
  const [file, setFile] = useState<IUploadedFile>({
    name: "",
    preview: "",
    progress: 0,
  });

  const handleUpload = (files: Array<File>) => {
    const uploadedFiles = files.map((file) => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setFile(uploadedFiles[0]);
  };

  return (
    <Template>
      <S.Container>
        <Title title="Insert your script here" />
        <SubTitle>
          Insert the script so we can run your test, follow the examples in the
          documentation <a>here</a>.
        </SubTitle>
        <S.Content>
          <UploadComponent onUpload={handleUpload} file={file} />
          <Progress />
        </S.Content>
        <S.Footer>
          <Button text="NEXT" onClick={() => history.push("/loading")} />
        </S.Footer>
      </S.Container>
    </Template>
  );
};
