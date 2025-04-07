import { json } from "react-router-dom";

export const fetchAgenda = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55");
    let data = await responce.json();

    // if agenda doesn't exist
    if(data.detail == 'Agenda "Lewise55" does not exist'){
        createAgenda();
    }

    // dispatch data.details
    dispatch({
        type: "set_agenda",
        payload: {agenda: data.slug, contacts: data.contacts},
    });

}
export const createAgenda = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55", {
        method: "POST",
        headers: {"constent-type": "application/json"}
    });

    let data = await responce.json()
    fetchAgenda()

}

export const getContacts = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts");
    let data = await responce.json();

    // get contacts 
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts},
    })
}

export const createContacts = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts", {
        method: "POST",
        headers: {"constent-type": "application/json"},
        body: {
            "name": "string",
            "phone": "string",
            "email": "string",
            "address": "string"
        }
    });
    let data = await responce.json();

    // create contacts 
    dispatch({
        type: "create_contacts",
        payload: {contacts: data.contacts},
    })
}

export const updateContacts = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts/", {
        method: "PUT",
        headers: {"constent-type": "application/json"},
        body: {
            "name": "string",
            "phone": "string",
            "email": "string",
            "address": "string"
        }
    });
    let data = await responce.json();

    // update contacts 
    dispatch({
        type: "update_contacts",
        payload: {contacts: data.contacts},
    })
}

export const deleteContacts = async (dispatchEvent, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts/", {
        method: "DELETE",
        headers: {"constent-type": "application/json"},
        body: {}
    });
    let data = await responce.json();

    // get contacts 
    dispatch({
        type: "delete_contacts",
        payload: {contacts: data.contacts},
    })
};