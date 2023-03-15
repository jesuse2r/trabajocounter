import React from "react";



//create your first component
const Home = ( {first, second, third,fourth,fifth,sixth,seventh,watch}) => {
	return (<div className="bg-dark text-white justify-content-center d-flex p-5 fs-1 gap-2 ">
		<span className="border">{watch}</span>
		<span className="border">{seventh}</span>
		<span className="border">{sixth}</span>
		<span className="border">{fifth}</span>
		<span className="border">{fourth}</span>
		<span className="border border-light">{third}</span>
		<span className="border">{second}</span>
		<span className="border">{first}</span>
		
	</div>
		
	);
};

export default Home;
