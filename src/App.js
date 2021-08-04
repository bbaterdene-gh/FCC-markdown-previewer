import { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";
import { defaultMarkdown } from './files/markdown-default'

function App() {
  const [text, setText] = useState(defaultMarkdown)
  const [editorMaximized, setEditorMaximized] = useState(false)
  const [previewerMaximized, setPreviewerMaximized] = useState(false)

  return (
    <div className="App min-h-screen">
      { previewerMaximized ? '' :
        <Editor
          text={text}
          setText={setText}
          editorMaximized={editorMaximized}
          setEditorMaximized={() => setEditorMaximized(!editorMaximized)}/>
      }
      { editorMaximized ? '' :
        <Previewer
          text={text}
          previewerMaximized={previewerMaximized}
          setPreviewerMaximized={() => setPreviewerMaximized(!previewerMaximized)}/>
      }
    </div>
  );
}

export default App;
