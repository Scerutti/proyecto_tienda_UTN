import { getFormatPrice } from "../../shared/functions";
import "./card.css"

const Card = ({ name, price }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{getFormatPrice(price)}</p>
            <button>Ver Detalle</button>
        </div>
    );
};

export default Card;
