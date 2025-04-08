export const fetchAgenda = async (dispatch, payload) => {
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
export const createAgenda = async (dispatch, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55", {
        method: "POST",
        headers: { "Content-type": "application/json" }
    });

    let data = await responce.json()
    fetchAgenda(dispatch);

}

export const getContacts = async (dispatch, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts");
    let data = await responce.json();

    // get contacts 
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts},
    });
}

export const createContact = async (dispatch, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        })
    });
    let data = await responce.json();

    // // create contacts 
    // dispatch({
    //     type: "create_contact",
    //     payload: {contacts: data.contacts},
    // });
    getContacts(dispatch)
}

export const updateContact = async (dispatch, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts/"+payload, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            "name": "string",
            "phone": "string",
            "email": "string",
            "address": "string"
        })
    });
    let data = await responce.json();

    // update contacts 
    // dispatch({
    //     type: "update_contact",
    //     payload: {contacts: data.contacts},
    // });

    // updateContact(dispatch);
}

export const deleteContact = async (dispatch, payload) => {
    let responce = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts/id", {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: {}
    });
    let data = await responce.json();

    // get contacts 
    // dispatch({
    //     type: "delete_contact",
    //     payload: {contacts: data.contacts},
    // });

    // deleteContact(dispatch);
};