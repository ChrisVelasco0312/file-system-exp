import "./style.css";

import { runFileApi } from "./readFiles";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>File System Api Examples</h1>
    <p>Click on a button to execute the example function</p>

    <div class="card">
      <button class="pick-file" type="button">Open file</button>
      <button class="pick-files" type="button">Open multiple files</button>
      <button class="save-file" type="button">Save file</button>
      <button class="edit-file" type="button">Bump your text file</button>
      <button class="read-directory" type="button">Read directory</button>
    </div>
    
    <h5>Console</h5>
    <pre class="content-console"></pre>
  </div>
`;

runFileApi(document.querySelector(".pick-file")).singleFile();
runFileApi(document.querySelector(".pick-files")).multipleFiles();
runFileApi(document.querySelector(".save-file")).saveFile();
runFileApi(document.querySelector(".edit-file")).editFile();
runFileApi(document.querySelector(".read-directory")).readDirectory(
  document.querySelector(".content-console")
);
