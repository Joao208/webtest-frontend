declare global {
  interface IUploadMessage {
    type?: string;
  }

  interface IDropContainer {
    isDragActive?: boolean;
    isDragReject?: boolean;
  }
}

export { global };
