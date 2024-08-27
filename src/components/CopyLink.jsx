import React from 'react';
import copyIcon from '../assets/copy.svg';

const CopyLink = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <img
      src={copyIcon}
      alt="Copy link"
      className="copy"
      onClick={copyToClipboard}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default CopyLink;