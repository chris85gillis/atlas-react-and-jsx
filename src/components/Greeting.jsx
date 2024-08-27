import React from 'react';
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

const Greeting = () => {
  const currentHour = new Date().getHours();
  let greetingText = '';
  let greetingImage = '';

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = 'Good Morning!';
    greetingImage = dayImage;
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingText = 'Good Afternoon!';
    greetingImage = dayImage;
  } else if (currentHour >= 17 && currentHour < 21) {
    greetingText = 'Good Evening!';
    greetingImage = eveningImage;
  } else {
    greetingText = 'Good Night!';
    greetingImage = nightImage;
  }

  return (
    <h1 className="greeting">
      <img src={greetingImage} alt={greetingText} />
      {greetingText}
    </h1>
  );
};

export default Greeting;