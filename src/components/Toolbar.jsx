import React from 'react'
import { FaFreeCodeCamp, FaCompress, FaCompressAlt } from 'react-icons/fa'

export const Toolbar = (props) => {
  return (
    <div className="bg-scooter border-t border-l border-r border-b shadow-2xl-trl flex items-center">
      <FaFreeCodeCamp className="inline text-4xl pl-2"/>
      <span className="pl-2 font-semibold font-mono inline">{props.children}</span>
      <span
        className="justify-self-end ml-auto mr-3 pb-1 cursor-pointer hover:text-turquoise"
        onClick={() => props.setMaximized(!props.isMaximized)}>
        {props.isMaximized ? <FaCompressAlt /> : <FaCompress />}
      </span>
    </div>
  )
}