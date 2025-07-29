"use client";
import React from "react";
import { useGsap } from "@/src/hooks/useGsap";

const LandingPage = () => {
	const scope = useGsap((ctx) => {
		gsap.from();
	});
	return <div>LandingPage</div>;
};

export default LandingPage;
