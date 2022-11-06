import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

import ChatMessage from './components/ChatMessage'

const socket = io('http://localhost:3000')

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('chat_message', data => {
      setMessages(lastMessages => [...lastMessages, data])
    })

    return () => {
      socket.off('chat_message')
    }
  }, [])

  return (
    <div className='flex flex-col justify-end overflow-hidden h-[600px] gap-4 bg-slate-700 p-4'>
      {messages.map(message => <ChatMessage key={message.tags.id} messageData={message} />)}
    </div>
  )
}

export default App
