import React, { useState } from 'react';
import DivinputR from '../Inputs/DivinputR';
import { sendrequest } from '../../functions';
import { useNavigate, useParams } from 'react-router-dom';

export const FormularioReservas = () => {
  const { id } = useParams(); // Obtén el parámetro 'id' de la URL
  const [cant_positions, setCant_positions] = useState('');
  const [id_client, setId_Client] = useState('');
  const [type_client, setTypeClient] = useState('');
  let method = 'POST';
  const go = useNavigate();

  const save = async (e) => {
    e.preventDefault();

    // Verificar si id está definido
    if (!id) {
      console.error('Error: id is undefined');
      // Puedes agregar lógica adicional aquí según tus necesidades
      return;
    }

    const res = await sendrequest(
      method,
      {
        cant_positions: cant_positions,
        id_client: id_client,
        type_client: type_client,
      },
      '/bookings/add/booking/'+ id+ '/first%20class',
      ''
    );

    if (method === 'POST' && res.status === true) {
      setCant_positions('');
      setId_Client('');
      setTypeClient('');
      go('flight/bookings/bill');
    }
  };

  return (
    <div className="form-outline mb-4">
      <form onSubmit={save}>
        <DivinputR
          type='number'
          icon='fa-building'
          value={cant_positions}
          className='form-control'
          placeholder='Cant_Positions'
          handleChange={(e) => setCant_positions(e.target.value)}
        />
        <DivinputR
          type='number'
          icon='fa-building'
          value={id_client}
          className='form-control'
          placeholder='Id_cliente'
          handleChange={(e) => setId_Client(e.target.value)}
        />
        <DivinputR
          type='text'
          icon='fa-building'
          value={type_client}
          className='form-control'
          placeholder='Tipo de Cliente'
          handleChange={(e) => setTypeClient(e.target.value)}
        />
        <div className='d-grid col-10 mx-auto'>
          <button className='btn btn-dark'>
            <i className='fa-solid fa-save'></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};