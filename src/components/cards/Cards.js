import React from 'react'
import cards1 from "../../assets/img/homer.jpg"
import cards2 from "../../assets/img/bart.jpg"
import cards3 from "../../assets/img/maggie.jpg"
import "../cards/Cards.css"

const Cards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col Name">
                    <div className="card" >
                        <img src={cards1} className="card-img-top" alt="homero" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src={cards2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src={cards3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-danger">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards