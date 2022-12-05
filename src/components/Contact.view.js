import React from "react";
import PropTypes from "prop-types";

const Contact = ({contact}) => (
    <div >
        <div key={contact.id}>
            <div class="col m-0 row justify-content-center">
                <div class="card h-100 w-50">
                    <div class="card-body pb-0">
                        <div class="row mb-2">
                            <div class="col W-50">
                                <h3> Comentario {contact.id} </h3>{" "}
                                <p>
                                Nombre: {contact.name}
                                </p>
                                <p>
                                Apellido: {contact.lastname}
                                </p>
                                <p>
                                Email: {contact.email}
                                </p>
                                <p>
                                Empresa: {contact.business}
                                </p>
                                <p>
                                Puesto: {contact.position}
                                </p>
                                <p>
                                Comentario: {contact.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Contact.propTypes = {
    contact: PropTypes.object
}

export default Contact;