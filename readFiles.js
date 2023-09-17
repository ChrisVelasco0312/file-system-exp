export function runFileApi(buttonElement) {
  const singleFile = async () => {
    let fileHandle;

    buttonElement.addEventListener("click", async () => {
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const content = await file.text();

      console.log("content", content);
      return content;
    });
  };

  const multipleFiles = async () => {
    let fileHandles;
    const options = {
      multiple: true,
      types: [
        {
          description: "Images",
          accept: {
            "image/jpeg": ".jpeg",
          },
        },
      ],
      excludeAcceptAllOption: true,
    };

    buttonElement.addEventListener("click", async () => {
      fileHandles = await window.showOpenFilePicker(options);

      const allContent = await Promise.all(
        fileHandles.map(async (fileHandle) => {
          const file = await fileHandle.getFile();
          const content = await file.text();
          return content;
        })
      );

      console.log("all content", allContent);
      return allContent;
    });
  };

  const saveFile = async () => {
    const options = {
      types: [
        {
          description: "Test files",
          accept: {
            "text/plain": ".txt",
          },
        },
      ],
    };

    buttonElement.addEventListener("click", async () => {
      const handle = await window.showSaveFilePicker(options);
      const writable = await handle.createWritable();

      await writable.write("Hello World!!");
      await writable.close();

      return handle;
    });
  };

  const editFile = async () => {
    let fileHandle;

    buttonElement.addEventListener("click", async () => {
      [fileHandle] = await window.showOpenFilePicker();

      const file = await fileHandle.getFile();
      const writable = await fileHandle.createWritable();

      await writable.write("bump it up!");
      await writable.close;
      return file;
    });
  };

  const readDirectory = async (contentConsoleElement) => {
    buttonElement.addEventListener("click", async () => {
      const directoryHandle = await window.showDirectoryPicker();

      console.log("DIRECTORY HANDLE", directoryHandle);
      console.log("contentConsoleElement", contentConsoleElement);
      let consoleContent = "";
      for await (const entry of directoryHandle.values()) {
        console.log(await entry.getFile());
        consoleContent =
          consoleContent +
          `
          ${entry.kind}_${entry.name}
        `;
      }

      contentConsoleElement.innerText = `
        Nombre de la carpeta: ${directoryHandle.name}

        Archivos:

        ${consoleContent}
      `;
    });
  };

  return {
    singleFile,
    multipleFiles,
    saveFile,
    editFile,
    readDirectory,
  };
}
