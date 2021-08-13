import React, { useState } from 'react';
import styled from 'styled-components';
import MusicIcon from './../../images/icon-music.svg';
import './styles.css';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#382AE1" : "none"};
  color: ${props => props.primary ? "white" : ""};
  border: none;
`;

function CardButtons() {
    const [openModal, setOpenModal] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setOpenModal(true)
    }

    return (
        <>
            <div className="CardButtons__buttons">
                <div className="CardButtons__button-container">
                    <Button primary className="CardButtons__proceed" onClick={handleSubmit}>Proceed to Payment</Button>
                    <Button className="CardButtons__cancel">Cancel Order</Button>
                </div>            
            </div>

            {
                openModal ? (
                    <div className="CardButtons__modal">
                        <div className="CardButtons__modal-content">
                            <div className="CardButtons__modal-content-header">
                                <h1>Thank You For Your Purchase.</h1>
                            </div>

                            {/* <!-- Card-plan --> */}
                            <div className="CardSummary__card-plan-container CardButtons__modal-card-plan">
                                <div className="CardSummary__card-plan">
                                    <div className="CardSummary__card-plan-image">
                                        <img src={MusicIcon} width="100%" alt="" />
                                    </div>
                                    <div className="CardSummary__card-plan-text">
                                        <h4>Annual Plan</h4>
                                        <p>$59.99/year</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Button type="button" onClick={() => setOpenModal(false)} className="CardSummary__cancel CardButtons__modal-button">Checkout</Button>
                        </div>
                    </div>
                  ) : (
                    null
                  )
            }
        </>
    )
}

export default CardButtons
