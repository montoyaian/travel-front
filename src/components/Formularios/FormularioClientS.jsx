import React,{useEffect,useState} from 'react'
import { sendrequest } from '../../functions';
import DivinputClientS from '../Inputs/DivinputClientS';
export const FormularioClientS = (params) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [bookings, setBookings] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let method= 'POST'
    let url= '/clients/add/standartclient'
    let redirect = '/client/clientstandart'
    useEffect(()=> {
        getSupplier()
    },)
    const getSupplier = async () => {
        if (params.id !== null) {
          const res = await sendrequest('GET', '', ('/clients/get/clients/all/standart_client' + params.id));
          if (res && res.data) {
            setName(res.data.name || '');
            setContact(res.data.contact || '');
            setDescription(res.data.description || '');
          }
        }
      };
    const save= async(e) =>{
        e.preventDefault()
        if(params.id !== null){
            method='PUT'
            url='/clients/edit/standartclient/' + params.id
            redirect='/client/clientstandart'
        }
        const res= await sendrequest(method, {name:name, contact:contact , bookings:bookings, email:email, password:password} ,url, redirect)
        if(method == 'POST' && res.status == true){
            setName('')
            setContact('')
            setDescription('')
            redirect='/client/clientstandart'

        }
    }
  return (
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md-4 offset-md-4'>
                <div className='card border border-info'>
                    <div className='card-header bg info border border border-info'>
                        {params.title}
                    </div>
                    <div className='card-body'>
                          <form onSubmit={save}>
                          <DivinputClientS type='text' icon='fa-building' 
                            value={name} className='form-control' placeholder='Name'  handleChange={(e) =>setName(e.target.value)} /> 
                            <DivinputClientS type='text' icon='fa-building' 
                            value={contact} className='form-control' placeholder='Contact' handleChange={(e) =>setContact(e.target.value)} /> 
                            <DivinputClientS type='text' icon='fa-building' 
                            value={bookings} className='form-control' placeholder='Description'  handleChange={(e) =>setBookings(e.target.value)} /> 
                            <DivinputClientS type='text' icon='fa-building' 
                            value={email} className='form-control' placeholder='Description'  handleChange={(e) =>setEmail(e.target.value)} /> 
                            <DivinputClientS type='text' icon='fa-building' 
                            value={password} className='form-control' placeholder='Description'  handleChange={(e) =>setPassword(e.target.value)} /> 
                             <div className='d-grid col-10  mx-auto'>
                            <button className='btn btn-dark'>
                                <i className='fa-solid fa-save'></i>
                                 Guardar</button>
                          </div>
                          </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
export default FormularioClientS
