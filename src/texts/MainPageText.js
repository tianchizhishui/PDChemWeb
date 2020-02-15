import React, { Component } from 'react';

class MainPageText extends Component {
    render() {
        let paragrah_1 = "Our ultimate purpose is to improve the traditional chemistry research pathway into an evolved model that utilizing current computer technologies to organic research data, research progress and update, research directions, and research results. We are building a total customizable portal that track, share, and discuss research progress based on the needs of different research facilities.";
        let paragrah_2 = "While the portal is being built, currently, we also provide professional research topic information, research consulting based on the customers’ needs.";
        let paragrah_3 = "Traditional chemistry industries are growing at a relatively low pace compared to the last several decades due to dramatic lifestyle changes and new technologies blooming. However, new technologies also strongly depend on traditional science research progress. So by crosslinking novel and traditional fields can make the most use of each subject to achieve maximum mutual benefit.";
      
        return (
            <div>
                <p className="text-section">{ paragrah_1 }</p>
                <p className="text-section">{ paragrah_2 }</p>
                <p className="text-section">{ paragrah_3 }</p>
            </div>
        );
    }
}

export default MainPageText;