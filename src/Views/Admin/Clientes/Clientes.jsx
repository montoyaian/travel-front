import React from 'react'
import { Link } from 'react-router-dom'
export const Clientes = () => {
  return (
    <div className="container mt-5">
    <h2 className="my-4 text-center">Clientes</h2>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Clientes Estándar</h5>
            <p className="card-text">Descripción de clientes estándar.</p>
            <Link to="clientstandart" className="btn btn-success btn-lg mr-3">
              Ver Cliente
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Clientes Premium</h5>
            <p className="card-text">Descripción de clientes premium.</p>
            <Link to="clientpremium" className="btn btn-danger btn-lg">
              Ver Cliente
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Clientes
