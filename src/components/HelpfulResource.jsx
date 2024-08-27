import React from 'react';
import OpenLink from './OpenLink';
import CopyLink from './CopyLink';
import './HelpfulResource.css';

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
};

export default HelpfulResource;