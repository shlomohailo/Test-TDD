import "./layers.css";

function Layers(props) {
  return (
    <div className="layers" data-testid="layrsId">
      ssss
        <h1  data-testid="layersNumberKids">{props.numberKids}</h1>
        <h1 data-testid="layersClassKids">{props.class}</h1>
        <h1 data-testid="layersNameTeacher">{props.nameTeacher}</h1> 
    </div>
  );
}

export default Layers;
