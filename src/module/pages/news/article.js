import React from 'react';
import {Card, CardTitle, CardText, CardDeck,
        CardBody,Badge, Button } from 'reactstrap';


const Article = (props) => {
    const {
        title, body, id, userId, key, eventClick
    } = props;

    return (
      <article style={{width:30+'%', margin:1+'%'}}>
        <CardDeck>
          <Card >
            <Badge color="info">New</Badge>
            <CardBody id={key}>
              <CardTitle userid={userId}>{title}</CardTitle>
              <CardText id={id}>{body}</CardText>
              <Button onClick={eventClick}>Читать</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </article>
    );

};



export default Article;
