import React from 'react';
import { Link } from 'react-router-dom';

const Vuelos = () => {
  return (
    <div className="container">
      <h2 className="my-4">Vuelos</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Vuelo Estándar</h5>
              <p className="card-text">Explora los vuelos estándar disponibles.</p>
              <Link to="standart" className="btn btn-success mr-3">
                Ver Vuelos Estándar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Primera Clase</h5>
              <p className="card-text">Descubre los vuelos de primera clase disponibles.</p>
              <Link to="first" className="btn btn-danger">
                Ver Vuelos de Primera Clase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vuelos;