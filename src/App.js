
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='contact-box'>
        <div className='left'></div>
        <div className='right'>
          <h2>Contact me</h2>
          <input className='field' type='text' placeholder='Your name ...'/>
          <input className='field' type='text' placeholder='Your email ...'/>
          <input className='field' type='text' placeholder='Your phone ...'/>
          <textarea className='field area' placeholder='Type your message here...'/>
          <button className='btn'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
