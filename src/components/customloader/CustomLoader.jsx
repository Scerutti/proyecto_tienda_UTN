import "./customloader.css"

const CustomLoader = ({text= "Cargando..."}) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">&nbsp;{text}</p>
    </div>
  );
}

export default CustomLoader