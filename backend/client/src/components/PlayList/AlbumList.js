import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { LoadingContext } from '../../context/LoadingContext';

const P = styled.h3`
  font-size: ${(props) => props.theme.fontSize.pBig};
  padding: 0.1rem 0.3rem;
  margin: 0.5rem 0 0 0.3rem;
`;
const H4 = styled.h1`
  padding: 0.1rem 0.3rem;
  transition: transform 1s;
  font-size: ${props => props.theme.fontSize.h1};

`;
const SongListWrapper = styled.section`
  color: #fefbfd;
  width: 100%;
  outline: 0.1rem solid #fefbfd;
  outline-offset: -1.5rem;
`;
const AlbumFlexCenter = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const SongList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem 0 2rem;

  @media (min-width: 375px) {
    /* margin-left: 3.5rem; */
  }
`;

const ButtonBuyAllbum = styled.button`
  margin: 3rem 0;
  width: 100%;
  padding: 0.5em 1em;
  background-color: transparent;
  border: 0.1rem solid #fefbfd;
  color: #fefbfd;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
  h2 {
    font-size: calc(.7rem + 0.2vw);

    /* margin-bottom:.7rem; */
  }
  :hover {
    border: 0.1rem solid #c1bbbb;
    color: #c1bbbb;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const AlbumList = ({ currentCard, language, addToShopCartAlbum }) => {
  // loading logical
  const [loadingDb] = useContext(LoadingContext);
  // const [header, setHeader] = useState('DAINU SARAŠAS');
  const [buttonText, setButtonText] = useState(
    `PRIDĖTI VISĄ RINKINĮ TIK UŽ ${currentCard[0].albumprice} €`
  );
  const [isAlbumSold, setIsAlbumSold] = useState('PIRKINYS JAU KREPŠELYJE');

  useEffect(() => {
    if (language === 'lt') {
      // setHeader('DAINU SARAŠAS');
      setButtonText(`PRIDĖTI VISĄ RINKINĮ TIK UŽ ${currentCard[0].albumprice} €`);
      setIsAlbumSold('PIRKINYS JAU KREPŠELYJE');
    } else if (language === 'eng') {
      // setHeader('SONG LIST');
      setButtonText(`ADD FULL ALBUM FOR ${currentCard[0].albumprice} €`);
      setIsAlbumSold('ITEM IS ALREADY IN THE BAG');
    } else if (language === 'ru') {
      // setHeader('СПИСОК ПЕСЕН');
      setButtonText(`ДОБАВИТЬ ПОЛНЫЙ АЛЬБОМ ЗА ${currentCard[0].albumprice} €`);
      setIsAlbumSold('ТОВАР В КОРЗИНЕ');
    }
  }, [language, currentCard]);
  return (
    <SongListWrapper>
      <AlbumFlexCenter>
        <H4>{currentCard[0].album} </H4>
      </AlbumFlexCenter>
      <SongList>
        {currentCard.map((album) => (
          <P key={album.id}>
            {album.id}) {album.song}
          </P>
        ))}
      </SongList>
      <AlbumFlexCenter>
        <ButtonBuyAllbum isAlbumSold={isAlbumSold} onClick={() => addToShopCartAlbum(currentCard)}>
          {loadingDb ? <ClipLoader size={"2rem"} /> : !currentCard[0].holealbumsold ? <h2>{buttonText}</h2> : <h2>{isAlbumSold}</h2>}
        </ButtonBuyAllbum>
      </AlbumFlexCenter>
    </SongListWrapper>
  );
};

export default AlbumList;
