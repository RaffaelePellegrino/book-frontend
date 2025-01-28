import { useState } from "react";
import axios from "axios";


function FormComponent({ bookId }) {

    const [input, setInput] = useState({
        name: "",
        vote: "",
        text: "",
    });
    //gestisce i cambiamenti nei campi di input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault(); //evita il refresh della pagina
        axios.post(`http://localhost:3000/${bookId}/reviews`, input)
            .then((response) => {
                setInput({ name: "", vote: "", text: "" });
            })
            .catch((error) => {
                console.error("errore", error);
            })
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">nome</span>
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    name="name"
                    value={input.name}
                    onChange={handleChange} // gestisce il cambiamento
                />

            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">voto</span>
                <input type="number"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    name="vote"
                    value={input.vote}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">testo</span>
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    name="text"
                    value={input.text}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">inserisci</button>
        </form>
    )

}


export default FormComponent;