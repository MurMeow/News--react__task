import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import News from "./pages/news/news";


const Example = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Будь на шаг впереди</h1>
                    <p className="lead">Знание - сила! Будь и ты в курсе последних новостей </p>
                    <hr className="my-2" />
                </Container>
            </Jumbotron>
            <div>
                <News />
            </div>
        </div>
    );
};

export default Example;
