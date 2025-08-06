"use client";

import Hero from "./hero";
import NavBar from "./navBar";
import {Cocktails} from "@/src/components/cocktails";

const LandingPage = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<Cocktails />
		</main>
	);
};

export default LandingPage;
