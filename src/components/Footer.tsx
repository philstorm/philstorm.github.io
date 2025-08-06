// src/components/Footer.tsx
import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import '../assets/styles/Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <a href="https://github.com/philstorm" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/phillipafuwape" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
      </div>
      <p>
        A portfolio designed & built by <strong>Phillip Afuwape</strong> with 💜
      </p>
    </footer>
  );
}
