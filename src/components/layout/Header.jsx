import React from 'react'

function Header() {
    return (
        <div className="header d-flex justify-content-center py-2 shadow-sm">
            <a href="/home.html">
                <h5 className="font-weight-bold text-dark mx-3">Diseño de Soluciones</h5>
            </a>
            <div className="ml-auto">
                <a href="./signin.html">
                    <button className="btn btn-danger btn-sm mr-5">Login</button>
                </a>
                <a href="./signup.html">
                    <button className="btn btn-danger btn-sm mr-5">Sign up</button>
                </a>
                <button className="btn btn-danger btn-sm mx-2"></button>
            </div>
        </div>
    )
}

export default Header
