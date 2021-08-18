import '../style/planetInfo.css'

function PlanetInfo(props) {
    let info = props.props;
    info = info[0];

    if(info !== undefined){
        return (
            <div className = 'planet-info'>
                <div id = 'planet-name'>  
                    <span> { info.name } </span>
                </div>
                <div className = 'characteristic'>
                    <div>
                        rotation period:   
                        <span className = "value">{ info['rotation_period'] }</span>
                    </div>
                    <div >
                        orbital period:  
                        <span className = "value">{ info['orbital_period'] }</span>
                    </div>
                    <div>
                        diameter: 
                        <span className = "value">{ info.diameter }</span>
                    </div>
                    <div>
                        climate: 
                        <span className = "value">{ info.climate }</span>
                    </div>
                    <div>
                        gravity: 
                        <span className = "value">{ info.gravity }</span>
                    </div>
                    <div>
                        terrain: 
                        <span className = "value">{ info.terrain }</span>
                    </div>
                    <div>
                        population: 
                        <span className = "value">{ info.population }</span>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

export default PlanetInfo;