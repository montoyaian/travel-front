import React, { useState, useEffect } from 'react'
import { DivAdd } from '../../../components/DivAdd'
import { Divtable } from '../../../components/Divtable'
import Pagination from '../../../components/Pagination'
import { confirmation, sendrequest } from '../../../functions'
import { Link } from 'react-router-dom'
export const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [classLoad, setClassload] = useState('');
    const [classTable, setTable] = useState('');
    const [page, setPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);

    useEffect(() => {
        getOffers();
    }, [page, postsPage]);

    const getOffers = async () => {
        const res = await sendrequest('GET', page, '/offers/get/offers/all', '');
        setOffers(res);
        setTable('');
        setClassload('d-none');
    };

    const deleteOffers = (id, name) => {
        confirmation(name, ('/offers/delete/offer/' + id), '');
    };

    const offset = (page - 1) * postsPage;

    return (
        <div className="container-fluid">
            <DivAdd>
                <Link to="/createClientpremium" className="btn btn-dark">
                    <i className="fa-solid fa-circle-plus"></i> Agregar
                </Link>
            </DivAdd>
            <Divtable col="6" off="3" classLoad={classLoad} classTable={classTable}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Bookings</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {offers.slice(offset, offset + postsPage).map((row, i) => (
                            <tr key={row.id}>
                                <td>{offset + i + 1}</td>
                                <td>{row.Id_flight}</td>
                                <td>{row.Discount}</td>
                                <td>{row.Customer_type}</td>
                                <td>{row.Flight_type}</td>
                                <td>
                                    <Link to={'/edit/' + row.id} className="btn btn-warning">
                                        <i className="fa-solid fa-edit">Editar</i>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteOffers(row.id, row.name, row.contact, row.Description)}
                                    >
                                        <i className="fa-solid fa-trash">Eliminar</i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination total={offers.length} postsPage={postsPage} setPage={setPage} />
            </Divtable>
        </div>
    );
}
export default Offers
