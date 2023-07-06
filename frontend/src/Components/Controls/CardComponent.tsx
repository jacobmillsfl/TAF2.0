import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Merch } from '../../Views/Merch/Merch';

const CardComponent: React.FC<{ cardInfo: Merch[] }> = ({ cardInfo }) => {
  const merchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    const url = button.getAttribute("data-url")
    if (url) {
      window.open(url, '_blank', 'noopener')?.focus();
    }
  };

  const createRows = (cards: Merch[]): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    const numCards = cards.length;
    const numRows = Math.ceil(numCards / 3);

    for (let i = 0; i < numRows; i++) {
      const startIndex = i * 3;
      const endIndex = startIndex + 3;
      const rowCards = cards.slice(startIndex, endIndex);

      rows.push(
        <Row key={i}>
          {rowCards.map((card, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card style={CardStyle} className="bg-dark text-white">
                <Card.Body>
                  <Card.Title className="mt-4">{card.name}</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src={card.imgUrl} />
                <Card.Footer>
                  <Button
                    variant="warning"
                    type="button"
                    style={ButtonStyle}
                    data-url={card.storeUrl}
                    onClick={merchClick}>
                    Shop
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      );
    }

    return rows;
  };

  return <>{createRows(cardInfo)}</>;
};

export default CardComponent;

const CardStyle = {
  "margin": "1em",
  "--bs-bg-opacity": ".8",
  "background-color": "rgba(var(--bs-dark-rgb),var(--bs-bg-opacity)) !important",
  "max-width": "400px",
}

const ButtonStyle = {
  "width": "100%",
  "font-family": "Audiowide"
}
