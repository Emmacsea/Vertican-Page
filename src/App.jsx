import { useState } from 'react';
import { Home } from './Components/Index';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  const [view, setView] = useState(0);
  const [fullname, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');


  const handleFullName = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }


  const handleIndex = () => setView(0);
  const handleGallery = () => setView(1);
  const handleContact = () => setView(2);
  

  return (
    <>
      {view === 0 && (
        <Home
          onClickintro={handleIndex}
          onClickgallery={handleGallery}
          onClickcontact={handleContact}
        />
      )}

      {view === 1 && (
        <Gallery
          onClickintro={handleIndex}
          onClickgallery={handleGallery}
          onClickcontact={handleContact}
        />
      )}

      {view === 2 && (
        <Contact
          name={fullname}
          email={emailAddress}
          message={message}
          onChangeName={handleFullName}
          onChangeEmail={handleEmailAddress}
          onChangeMessage={handleMessage}
          onClickintro={handleIndex}
          onClickgallery={handleGallery}
          onClickcontact={handleContact}
        />
      )}
    </>
  )
}

export default App
