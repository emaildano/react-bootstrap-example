import React, {Component} from 'react';

import {
  Container,
  Card,
  Row,
  Col,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  CardText,
  Button,
  CardDeck
} from 'reactstrap';

class Cards extends Component {

  render() {

    const cardExamples = (
      <div>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
          <CardFooter className="d-flex justify-content-between">
            <div className="d-flex align-items-center">Footer</div>
              <div>
                <Button color="primary">Confirm</Button>{' '}
                <Button color="white">Cancel</Button>
              </div>
          </CardFooter>
        </Card>
      </div>
    )

    const cardExamplesPrimary = (
      <div>
        <Card className="mb-4">
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card className="mb-4" color="primary">
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
          <CardFooter className="d-flex justify-content-between">
            <div className="d-flex align-items-center">Footer</div>
              <div>
                <Button color="primary">Confirm</Button>{' '}
                <Button color="white">Cancel</Button>
              </div>
          </CardFooter>
        </Card>
      </div>
    )

    return (<div>
      <div className="_gradient-purple section-padding">
        <Container>
          {cardExamples}
        </Container>
      </div>
      <div className="section-padding section-padding">
        <Container>
          {cardExamples}
        </Container>
      </div>
      <div className="_gray-100 section-padding">
        <Container>
          {cardExamples}
        </Container>
      </div>
      <div className="_black section-padding">
        <Container>
          {cardExamplesPrimary}
        </Container>
      </div>
      <div className="section-padding _purple-dark">
        <Container>
          {cardExamplesPrimary}
        </Container>
      </div>
    </div>);
  }
}

export default Cards;
