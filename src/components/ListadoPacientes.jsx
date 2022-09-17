import React from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ( { pacientes, setPaciente, eliminarPaciente } ) => {

  if(pacientes.length === 0){
    return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
    <p className='text-xl mt-5 mb-10 text-center'>
      Comience agregando sus Pacientes {""}
      <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
    </p>
  </div>)
  } else {
    return (
      <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Administra tus {""}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>
        {
          pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ) )
        }
      </div>
    )}
  }

export default ListadoPacientes;