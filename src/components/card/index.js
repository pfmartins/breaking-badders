
import React from 'react';
import './card.css'

const Card = (props) => {
	const backgroundStyle = {
		props: {
			background: `url(${props.character.img}) top no-repeat`,
			backgroundSize: "cover",
		},
	}

	return (
		<div className="card">
			<div className="card__title" data-testid="cardTitle">{props.character.name}</div>
			<div className="card__img" data-testid="cardImg" style={backgroundStyle.props}></div>
			<div className="card__more">
				<div className="card__description card__description--more">Show more</div>
				<div className="card__description">
					<label>Nickname: </label>&nbsp;
					<div className="card__description-text" data-testid="cardNickName">{props.character.nickname}</div>
				</div>
				<div className="card__description">
					<label>Status: </label>&nbsp;
					<div className="card__description-text" data-testid="cardStatus">{props.character.status}</div>
				</div>
				<div className="card__description card__description--line-break">
					<label>Occupation: </label>&nbsp;
					<div className="card__description-text" data-testid="cardOccupation">{props.character.occupation.join()}</div>
				</div>
			</div>
		</div>
	)
}

export default Card;