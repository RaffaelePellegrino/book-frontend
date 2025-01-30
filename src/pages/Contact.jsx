export default function Contact() {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 white">Il nostro team</h2>
            <div className="row">
                {/* Card 1 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">Alessio Tinaglia</h5>
                            <p className="card-text text-center">Gestisco la strategia e la visione generale della piattaforma, assicurandomi che soddisfi le necessità degli utenti.</p>
                            <p className="card-text text-center">alessio@boolean.com</p>
                            <button className="btn btn-primary mt-auto">Contattami</button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">Giuseppe De Filippo</h5>
                            <p className="card-text text-center">Mi occupo di garantire che la piattaforma offra un'esperienza visiva attraente e intuitiva.</p>
                            <p className="card-text text-center">giuseppe@boolean.com</p>
                            <button className="btn btn-primary mt-auto">Contattami</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">Luigi Maria Raciti</h5>
                            <p className="card-text text-center">Mi occupo di progettare l'interfaccia utente, creando un'esperienza facile da usare e visivamente piacevole.</p>
                            <p className="card-text text-center">luigi@boolean.com</p>
                            <button className="btn btn-primary mt-auto">Contattami</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">Raffaele Pellegrino</h5>
                            <p className="card-text text-center">Mi occupo dello sviluppo front-end, implementando le funzionalità e l'interazione dell'utente.</p>
                            <p className="card-text text-center">raffaele@boolean.com</p>
                            <button className="btn btn-primary mt-auto">Contattami</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">Davide Rigamonti</h5>
                            <p className="card-text text-center">Mi occupo di garantire che il sistema backend funzioni in modo efficiente e sicuro per tutti gli utenti.</p>
                            <p className="card-text text-center">davide@boolean.com</p>
                            <button className="btn btn-primary mt-auto">Contattami</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}