import React from 'react';
import './styles.css';
import Hero from './../../images/illustration-hero.svg';
import MusicIcon from './../../images/icon-music.svg';
import CardButtons from '../CardButtons/CardButtons';

function CardSummary() {
    return (
        <>
        <div className='CardSummary__card-container'>
            <div className="CardSummary__card">
                <div className="CardSummary__card-hero">
                    <img src={Hero} width="100%" alt="Order Summary Card" />
                </div>

                {/* <!-- Card Body --> */}
                <div className="CardSummary__card-body">

                {/* <!-- Card Title --> */}
                <div className="CardSummary__card-title">
                    <h1>Order Summary</h1>
                </div>

                {/* <!-- Card Text --> */}
                <div className="CardSummary__card-text">
                    <p>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                    </p>
                </div>

                {/* <!-- Card-plan --> */}
                <div className="CardSummary__card-plan-container">
                    <div className="CardSummary__card-plan">
                        <div className="CardSummary__card-plan-image">
                            <img src={MusicIcon} width="100%" alt="" />
                        </div>
                    <div className="CardSummary__card-plan-text">
                        <h4>Annual Plan</h4>
                        <p>$59.99/year</p>
                    </div>
                    </div>

                    <div className="CardSummary__change-plan">
                        <a href="#">Change</a>
                    </div>
                </div>

                {/* <!-- Card Buttons --> */}
                <CardButtons />

                </div>
            </div>
        </div>
            {/* <!-- Attributions --> */}
            <div className="CardSummary__attribution">
                <p>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontendmentor.io</a>. 
                Coded by <a href="https://felixdiaz.netlify.app/" target="_blank" rel="noreferrer">Felix</a>.
                </p>
                
            </div>
        </>
    )
}

export default CardSummary
