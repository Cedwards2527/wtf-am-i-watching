import "./Footer.css";
import tiktokIcon from "../../assets/tiktok.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p>Developed by Charles Edwards</p>
      </div>

      <div className="footer__right">
        <a
          href="https://www.tiktok.com/@wtf_am_i_watching_now"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktokIcon} alt="TikTok" className="tiktok__icon" />
        </a>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
