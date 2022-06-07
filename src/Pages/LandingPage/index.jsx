import "./styles.css";
import BG from "../../imgs/referenceBG.jpg";
import RippedPaper from "../../imgs/ripped-paper.png";
const LandingPage = () => {
  return (
    <div id="landingPage">
      <div className="main">
        <div className="text">
          <h2>COMFERÊNCIA</h2>
          <h1>Reference</h1>
          <h3>LUCAS 21: 20-22</h3>
        </div>
        <button>Eu Vou</button>
        <span>Rua vellho Cassiano 132, Palhada</span>
      </div>
      <img className="rippedPaperTop" src={RippedPaper} alt="Papel rasgado" />
      <img
        className="rippedPaperBottom"
        src={RippedPaper}
        alt="Papel rasgado"
      />
      <img className="backGround" src={BG} alt="backGround reference" />
    </div>
  );
};
export default LandingPage;
