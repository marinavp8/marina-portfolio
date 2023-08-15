import react from 'react'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Marina</h1>
            <p className=" text-base md:text-sl mb-3 font-medium">Web developer & Marketing strategist</p>
            <p className="text sm max-w-xs mb-6 font-bold text-justify">
                Hola! Soy Marina, una creativa del siglo 21. Me embarqué en la fascinante travesía del marketing, me sumergí en las profundidades del diseño web, y ahora estoy navegando por las aguas tumultuosas del desarrollo web.
                <br /><br /><br />
                Un Viaje a través del Diseño Web
                <br /><br />
                Desde las páginas más estilizadas hasta las interfaces más intuitivas, mi objetivo siempre ha sido crear espacios digitales donde el arte y la funcionalidad coexisten en perfecta armonía.
                <br /><br /><br />
                SEO, SEM & Analítica Web
                <br /><br />
                El mundo digital es vasto y misterioso. Con mi experiencia en SEO y SEM, me aseguro de que tu marca no solo sea visible, sino que brille con luz propia en este inmenso océano. Y con la analítica web, interpreto las corrientes y mareas para ajustar el rumbo hacia el éxito.
                <br /><br /><br />
                Internacionalización
                <br /><br />
                Expandiendo horizontes y llevando ideas más allá de los confines conocidos. La digitalización no conoce fronteras, y yo tampoco.
                <br /><br /><br />
                Del Front-End al Back-End
                Como cartógrafa de la web, diseño paisajes visuales en el front-end y construyo los cimientos robustos del back-end. Mi misión es que cada viaje por mis creaciones sea una experiencia única y sin sobresaltos.
                <br /><br /><br />
                ¿Preparado para la Aventura?
                <br /><br />
                Si buscas a alguien que pueda ser el capitán y la tripulación de tu próximo proyecto digital, ¡has llegado al puerto correcto! Zarpa conmigo y creemos juntos un océano de posibilidades.
                <br /><br /><br />
               {" "}
                <a
                    href= "mailto:marinaviejo2000@gmail.com?subject=Mas%20informaci%C3%B3n&body=Hola!%0D%0A"
                    target="_blank"
                    className= "text-cyan-600 hover: underline underline-offset-2 decoration-2 decoration red-600"
                    rel="noreferrer nonopener" 
                >
                    ¡Contáctame!{" "}
                </a>
            </p> 
        
         </div>
    )
};

export default Intro;