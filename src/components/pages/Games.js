import React from 'react';

export default function Games() {
  return (
    <div className='container top-buffer bot-buffer about-container'>
      <h2 className='text-center'>Street Fighter 6</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <img
          className='d-block mx-auto'
          alt="DJ"
          src={require('../../images/DeeJay.jpg')}
          width="200px"
        />
        <div className="ml-3 about-text">
          <p>
            SF6 is one of the best fighting games to come out in a very long time in my opinion. I have quite a lot of fun playing DeeJay.
            I generally just like to mess around but he is pretty fast and has lots of positive moves on block. My current rank is only Platinum online,
            but I mostly just practice combos and play with friends. Either way DJ is the perfect fit for me to just be aggressive and push buttons on people.
          </p>
        </div>
      </div>
      <h2 className='text-center top-buffer'>Super Smash Brothers Ultimate</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <div className="mr-3 about-text">
          <p>
            Classic Ganondorf is still not very good, although he is much better in Smash Ultimate than in previous games. Another perfect character
            for me to play. He has a big sword and kills people in two hits. What more could you want? I am in elite smash as well, but I rarely play online.
            I've probably played the same Snake Player over 6000 times, but if I didn't, no one else would.
          </p>
        </div>
        <img
          className='d-block mx-auto'
          alt="Ganondorf"
          src={require('../../images/ganondorf7.jpg')}
          width="200px"
        />
      </div>
      <h2 className='text-center'>Valorant</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <img
          className='d-block mx-auto'
          alt="Omegalolmen"
          src={require('../../images/Omen.jpg')}
          width="200px"
        />
        <div className="ml-3 about-text">
          <p>
            I don't generally play shooting games, but when I do that game is Valorant. I have a team of 5-6 guys that like to play occasionally.
            I'm not the best shot in the world, but I am always there to throw some smokes for the boys and go in first when we take a site. I would consider myself
            a gold/platinum player, although my silver border says otherwise haha.
          </p>
        </div>
      </div>
      <h2 className='text-center top-buffer'>Starcraft 2</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <div className="mr-3 about-text">
          <p>
            I have played Starcraft 2 on and off for many years, but recently I have had a few more friends pick it up. I am currently not playing it that much,
            but when I did I was always a Terran player. I enjoy playing threes or fours a lot more than playing 1v1s but I am sometimes down for the occasional
            duel. I am a plat 1v1 player and a diamond team player and have really improved a lot over the years in my opinion.
          </p>
        </div>
        <img
          className='d-block mx-auto'
          alt="Terran Logo"
          src={require('../../images/Terran.jpg')}
          width="200px"
        />
      </div>
      <h2 className='text-center top-buffer'>Slay the Spire</h2>
      <div className='m-auto d-flex align-items-center about-section'>
      <img
          className='d-block mx-auto'
          alt="Guardian"
          src={require('../../images/Guardian.jpg')}
          width="200px"
        />
        <div className="ml-3 about-text">
          <p>
            I have also played STS on and off for years. I love watching Amaz or Lifecoach play on Twitch as well. Recently I have been playing through the
            Downfall STS mod. I think the developers have done an absolutely fantastic job with the mod, and the bosses are a lot of fun to play. I always
            love a good deckbuilding game or roguelike, and STS is just the best of both worlds. I wish there were more great games like this one.
          </p>
        </div>
      </div>
    </div>
  );
}
