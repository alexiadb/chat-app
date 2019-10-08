import React from 'react';
import './components/Contact.css'
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact  avatar='https://randomuser.me/api/portraits/men/80.jpg' name='Vernon West' online  />
      <Contact  avatar='https://randomuser.me/api/portraits/women/51.jpg' name='mattie.oliver'   />
      <Contact  avatar='https://randomuser.me/api/portraits/women/53.jpg' name='lucille porter' online   />
      
    </div>
  );
}

export default App;
