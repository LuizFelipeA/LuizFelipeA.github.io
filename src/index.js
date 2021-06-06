import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import navBar from './views/components/Navbar';
import homePage from './views/pages/Home';

const router = async () => {

    navbarRender();
    homeRender();
}

const navbarRender = async () => {
    const header = document.getElementById('header');

    header.innerHTML = await navBar.render();
}

const homeRender = async () => {
    const home = document.getElementById('home_content');

    home.innerHTML = await homePage.render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);