import banner from './banner.png';
import './Banner.css';
import {Fragment} from "react";

export const Banner = () => {
    return (
        <header className="banner">
            <img src={banner} alt="Organo"/>
        </header>
    );
}