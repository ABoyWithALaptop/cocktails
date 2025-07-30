"use client";

import Hero from "./hero";
import Menu from "./menu";
import NavBar from "./navBar";

// import { ScrollTrigger, SplitText } from "gsap/all";

// import React from 'react'

const LandingPage = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<div className="h-dvh bg-black"></div>
		</main>
	);
};

export default LandingPage;
