import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NFTImg1 from '../../assets/img/nft-img/nft-crypto.gif';

interface Props {
  isSold?: boolean;
  isLive?: boolean;
}

const NFTCard = ({ isSold = true, isLive = true }: Props) => {
  return (
    <Col md='6' lg='4'>
      <Link to='/nft_details'>
        <Card className='card__root'>
          <div className='card__img'>
            <Card.Img variant='top' src={NFTImg1} />
          </div>
          <div className='card__blank'></div>
          <Card.Body className='card__body'>
            <div className='card__body__img'>
              <img src={NFTImg1} alt='...' />
            </div>
            <h3 className='text-dark my-2'>Sunshine</h3>
            <div className='card__body__details'>
              <img src={NFTImg1} alt='...' />
              <p>Endless War</p>
            </div>
            <p className='mt-3 mb-0 current__bid__title'>Current Bid</p>
            <div className='live__show mb-3'>
              <p>0.40 ETH</p>
              {isLive && (
                <div>
                  <Spinner
                    animation='grow'
                    size='sm'
                    variant='light'
                    className='NFTCard__detailsBidSpinner'
                  />
                  <p>LIVE</p>
                  <p>11h</p>
                </div>
              )}
            </div>
            <Link to='/bid'>
              {isSold ? (
                <Button variant='dark' className='card__btn'>
                  {isLive ? 'Place Bid' : 'Buy now'}
                </Button>
              ) : (
                <Button variant='light' className='card__btnSold'>
                  Make offer
                </Button>
              )}
            </Link>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default NFTCard;
