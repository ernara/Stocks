import React from 'react';
import './Card.css';

interface Props {
  companyName :string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img 
            src="https://images.unsplash.com/photo-1720366252332-a86c8a11d879?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='Apple ;)'
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, minus.</p>
    </div>
  )
}

export default Card

