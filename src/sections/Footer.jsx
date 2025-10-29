import { getAssetPath } from '../utils';


const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/HaifaAljundi" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={getAssetPath('assets/github.svg')} alt="GitHub" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/haifa-jundi/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={getAssetPath('assets/linkedin-dark.svg')} alt="LinkedIn" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© 2025 Haifa Aljundi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
