import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  isCollection?: boolean;
}

const index = ({ isCollection }: Props) => {
  return (
    <Col>
      <Link to='/single_collection'>
        <div className='featuredCard'>
          <div className='card__content'>
            <div className='featuredCard__top'>
              <div>
                <img
                  src='https://f8n-production.imgix.net/collections/ddyz49cg2-download.jpeg?q=50&w=90&h=90&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt=''
                />
              </div>
              <p>0S0S</p>
            </div>
            <h1>One Sun, One Shadow</h1>
            <div className='featuredCard__bottom'>
              <img
                src='https://f8n-production.imgix.net/creators/profile/8o756zr57-screen-shot-2022-03-08-at-12-40-16-pm-png-0ug99g.png?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                alt=''
              />
              <p>@shanelavaleeter</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default index;
