import React from 'react';
import PDTitle from './PDTitle';
import PDMenu from './PDMenu';
import PDLogo from './PDLogo';
import background1 from './images/background1.png';
import headerImage from './images/headerImage.jpg';

function App() {
  
  let links = [
    { label: 'OUR PURPOSE', link: '#OUR-PURPOSE'},
    { label: 'ABOUT', link: '#ABOUT'},
    { label: 'LATESTNEWS', link: '#LATESTNEWS'},
    { label: 'SERVICE PROVIDED', link: '#SERVICE-PROVIDED'}
  ];

  return (
    <div className="title container">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <img src={headerImage} alt='' className="headerImage"/>
      <div>
        <PDLogo/>
        <PDTitle/>
      </div>
      <div>
        <PDMenu links={links}/>
        <img src={background1} alt='' className="lowerBackground"/>
        <div className="mainBodyText">
          <p>
            Our ultimate purpose is to improve the traditional chemistry research pathway into an evolved model that utilizing current computer technologies to organic research data, research progress and update, research directions, and research results. We are building a total customizable portal that track, share, and discuss research progress based on the needs of different research facilities.
          </p>
          <p>
            While the portal is being built, currently, we also provide professional research topic information, research consulting based on the customers’ needs.
          </p>
          <p>
            Traditional chemistry industries are growing at a relatively low pace compared to the last several decades due to dramatic lifestyle changes and new technologies blooming. However, new technologies also strongly depend on traditional science research progress. So by crosslinking novel and traditional fields can make the most use of each subject to achieve maximum mutual benefit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
