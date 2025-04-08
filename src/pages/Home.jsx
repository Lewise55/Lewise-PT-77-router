import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const {store, dispatch, fetchAgenda} =useGlobalReducer();
  const [contacts, setContacts] = useState([]);

  useEffect (() => {
	fetchAgenda();
  }, [])

  useState (() => {
	setContacts(store.contacts);
  }, [store.contacts])

  console.log(contacts);
  

	return (
		<div className="text-center mt-5">
			{
				contacts?.length > 0 
				? contacts.map((contacts, index) => {
					return (
						<ContactCard key={index} name={contacts.name} phone={contacts.phone} email={contacts.email} address={contacts.address}/>
					);
				})
				
				: <h1> You need contacts, babe</h1>
			}
		</div>
	);
}; 