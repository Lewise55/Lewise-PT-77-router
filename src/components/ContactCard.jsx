import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from "react-router-dom";

export const ContactCard = ({contact}) => {

  const {store, dispatch, deleteContact} =useGlobalReducer()
  

    return (
        <div className="card">
            <div className="card-body">
                <div className="container-fluid text-center">
                    <div className="row align-items-start">
                        <div className="col-3 text-center ">
                            <h1><FontAwesomeIcon icon={faCircleUser} /></h1>
                        </div>
                        <div className="col-6 text-start">
                            <h5 className="card-title">{contact.name}</h5>
                            <p className="card-text">{contact.phone}</p>
                            <p className="card-text">{contact.email}</p>
                            <p className="card-text">{contact.address}</p>
                        </div>
                        <div className="col-3 text-center">
                            <div className="d-flex mx-5">
                                <button className="btn btn-danger mx-5">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <Link 
                                    className="btn btn-success" 
                                    to={`/update/${contact.id}`}> <FontAwesomeIcon icon={faPencil} /> 
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 