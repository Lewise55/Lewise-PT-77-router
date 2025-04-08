import { fetchAgenda } from "./hooks/actions";

export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ], 
    agenda: null,
    contacts: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_agenda':
      return {
        ...store,
        agenda: action.payload.agenda,
        contacts: action.payload.contacts,
      };

    case 'get_contacts':
      return {
        ...store,
        contacts: action.payload.contacts,
      };

    // case 'create_contact':
    //   return {
    //     ...store,
    //     contacts: useActionState.payload.contacts,
    // };

    // case 'update_contact':
    //   return {
    //     ...store,
    //     contacts: useActionState.payload.contacts,
    // };

    // case 'delete_contact':
    //   return {
    //     ...store,
    //     contacts: useActionState.payload.contacts,
    // };
          
        
    default:
      throw Error('Unknown action.');
  }    
}
