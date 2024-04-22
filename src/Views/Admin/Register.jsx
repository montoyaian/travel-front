import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { sendrequest } from '../../functions'
import DivinputRegister from '../../components/Inputs/DivinputRegister'
export const Register = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const go = useNavigate()
  const register= async(e) =>{
    e.preventDefault()
    const form ={name:name,user:username, password:password}
    console.log(form)
    const res = await sendrequest('POST ',form, '/login','', false)
    if(res){
      go('/Login')
    }
  }
  return (

    <div className="form-outline mb-4">
      <form onSubmit={register}>
      <DivinputRegister   type='text' icon='fa-user' value={name} className='form-control' placeholder='Name' required='required'
          handleChange={(e) => setName(e.target.value)} />
        <DivinputRegister type='username' icon='fa-at' value={username} className='form-control' placeholder='Username' required='required'
          handleChange={(e) => setUsername(e.target.value)} />
        <DivinputRegister type='username' icon='fa-at' value={password} className='form-control' placeholder='Password' required='required'
          handleChange={(e) => setPassword(e.target.value)} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check mb-0">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label className="form-check-label" htmlFor="form2Example3">
            </label>
          </div>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
        </div>
      </form>
    </div>
  )
}
export default Register