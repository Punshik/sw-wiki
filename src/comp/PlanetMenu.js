
import { useState } from 'react';
import '../style/planet-menu.css'
import Tatooine from '../img/Tatooine.jpg';
import Alderaan from '../img/Alderaan.jpg';
import YavinIV from '../img/YavinIV.jpg';
import Hoth from '../img/Hoth.jpg';
import Dagobah from '../img/Dagobah.jpg';
import Bespin from '../img/Bespin.jpg';
import Endor from '../img/Endor.jpg';
import Naboo from '../img/Naboo.jpg';
import Coruscant from '../img/Coruscant.jpg';
import Kamino from '../img/Kamino.jpg';

function PlanetMenu(props) {
    let imgPlanetUrl = {
        'Tatooine' : Tatooine,
        'Alderaan' : Alderaan,
        'YavinIV' : YavinIV,
        'Hoth' : Hoth,
        'Dagobah' : Dagobah,
        'Bespin' : Bespin,
        'Endor' : Endor,
        'Naboo' : Naboo,
        'Coruscant' : Coruscant,
        'Kamino' : Kamino,
    }

    let planets = props.planets;
    const [prevFocus, setPrevFocus] = useState(null);

    let deletePrevSelected = () => {
        if(prevFocus && document.querySelector('#'+`${prevFocus}`).classList) {
            document.querySelector('#'+`${prevFocus}`).classList.remove('selected');
        }
    }

    let checkPlanetName = (planetObj) => {
        if(planetObj.name.split(' ').length > 0){
            return planetObj.name.split(' ').join('');
        }
        return planetObj.name;
    }

    return (
        <div className = "menu-wrapper">
            <span id = "select-menu">menu</span>
            <ul className = "menu">{
                planets.map(item => 
                    <li id = {checkPlanetName(item)}
                        onClick = { event => {
                            document.querySelector('#'+`${event.target.id}`).classList.add('selected');
                            document.getElementsByTagName('body')[0].style.background = `url(${imgPlanetUrl[event.target.id]})`;
                            if(event.target.id !== prevFocus) deletePrevSelected();
                            props.updateFocus(event.target.outerText);
                            setPrevFocus(event.target.id);
                    }}> 
                        {item.name} 
                    </li>)
            }</ul>
        </div>
    )
}

export default PlanetMenu;