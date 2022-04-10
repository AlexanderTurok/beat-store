
import LinkImageTemplate from './LinkImageTemplate';
// images
import InstagramIcon from '../../images/ig-icon.png';
import FacebookIcon from '../../images/fb-icon.png';
import TwitterIcon from '../../images/twitter-icon.png';
import YTIcon from '../../images/yt-icon.png';
import SCIcon from '../../images/sc-icon.png';

function LinkImage() {
  return(
    <div className="footer-image-row">
      <LinkImageTemplate
        link={'https://www.instagram.com/'}
        imgLink={InstagramIcon} />
      <LinkImageTemplate
        link={'https://www.facebook.com/'}
        imgLink={FacebookIcon} />
      <LinkImageTemplate
        link={'https://www.twitter.com/'}
        imgLink={TwitterIcon} />
      <LinkImageTemplate
        link={'https://www.youtube.com/'}
        imgLink={YTIcon} />
      <LinkImageTemplate
        link={'https://www.soundcloud.com/'}
        imgLink={SCIcon} />          
    </div>       
  );
}

export default LinkImage;
