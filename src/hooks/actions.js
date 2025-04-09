export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55");
    let data = await response.json();

    // if agenda doesn't exist
    if(data.detail == `Agenda "Lewise55" doesn't exist.`){
        createAgenda();
    }

    // dispatch data.details
    dispatch({
        type: "set_agenda",
        payload: {agenda: data.slug, contacts: data.contacts},
    });

}

// Create new agenda
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55", {
        method: "POST",
        headers: { "Content-type": "application/json" }
    });

    let data = await response.json()

    // fetch data when agenda is created
    fetchAgenda(dispatch);

}
// fetches cotacts in agenda
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts");
    let data = await response.json();

    // Disbatch contacts to global state 
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts},
    });
}
// Adds new contact to agenda
export const createContact = async (dispatch, payload) => {
    let inputName = payload.name;
    let inputPhone = payload.phone;
    let inputEmail = payload.email;
    let inputAddress = payload.address;
    
    let response = await fetch("https://playground.4geeks.com/contact/agendas/Lewise55/contacts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            "name": inputName,
            "phone": inputPhone,
            "email": inputEmail,
            "address": inputAddress
        })
    });
    // let data = await response.json();
    getContacts(dispatch);

}
// updates contacts
export const updateContact = async (dispatch, payload) => {
    let updatedName = payload.name;
    let updatedPhone = payload.phone;
    let updatedEmail = payload.email;
    let updatedAddress = payload.address;
    let id = payload.id;

    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Lewise55/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            "name": updatedName,
            "phone": updatedPhone,
            "email": updatedEmail,
            "address": updatedAddress
        })
    });
    let data = await response.json();
    getContacts(dispatch);
    
}

export const deleteContact = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Lewise55/contacts/${payload}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });
    let data = await response.json();
    getContacts(dispatch);

};