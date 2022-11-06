import React from 'react'

const ChatMessage = ({ messageData }) => {
  const { message, tags } = messageData
  const name = tags['display-name']
  const color = tags.color || '#000'

  return (
    <div className='flex gap-4 border rounded p-2 border-cyan-300 relative'>
      <span />
      <p className='font-bold absolute bg-slate-700 -top-4 left-4 px-2' style={{ color }}>{name}</p>
      <p className='text-slate-50'>{message}</p>
    </div>
  )
}

export default ChatMessage
