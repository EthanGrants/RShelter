import React from 'react';

const iframeStyle = {
    marginTop: '50px', // Adjust the margin top as needed
  };

function Transportation() {
  return (
    <div>
      <iframe
        title="Riverside Transit"
        src="https://www.riversidetransit.com/index.php/riding-the-bus/plan-my-trip"
        width="100%"
        height="600px"
        style = {iframeStyle}
      />
    </div>
  );
}

export default Transportation;
