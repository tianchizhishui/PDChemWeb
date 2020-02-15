import React from 'react';
import PDTitle from './models/PDTitle';
import PDMenu from './models/PDMenu';
import PDLogo from './models/PDLogo';
import headerImage from './images/headerImage.jpg';
import ContactInfo from './models/ContactInfo';
import MainPageText from '../src/texts/MainPageText';

function App() {
  let links = [
    { label: 'OUR PURPOSE', link: '#OUR-PURPOSE'},
    { label: 'ABOUT', link: '#ABOUT'},
    { label: 'LATESTNEWS', link: '#LATESTNEWS'},
    { label: 'SERVICE PROVIDED', link: '#SERVICE-PROVIDED'}
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="logo_title">
          <div><PDLogo/></div>
          <div><PDTitle/></div> 
        </div>
        <div className="header-image-div"><img src={ headerImage } className="headerImage"/></div>
        <div><ContactInfo/></div>
      </div>
      <div className="body">
        <PDMenu links={ links }/>
        <div className="mainBackGroundImage">
          <div className="mainBodyText"><MainPageText/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
