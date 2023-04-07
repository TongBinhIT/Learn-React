import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

ColerBox.propTypes = {
    
};

function getRamdomColer(){
    const ListColer = ['green', 'yellow', 'orange', 'black', 'red', 'deep blue']
    const ramdomIndex = Math.trunc((Math.random()*5))
    return ListColer[ramdomIndex]
}

function ColerBox() {
    
    
    const [coler, setColer] = useState(()=>{
        const initColer = localStorage.getItem('box_coler') || 'deep blue' ;
        console.log(initColer)
        return initColer;
    });

        

    function handleOnClick(){
        const newColer = getRamdomColer();
        setColer(newColer);
        localStorage.setItem('box_coler', coler);
    }

    return (
        <div
        className="coler-box"
        style={{backgroundColor : coler}}
        onClick={handleOnClick}
        >       
           CON CHO HUY
        </div>
    );
}   

export default ColerBox;