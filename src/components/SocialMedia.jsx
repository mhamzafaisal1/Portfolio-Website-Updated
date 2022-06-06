import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/muhammad-hamza-faisal-98465b1b0/' target="_blank" rel='noreferrer'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://twitter.com/HamzaFaisal_20' target="_blank" rel='noreferrer'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://docs.google.com/document/d/1WmNAunVYcmGQP_ujow9K8WiI13-ORo7u05slX_Id4FM/edit' target="_blank" rel='noreferrer'>
        <HiDocumentText />
      </a>
    </div>
  </div>
);

export default SocialMedia;
