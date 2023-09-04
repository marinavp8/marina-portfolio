import react from 'react'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Marina</h1>
            <p className=" text-base md:text-sl mb-3 font-medium">Web developer & Marketing strategist</p>
            <p className="text sm max-w-xs mb-6 font-bold text-justify-left">
            * Marketing Strategist: Proven ability to unearth opportunities in saturated markets.
            * Innovative Mindset: Thrive on creating unique strategies to drive brand success.
            *Web Developer in Process: Relentless curiosity and passion for flawless online functionality.
            *Creativity Meets Code: A unique blend where strategy intertwines with every pixel.
            *Continuous Learner: Always at the crossroads of marketing and web development, ensuring brands not only stand out but also perform seamlessly online.
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