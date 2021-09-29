import { useEffect, useState } from 'react';
import { Playlist, H1 } from './styles';

const Header = ({ language, currentCard, comment }) => {
  const [header, setHeader] = useState('ALBUM');
  useEffect(() => {
    if (language === 'lt') return setHeader('ALBUMAS');
    if (language === 'eng') return setHeader('ALBUM');
    if (language === 'ru') return setHeader('АЛЬБОМ');
  }, [language]);
  const onMouseDown = (e) => {
    e.preventDefault();
  };
  //emty div is for Line animation
  return (
    <Playlist comment={comment} onMouseDown={onMouseDown} className='playlist'>
      <div></div>
      <H1 comment={comment}>
        {comment ? comment : `${header} :`}{' '}
        {currentCard ? currentCard[0].album.toUpperCase() : null}
      </H1>
      {/* <h3 >{currentCard[0].album.toUpperCase()}</h3> */}
    </Playlist>
  );
};

export default Header;
