import React, { useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const NFTDetails = () => {
  const [expended, setExpended] = useState(false);
  const auctions = [1, 2, 3, 4];

  const shareSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
      <polyline points='15 3 21 3 21 9' />
      <line x1='10' y1='14' x2='21' y2='3' />
    </svg>
  );

  const nftDetailsCommonBtn = (
    <>
      <div className='nftDetails__commonBtn'>
        <div>
          <p>Reserve</p>
          <h1>1.00 ETH</h1>
          <Button variant='dark'>Place bid</Button>
        </div>
        <div>
          <div>
            <p>Last sold</p>
            <h4>0.30 ETH</h4>
          </div>
          <div>
            <Button variant='light'>Make Offer</Button>
          </div>
        </div>
      </div>
      <div className='nftDetails__commonBtnBottom'>
        <p>Owned by</p>
        <div>
          <img
            src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
            alt=''
          />
          <p>@rozumnyib</p>
        </div>
      </div>
    </>
  );

  const provenceCard = (
    <div className='nftDetails__bottomBottomCard'>
      <div>
        <img
          src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
          alt=''
        />
      </div>
      <div>
        <p>1.00 ETH</p>
        <div>
          <p>
            Listed by <span>@llyaSh</span>
          </p>
          <p>Dec 18,2021 at 7:52pm</p>
        </div>
      </div>
      <div>{shareSVG}</div>
    </div>
  );

  const popover = (
    <Popover id='popover-positioned-bottom'>
      <div className='nftDetails__popover'>
        <div className=''>
          <img
            className=''
            src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
            alt='created_by'
          />
          <Button className='rounded-circle' variant='light'>
            Follow
          </Button>
        </div>
        <div>
          <h3>Rinatto</h3>
          <p>@Lbank</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, at!
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            aliquam.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            aspernatur.
          </p>
        </div>
        <div>
          <p>Followed by </p>
          <img
            src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
            alt='created_by'
          />
        </div>
        <div>
          <div>
            <p>80</p>
            <p>Following</p>
          </div>
          <div>
            <p>200</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </Popover>
  );

  return (
    <div style={{ backgroundColor: 'white', zIndex: 2 }}>
      <div className='nftDetails container-xl'>
        <div className='nftDetails__top'>
          <div className='nftDetails__topImg'>
            <img
              src='https://f8n-ipfs-production.imgix.net/QmbuJYsBVpuAJqHKZr5C3VNTxkZdBf77SXjtzQkjkFVeDd/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680'
              alt=''
            />
          </div>
          <Button variant='light' onClick={() => setExpended(!expended)}>
            {!expended ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='15 3 21 3 21 9' />
                <polyline points='9 21 3 21 3 15' />
                <line x1='21' y1='3' x2='14' y2='10' />
                <line x1='3' y1='21' x2='10' y2='14' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='4 14 10 14 10 20' />
                <polyline points='20 10 14 10 14 4' />
                <line x1='14' y1='10' x2='21' y2='3' />
                <line x1='3' y1='21' x2='10' y2='14' />
              </svg>
            )}
          </Button>
        </div>
        <div className='nftDetails__bottom'>
          <div className='nftDetails__bottomTop'>
            <h1>Analogue refraction</h1>
            <p>Minted on March 3, 2021 {shareSVG}</p>
            <div className='nftDetails__bottomColCre'>
              <div>
                <p className='nftDetails__bottomColCreTitle'>Created by</p>
                <div>
                  <OverlayTrigger
                    trigger='hover'
                    placement='bottom'
                    overlay={popover}
                  >
                    <Button variant='light'>
                      <img
                        src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                        alt='created_by'
                      />
                      <p>@rozumnyib</p>
                    </Button>
                  </OverlayTrigger>
                  <p></p>
                </div>
              </div>
              <div>
                <p className='nftDetails__bottomColCreTitle'>Collection</p>
                <div>
                  <Button variant='light'>
                    <img
                      src='https://f8n-production.imgix.net/collections/v0451l09m-000053.JPG?q=50&w=28&h=28&auto=format%2Ccompress&fit=crop&dpr=2'
                      alt='collection'
                    />
                    <p>Marks on my soul</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className='nftDetails__common'>{nftDetailsCommonBtn}</div>

            <div className='nftDetails__bottomDescription'>
              <h2>Description</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum non recusandae praesentium totam consectetur. Tempore
                itaque, autem nesciunt nostrum ipsa dolor quasi nihil. Nulla
                quia quidem beatae odio ratione dolores?
              </p>
            </div>
            <div className='nftDetails__bottomDetails'>
              <h2>Details</h2>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='20' x2='18' y2='10' />
                  <line x1='12' y1='20' x2='12' y2='4' />
                  <line x1='6' y1='20' x2='6' y2='14' />
                </svg>
                <p>View on Etherscan</p>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
                  <polyline points='3.27 6.96 12 12.01 20.73 6.96' />
                  <line x1='12' y1='22.08' x2='12' y2='12' />
                </svg>
                <p>View metadata</p>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                  <circle cx='12' cy='12' r='3' />
                </svg>
                <p>View on IPFC</p>
              </div>
              <div className='nftDetails__bottomDetailsBtn'>
                <Button variant='light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='1' />
                    <circle cx='19' cy='12' r='1' />
                    <circle cx='5' cy='12' r='1' />
                  </svg>
                </Button>
                <Button variant='light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
                    <polyline points='16 6 12 2 8 6' />
                    <line x1='12' y1='2' x2='12' y2='15' />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className='nftDetails__bottomBottom'>
            <div className='nftDetails__bottomCommon'>
              {nftDetailsCommonBtn}
            </div>
            <h2>Provenance</h2>
            {provenceCard}
            <div className='nftDetails__bottomAuction'>
              <img
                src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                alt=''
              />
              <p>
                Auction own by <span>@kanf</span>
              </p>
              <p>
                Sold for 0.30 ETH <span>$779.59</span>
              </p>
              <p>Dec 18,2021 at 7:52pm</p>
              <p>
                Auction settled by <span>@kanf</span>
              </p>
            </div>
            {auctions.map((auction) => (
              <div key={auction}>{provenceCard}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
