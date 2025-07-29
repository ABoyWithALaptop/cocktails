"use client";
import styles from "./menu.module.css";
import { useRef, useState } from "react";
import Link from "next/link";

const routeMap = [
	{
		path: "/",
		label: "Home",
	},
	{
		path: "/about",
		label: "About",
	},
	{
		path: "/contact",
		label: "Contact",
	},
];

const Menu = () => {
	const container = useRef(null);
	const [open, setOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<div className={styles.menu} ref={container}>
			<div className={styles.menu_bar}>
				<div className={styles.menu_logo}>
					<Link href="/">CodeGrid</Link>
				</div>
				<div className={styles.menu_toggle}>
					<p>menu</p>
				</div>
			</div>
			<div className={styles.menu_overlay}>
				<div className={styles.menu_overlay_bar}>
					<div className={styles.menu_bar_close}></div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Menu;
