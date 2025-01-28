import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/FormComponent';
function bookDetail() {
    const { id } = useParams();
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Libro non trovato');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center">Caricamento...</div>;
    }
    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">{books.title}</h1>
            <div className="row ">
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="movie-image rounded-lg" src={`/${books.image}`} style={{ width: 'auto', height: '500px' }} />
                </div>
                <div className="col-md-6">
                    <h3 className='mt-5'>Recensione Libro :</h3>
                    <p>{books.abstract}</p>
                    <h3 className="mt-4 mb-4">Recensioni Utenti :</h3>
                    <div className="list-group">
                        {books.reviews.length > 0 ? (
                            books.reviews.map((review) => (
                                <div key={review.id} className="list-group-item bg-light">
                                    <strong>{review.name}</strong>: {review.text}
                                    <h6><strong>Data di Pubblicazione : </strong>{review.created_at}</h6>
                                    <h6><strong>Voto : </strong>{review.vote}</h6>
                                </div>
                            ))
                        ) : (
                            <p>Non ci sono recensioni per questo film.</p>
                        )}
                    </div>
                </div>
            </div>
            <FormComponent bookId={id} />

        </div>
    );
}
export default bookDetail;