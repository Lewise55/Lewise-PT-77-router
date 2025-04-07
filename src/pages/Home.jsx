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

  console.log(store.agenda);
  

	return (
		<div className="text-center mt-5">
			<div >
				<ContactCard />
			</div>	
		</div>
	);
}; 