"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const GSAPInitializer = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);
	}, []);
	return null;
};

export default GSAPInitializer;
