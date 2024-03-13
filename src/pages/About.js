import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-us-container">
     

      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit
          consectetur tellus, id efficitur orci. Suspendisse at justo et mauris
          dapibus eleifend non et ligula. Nulla facilisi. Proin euismod dapibus
          tellus nec aliquet. Integer ut dapibus justo, vel tincidunt elit.
        </p>
        <p>
          Vivamus aliquet orci sit amet risus ultrices, vel blandit libero
          sollicitudin. Maecenas interdum vitae dolor eu facilisis. Sed gravida
          neque a ante gravida, et hendrerit quam pellentesque.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default About;
