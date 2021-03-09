import React from "react";
import SpotifyComponent from "../../Components/SpotifyComponent";

function SpotifyPage(props) {
    return (
        <div>
            <SpotifyComponent userObject={props.userObject} setUserObject={props.setUserObject}/>
        </div>
    );

}

export default SpotifyPage;
