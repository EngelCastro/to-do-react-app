import './Footer.css';

type Props = {
  valor: number;
  realized: number;
}

const Footer = (props: Props) => {

  const {valor, realized} = props

  return (
    <div className="footer-container">
      <div className="tag">
        <label className="lbl-tag">All</label>
        <div className="container-valor">
          <span className="valor">
            {valor}
          </span>
        </div>
      </div>
      <div className="tag">
        <label className="lbl-tag">Realized</label>
        <div className="container-valor">
          <span className="valor">
            {realized}
          </span>
        </div> 
      </div>
    </div>
  );
}

export default Footer;