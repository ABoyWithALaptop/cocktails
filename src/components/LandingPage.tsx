"use client";

import Hero from "./hero";
import NavBar from "./navBar";
import {Cocktails} from "@/src/components/cocktails";
import About from "@/src/components/About"

const LandingPage = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <Cocktails/>
            <About/>
        </main>
    );
};

export default LandingPage;
