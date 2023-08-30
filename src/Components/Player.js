import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function PlayersCards({joueur}) {

    const cardContainerStyle = {
      width: '48%', 
      marginBottom: '20px',
      display: 'inline-block',
      background: `url(${joueur.imgUrl}) center/cover`,
      borderRadius: '8px',
      minHeight: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    };

    const cardStyle = {
      width: '50%',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      boxSizing: 'border-box'
  };

    const cardTitleStyle = {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333'
    };

    const cardInfoStyle = {
      fontSize: '0.9rem',
      color: '#666'
    };
    
  return (
    
    <div style={cardContainerStyle}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={joueur.imgUrl} />
        <Card.Body>
          <Card.Title style={cardTitleStyle}>{joueur.name}</Card.Title>
          <Card.Text style={cardInfoStyle}>
              {joueur.team}
          </Card.Text>
          <Card.Text style={cardInfoStyle}>
              {joueur.nationality}
          </Card.Text>
          <Card.Text style={cardInfoStyle}>
              {joueur.Number}
          </Card.Text>
          <Card.Text style={cardInfoStyle}>
              {joueur.age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

PlayersCards.defaultProps = {
    joueur: {
        name: "Unknown Player",
        team: "Unknown Team",
        nationality: "Unknown Nationality",
        Number: 0,
        age: 0,
        imgUrl: "data:image/png;base64,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"
    }
};

export default PlayersCards
