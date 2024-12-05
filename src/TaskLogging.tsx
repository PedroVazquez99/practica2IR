import React from 'react';
import Header from './Header';
import Content from './Content';

const TaskLogging: React.FC = () =>  {
    return (
      <>
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Registro de tareas"></Header>
          {/* <Header title="Perfil"></Header>
          <Header title="Preferencias"></Header>
          <Header title="Chat"></Header> */}
          <Content nombre='Quica' img='quica' time='Hace una hora' descripcion='Me voy' ></Content>
          <Content nombre='Curro' img='curro' time='Hace dos horas' descripcion='Adiós, me piro' ></Content>
          <Content nombre='Francisca' img='francisca' time='Hace un minuto' descripcion='Me voy' ></Content>
          <Content nombre='Paco' img='paco' time='Hace tres horas' descripcion='Me tengo que ir' ></Content>
        </div>
      </div>
      </>
    );
}

export default TaskLogging;
