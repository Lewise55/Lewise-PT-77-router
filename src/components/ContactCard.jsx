import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

export const ContactCard = (props) => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="card">
            <div className="card-body">
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col-2 text-center">
                            <img />
                        </div>
                        <div className="col-8 text-start">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.phone}</p>
                            <p className="card-text">{props.email}</p>
                            <p className="card-text">{props.address}</p>
                        </div>
                        <div className="col-2 text-center">
                            <div className="d-flex mx-5">
                                <button className="btn btn-danger mx-5">
                                    <FontAwesomeIcon icon={faTrash} /> 
                                </button>
                                <Link className="btn btn-success" to={"/update"}> <FontAwesomeIcon icon={faPencil} /> </Link>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
}; 