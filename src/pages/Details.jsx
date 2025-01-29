import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/FormComponent';
import 'font-awesome/css/font-awesome.min.css';
// import 'animate.css';

function bookDetail() {
    const { id } = useParams();
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
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
        return <div className="text-center text-white animate__animated animate__fadeIn">Caricamento...</div>;
    }
    if (error) {
        return <div className="text-center text-danger animate__animated animate__shakeX">{error}</div>;
    }

    const renderStars = (vote) => {
        const fullStars = Math.floor(vote);
        const emptyStars = 5 - fullStars;
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fa fa-star text-warning animate__animated animate__pulse animate__infinite"></i>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="fa fa-star-o text-muted"></i>);
        }
        return stars;
    };

    return (
        <div className="container py-5 animate__animated animate__fadeIn">
            <h1 className="text-center mb-4 text-white display-4 fw-bold border-bottom pb-3">{books.title}</h1>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img
                        className="movie-image rounded-lg shadow-lg img-fluid animate__animated animate__zoomIn"
                        src={`/${books.image}`}
                        style={{ maxHeight: '500px', transition: 'transform 0.3s' }}
                        alt={books.title}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </div>
                <div className="col-md-6">
                    <h3 className='mt-5 text-white fw-bold'>Recensione Libro:</h3>
                    <p className='text-white lead'>{books.abstract}</p>
                    <h3 className="mt-4 mb-4 text-white fw-bold">Recensioni Utenti:</h3>
                    <div className="list-group">
                        {books.reviews.length > 0 ? (
                            books.reviews.map((review) => (
                                <div key={review.id} className="list-group-item bg-light shadow-sm p-3 mb-3 rounded animate__animated animate__fadeInUp">
                                    <strong className="d-block">{review.name}</strong>
                                    <p className="mb-1">{review.text}</p>
                                    <h6><strong>Data di Pubblicazione:</strong> {review.created_at}</h6>
                                    <h6><strong>Voto:</strong> {renderStars(review.vote)}</h6>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">Non ci sono recensioni per questo libro.</p>
                        )}
                    </div>
                </div>
            </div>
            <FormComponent bookId={id} />
        </div>
    );

}
export default bookDetail;