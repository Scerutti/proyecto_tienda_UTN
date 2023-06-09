import Card from "../../components/card/Card"
import "./cardcontainer.css"

const CardContainer = ({ products }) => {
    return (
        <div className="card-container">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default CardContainer;
