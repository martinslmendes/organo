import banner from './banner.png';
import './Banner.css';

export const Banner = () => {
    return (
        <header className="banner">
            <img src={banner} alt="Organo"/>
        </header>
    );
}

export default Banner;