import React from 'react'
import { Toolbar } from './Toolbar'
import marked from 'marked';

export const Previewer = (props) => {
  return (
    <div className="mx-auto w-6/12 h-full mb-10 mt-5">
    <Toolbar
      isMaximized={props.previewerMaximized}
      setMaximized={props.setPreviewerMaximized}>Previewer</Toolbar>
      <div
        id="editor"
        className="bg-iceberg p-3 pb-4 min-w-full border-b border-r border-l shadow-2xl-lrb prose prose-sm"
        dangerouslySetInnerHTML={ {__html: marked(props.text)} }>
      </div>
    </div>
  )
}

