import React, {useState,useEffect} from 'react'
import { DivAdd } from '../../../../components/DivAdd'
import { Divtable } from '../../../../components/Divtable'
import {Link} from 'react-router-dom'
import {confirmation, sendrequest} from '../../../../functions'
import Card from '../card'
import image1 from '../../../../assets/Imagenes/P5GYBKZVNJMDDIX2I6CVENLTFQ.jpg'
export const StandartClass = () => {
  const [vuelos, setVuelos] = useState([])
  const [classLoad, setClassload] = useState('')
  const [classTable, setTable] = useState('')
  useEffect(()=>{
    getVuelos()
  }, [])
  const getVuelos = async () =>{
    const res =await sendrequest('GET','','/flight/get/flights/all/standart_class','')
    setVuelos(res)
    setTable('')
    setClassload('d-none')
  }
  const deleteVuelos= (id,name)=>{
    confirmation(name,('/flight/delete/flight/'+ id + '/standart%20class' ),'')

  }
  
  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='/flight/createStandart' className='btn btn-dark'>
          <i className='fa-solid fa-circle-plus '></i>
          Agregar</Link>
      </DivAdd>
      <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {vuelos.map(({id , origin,destination,date,positions,hour,cost }) => (
          <div className="col-md-4 col-sm-6" key={id}>
            <Card id={id} image={image1} origin={origin} destination={destination} date={date} positions={positions} hour={hour} cost={cost} />
            <Link to={'/flight/editStandart/' + {id}} className='btn btn-success'>
              <i className='fa-solid fa-edit'>Editar</i>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => deleteVuelos(id, origin, destination, date, positions, hour, cost)}
            >
              <i className="fa-solid fa-trash">Eliminar</i>
            </button>
            <Link to={'/flight/bookings/'} className='btn btn-primary'>
              <i className='fa-solid fa-edit'>Reservas</i>
            </Link>    
          </div>
        ))}
        </div>
      </div>

    </div>
  )
}
export default StandartClass