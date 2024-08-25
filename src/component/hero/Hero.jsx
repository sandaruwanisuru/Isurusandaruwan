import './Hero.css';
import back from '../../assets/back.png';
import DownloadIcon from '@mui/icons-material/Download';
import resume from '../../assets/K.G.I Sandaruwan- resume.pdf';

const Hero = () => {
  const downloadPDF = () => {
    const pdfUrl = resume;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="textContainer">
          <div className="texts">
            <p className="heroName">
              I' am Isuru <br /> Sandaruwan
            </p>
            <p className="heroRole">Frontend Web Developer</p>
          </div>
          <div className="bioData" download="MyExampleDoc">
            <button onClick={downloadPDF} className="bioButton">
              Download CV
              <DownloadIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div className="imageContainer">
          <img src={back} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
