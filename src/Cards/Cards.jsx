import React from "react";

export default function ({ imagem, texto , texto1 , texto2, texto3, texto4, texto5 }) {
    return (
        <>
        <section className="Cards">
            <div className="Card">
                <img src={ imagem } alt="Icone de Perfil" />
                <div className="linha"></div>
                <div className="caixaTexto">
                <p>{ texto } </p>
                <p>{ texto1 } </p>
                <p>{ texto2 } </p>
                <p>{ texto3 } </p>
                <p>{ texto4 } </p>
                <p>{ texto5 } </p>
                </div>
            </div>
        </section>
        </>
    )
}