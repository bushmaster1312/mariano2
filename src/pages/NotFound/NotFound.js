import React from 'react'
import notfound from "../../assets/img/homero.png"
import error from "../../assets/img/error.gif"
import '../NotFound/NotFound.css'

const NotFound = () => {
    return (

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src={notfound} className="notfound" alt="homero" />
                </div>
                <div class="col-6">
                <img src={error} className="error" alt="packman" />
                </div>
            </div>
        </div>
    )
}


export default NotFound