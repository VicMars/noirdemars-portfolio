import React from 'react';
import AboutText from './AboutText';


function AboutShowContent(props) {

  const [showAboutText, setShowAboutText] = React.useState(false);
  const onClick = () => setShowAboutText(!showAboutText);

  return (

    <div>
      <button onClick={onClick} className="scroll-plus"> + </button>
      {showAboutText ? <AboutText /> : null}
    </div>

  )
}

export default AboutShowContent

