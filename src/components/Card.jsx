import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Card() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000')
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
        <div className="movies-list p-5">
            <h1 >Lista dei Film</h1>
            <div className='d-flex gap-3 flex-wrap justify-content-center' >
                {books.map((book) => (
                    <div key={book.id} style={{width: '18rem',backgroundColor: 'grey', borderRadius: '5px'}}>
                        <img src={`/${book.image}`} style={{width: '100%', height: '350px'}} />
                        <div className="card-body p-3">
                            <h5 >{book.title}</h5>
                            <p >{book.author}</p>
                        </div>
                        <NavLink className='btn btn-primary m-3' to={`/${book.id}`}>Dettagli e recensioni </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;