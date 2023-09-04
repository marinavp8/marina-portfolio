import react from 'react'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Marina</h1>
            <p className=" text-base md:text-sl mb-3 font-medium">When marketing meets code</p>
            <p className="text sm max-w-xs mb-6 font-bold text-justify">
            Marketing Maestro: Expertise in spotting market opportunities.
            <br />
            Innovation Driver: Elevating brands to new heights.
            <br />
            Web Dev Enthusiast: Merging design with functionality.
            <br />
            Data Analyst: Transforming data into actionable insights.
            <br />
            Lifelong Learner: At the nexus of marketing and tech.
                <br /><br /><br />
                ¿Quieres saber más?
               {" "}
                <a
                    href= "mailto:marinaviejo2000@gmail.com?subject=Mas%20informaci%C3%B3n&body=Hola!%0D%0A"
                    target="_blank"
                    className= "text-cyan-600 hover: underline underline-offset-2 decoration-1 decoration red-600"
                    rel="noreferrer nonopener" 
                >
                    ¡Contáctame!
                </a>
            </p> 
        
         </div>
    )
};

export default Intro;