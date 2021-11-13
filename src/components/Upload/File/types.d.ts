declare global {
  interface IUploadedFile {
    name: string;
    preview: string;
    progress?: number;
  }

  interface IPreview {
    src: string;
  }
}

export { global };
