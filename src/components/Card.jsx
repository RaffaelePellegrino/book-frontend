import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Button.css"
function Card() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000/books')
            .then(response => {
                console.log(response.data)
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella richiesta:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Caricamento...</div>;
    }
    return (
        <div className="movies-list p-5  ">
            <h1 className='text-white text-center'>Lista dei Libri</h1>
            <div className='d-flex gap-3 flex-wrap justify-content-center' >
                {books.map((book) => (
                    <div key={book.id} className='card-custom' style={{ width: '18rem', }}>
                        <img src={`/${book.image}`} style={{ width: '100%', height: '350px' }} />
                        <div className="card-body p-3">
                            <h5 className='text-center'>{book.title}</h5>
                            <p className='text-center'>{book.author}</p>
                        </div>
                        <NavLink className='btn btn-custom m-3 ' to={`/${book.id}`}>Dettagli e recensioni </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Card;