import React from 'react'
import { Toolbar } from './Toolbar'
import marked from 'marked';

export const Previewer = (props) => {
  return (
    <div className="mx-auto w-6/12 h-full">
    <Toolbar
      isMaximized={props.previewerMaximized}
      setMaximized={props.setPreviewerMaximized}>Previewer</Toolbar>
      <div
        id="editor"
        className="bg-iceberg p-2 pb-4 min-w-full h-64 max-h-64 border-b border-r border-l shadow-2xl-lrb"
        dangerouslySetInnerHTML={ {__html: marked(props.text)} }>
      </div>
    </div>
  )
}

