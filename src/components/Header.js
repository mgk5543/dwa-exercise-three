import React from 'react';

function Header(){
    return(
        <div className="city-navbar">
            <a href="/?city=Seoul">Seoul</a>
            <a href="/?city=Chicago">Chicago</a>
            <a href="/?city=Orlando">Orlando</a>
            <a href="/?city=Bogota">Bogota</a>
            <a href="/?city=Tokyo">Tokyo</a>
            <a href="/?city=New York">New York</a>
        </div>
    );
}
export default Header;
