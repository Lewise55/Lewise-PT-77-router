import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CreateContact = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
        </div>
    );
}; 