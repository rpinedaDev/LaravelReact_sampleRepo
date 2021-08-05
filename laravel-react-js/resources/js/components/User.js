import React from 'react';
import ReactDOM from 'react-dom';

function User() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React Component in Laravel</h2></div>

                        <div className="card-body">I'm tiny React component in Laravel app!</div>

                        <button type="button" class="btn btn-primary" style={{ backgroundColor: "red" }}>nanay mo Primary</button>
                        <button type="button" class="btn btn-primary" style={{ backgroundColor: "blue" }}>anak mo Primary</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}