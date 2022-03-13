
import Menu from "./Menu";
// img
import InstagramIcon from '../images/ig-icon.png';
import FacebookIcon from '../images/fb-icon.png';
import TwitterIcon from '../images/twitter-icon.png';
import YTIcon from '../images/yt-icon.png';
import SCIcon from '../images/sc-icon.png';

function LinkImage({ link, imgLink }) {
  return (
    <div>
      <a href={link}>
        <img  className='soc-media-image' src={imgLink} />
      </a>
    </div>
  );
}

function LinkToMedia() {
  return(
    <div className="footer-image-row">
      <LinkImage
        link={'https://www.instagram.com/'}
        imgLink={InstagramIcon} />
      <LinkImage
        link={'https://www.facebook.com/'}
        imgLink={FacebookIcon} />
      <LinkImage
        link={'https://www.twitter.com/'}
        imgLink={TwitterIcon} />
      <LinkImage
        link={'https://www.youtube.com/'}
        imgLink={YTIcon} />
      <LinkImage
        link={'https://www.soundcloud.com/'}
        imgLink={SCIcon} />          
    </div>       
  );
}

function TermsPolicy() {
  return(
    <div  className="footer-col">
      <p id="none">--none--</p>
      <div className="terms-policy">
        <a>TERMS OF USE</a>
        <p className="dot">{'\u2B24'}</p>
        <a>PRIVACY POLICY</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-content">
        <TermsPolicy />     
        <Menu />
        <LinkToMedia />
      </div>
    </div>    
  );
}

export default Footer;
