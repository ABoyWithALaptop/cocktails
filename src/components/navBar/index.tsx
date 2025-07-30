"use client";
import { navLinks } from "@/src/utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	useGSAP((ctx) => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});
		navTween.fromTo(
			"nav",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				backgroundFilter: "blur(10px)",
				duration: 1,
				ease: "power1.inOut",
			}
		);
	});
	return (
		<nav>
			<div>
				<Link href="#home" className="flex items-center gap-2 ">
					<img src={"/images/logo.png"} alt="logo" />
					<p>Velvet pour</p>
				</Link>
				<ul>
					{navLinks.map((obj) => {
						return (
							<li key={obj.id}>
								<Link href={`#${obj.id}`}>{obj.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
