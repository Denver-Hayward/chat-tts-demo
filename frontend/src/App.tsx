import { useEffect } from 'react'
import './App.css'
import useWebSocket from 'react-use-websocket';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <WebsocketTest />
    </>
  )
}

function WebsocketTest() {
  const { sendMessage, lastMessage, readyState } = useWebSocket("http://localhost:8000/ws", {
    share: true,
    shouldReconnect: () => true,
  });

  useEffect(() => {
    sendMessage("Test message");
  }, []);

  const testSend = () => {
    sendMessage("Test message from FE");
  }
  
  return (
    <>
      {JSON.stringify(lastMessage?.data)}
      {JSON.stringify(readyState)}
      <div onClick={testSend}>send message</div>
    </>
  )
}

export default App
