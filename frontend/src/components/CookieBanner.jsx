import { useState } from 'react'

export default function CookieBanner() {
    const [show, setShow] = useState(true)

    if (!show) return null

    return (
        <div className="bg-dark text-white p-3 fixed-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <p className="mb-0 ma-2">
                    Usamos cookies para mejorar tu experiencia. <a href="/politica-cookies" className="text-warning">Política de cookies</a>
                </p>
                <button className="btn btn-warning btn-sm" onClick={() => setShow(false)}>
                    Aceptar
                </button>
            </div>
        </div>
    )
}