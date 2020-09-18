import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <article className="bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5 card">
      <img src={`https://robohash.org/${id}?200x200`} alt="" className="card__img" />
      <div className="card__inner">
        <h2 className="tc card__title">{name}</h2>
        <p className="tc cart__text">{email}</p>
      </div>
    </article>
  )
}

export default Card;