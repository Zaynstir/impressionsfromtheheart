import react from 'react';


const FaultyPage = () => {
    return (
        <div className="offset">
            <div>
                <div id="Landing">
                    <div className="landing">
                        <div className="home-wrap">
                            <div className="home-inner">

                            </div>
                        </div>
                    </div>

                    <div className="caption text-center d-flex justify-content-center">
                        <div className="card pl-4 pr-4 pb-4 pt-4" style={{ "color": "black", width: "75%", border: "4px solid red", 'text-transform': 'none' }}>
                            <h2>ERROR 404</h2>
                            <hr />
                            <h4>
                                The page you are looking for does not exist.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaultyPage;