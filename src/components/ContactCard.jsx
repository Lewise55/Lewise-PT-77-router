import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactCard = (props) => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div class="card">
            <div class="card-body">
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col-2 text-center">
                            <img />
                        </div>
                        <div class="col-8 text-start">
                            <h5 className="card-title">props.name</h5>
                            <p className="card-text">props.phone</p>
                            <p className="card-text">props.email</p>
                            <p className="card-text">props.address</p>
                        </div>
                        <div class="col-2 text-center">
                            <div className="d-flex mx-5">
                                <button className="mx-3">
                                    <span className="icons"></span>
                                </button>
                                <button className="mx-5">
                                    <span className="icons"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
}; 