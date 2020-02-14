import React from 'react';
import PDTitle from './PDTitle';
import PDMenu from './PDMenu';
import PDLogo from './PDLogo';
import background1 from './background1.png';
import headerImage from './headerImage.jpg';

function App() {
  
  let links = [
    { label: 'OUR PURPOSE', link: '#OUR-PURPOSE'},
    { label: 'ABOUT', link: '#ABOUT'},
    { label: 'LATESTNEWS', link: '#LATESTNEWS'},
    { label: 'SERVICE PROVIDED', link: '#SERVICE-PROVIDED'}
  ];

  return (
    <div className="title container ">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <div>
        <PDLogo/>
        <PDTitle/>
        <img src={headerImage} className="headerImage"/>
      </div>
      <div>
        <PDMenu links={links}/>
        <img src={background1} className="lowerBackground"/>
      </div>
    </div>
  );
}

export default App;
