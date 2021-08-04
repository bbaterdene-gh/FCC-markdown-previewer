import { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";

function App() {
  const [text, setText] = useState('# Welcome to my React Markdown Previewer!')
  const [editorMaximized, setEditorMaximized] = useState(false)
  const [previewerMaximized, setPreviewerMaximized] = useState(false)

  return (
    <div className="App">
      <Editor
        text={text}
        setText={setText}
        editorMaximized={editorMaximized}
        setEditorMaximized={() => setEditorMaximized(!editorMaximized)}/>
      <Previewer
        text={text}
        previewerMaximized={previewerMaximized}
        setPreviewerMaximized={() => setPreviewerMaximized(!previewerMaximized)}/>
    </div>
  );
}

export default App;
