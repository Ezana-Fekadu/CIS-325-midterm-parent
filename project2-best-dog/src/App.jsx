/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <h1>Best Dog</h1>
      <p>Welcome to the Best Dog app! Here you can find information about different dog breeds and their characteristics.</p>

      <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&w=1000&q=80" alt="Best Dog" className="dog-image" />

      <h2>About Best Dog</h2>
      <p>Best Dog is a comprehensive resource for dog lovers. We provide detailed information about various dog breeds, including their history, temperament, and care requirements. Whether you're looking for a new furry friend or just want to learn more about dogs, Best Dog has you covered!</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or suggestions, feel free to reach out to us. We would love to hear from you!</p>
      <a href="mailto:bestdog@example.com">Email Us</a>
      <p>Or watch this youtube video: </p>
      <a href="https://www.youtube.com/watch?v=V4LnorVVxfw" target="_blank">Best Dog Video</a>
    
    </div>
  )
}

export default App
