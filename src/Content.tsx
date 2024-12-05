import './styles.css'
interface ContentProps {
  nombre: string;
  img: string;
  time: string;
  descripcion: string;

} 


const Content = ({nombre, img, time, descripcion}: ContentProps) =>  {
    return (
        <div className="content">
          <div className="line"></div>
          <div className="item">
            <div className="avatar">
              <img
                alt={nombre}
                src={`/images/${img}.jpg`}
              />
            </div>
            <span className="time">{time}</span>
            <p>{descripcion}</p>
          </div>
      </div>
    );
}

export default Content
