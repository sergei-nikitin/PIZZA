import React from 'react';

import s from '../scss/Footer.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
    <footer>
      {/* className={s.iconsContainer} */}

      <div>
        <a href="https://www.linkedin.com/in/sergei-nikitin-b259b5169/">
          <LinkedInIcon className={s.icon} />
        </a>
        <a href="https://github.com/sergei-nikitin">
          <GitHubIcon className={s.icon} />
        </a>
        <a href="https://t.me/Nikitin_S_D">
          <TelegramIcon className={s.icon} />
        </a>
      </div>
      <p className={s.text}>&#169; 2022</p>
      <div>
        <a href="mailto:S.Dm.Nikitin@gmail.com">
          <AlternateEmailIcon className={s.icon} />
        </a>

        <a href="tel:+380936435892">
          <CallIcon className={s.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
