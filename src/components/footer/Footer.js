
import Menu from "../navbar/Menu";
import TermsPolicy from "./TermsPolicy";
import LinkImage from "./LinkImage";

function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-content">
        <TermsPolicy />     
        <Menu />
        <LinkImage />
      </div>
    </div>    
  );
}

export default Footer;
