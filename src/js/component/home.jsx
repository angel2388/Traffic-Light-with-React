import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ encendido, setIluminado] = useState ("");
	
	return (
		<div className="semaforo">
			<div
			onClick={() => setIluminado("rojo")}
			id="rojoluz"
			 className={ encendido == "rojo" ? "sombra" : "no"}>
			 </div>
			
			<div 
			onClick={() => setIluminado("amarillo")}
			id="amarilloluz"
			className={encendido == "amarillo" ? "sombra" : "no"}>
			</div>
			
			<div 
			onClick={() => setIluminado("verde")}
			id="verdeluz"
			className={ encendido == "verde" ? "sombra" : "no"}>
			</div>
		
		</div>
	);
};

export default Home;
