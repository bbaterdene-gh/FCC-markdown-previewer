import React from 'react'
import { Toolbar } from './Toolbar'

export const Editor = (props) => {
  return (
    <div className="mx-auto w-4/12 h-80 mt-6">
      <Toolbar
        isMaximized={props.editorMaximized}
        setMaximized={props.setEditorMaximized}>Editor</Toolbar>
      <textarea
        id="editor"
        className="bg-iceberg p-2 pb-4 min-w-full h-64 max-h-64 border-b border-r border-l shadow-2xl-lrb font-mono"
        defaultValue={props.text}
        onChange={(e) => props.setText(e.target.value)}>
      </textarea>
    </div>
  )
}
