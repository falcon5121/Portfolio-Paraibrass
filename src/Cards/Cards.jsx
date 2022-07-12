import React from "react";

export default function ({imagem, texto}) {
    return (
        <>
        <section className="Cards">
            <div className="Card">
                <img src={ imagem } alt="Icone de Perfil" />
                <div className="linha"></div>
                <p>{ texto } </p>
            </div>
        </section>
        </>
    )
}