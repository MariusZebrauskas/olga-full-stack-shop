import { useState, useEffect } from 'react';
import {
  MainAlbumWrapper,
  ButtonWrapper,
  AlbumWrapper,
  AlbumPickerHeader,
  SelectAlbums,
  HeadeWrapper,
} from './styles';
import backgroundImg from './images/background.jpg';

import ButtonAlbum from '../../Shared/ButtonAlum';
import AlbumList from './AlbumList';

const Albums = ({
  currentCard,
  language,
  changeAlbum,
  addToShopCartAlbum,
  valsaiLt,
  valsaiEng,
  valsaiRu,
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
  muzikinePasakaLt,
  muzikinePasakaRu,
  muzikinePasakaEng,
}) => {
  const [albumHeader, setAlbumHeader] = useState('ALBUMAI');
  const [cirkasAtvaziavo, setCirkasAtvaziavo] = useState('CIRKAS ATVAŽIAVO');
  const [muzikinePasaka, setMuzikinePasaka] = useState('muzikine Pasaka');
  const [valsai, setValsai] = useState('valsai: Baleto pamokoms');

  useEffect(() => {
    if (language === 'lt') {
      setAlbumHeader('ALBUMAI');
      setCirkasAtvaziavo('cirkas atvažiavo!');
      setMuzikinePasaka('muzikinės Pasakos');
      setValsai('valsai baleto pamokoms');
    } else if (language === 'eng') {
      setAlbumHeader('ALBUMS');
      setCirkasAtvaziavo('Circus has arrived! ');
      setMuzikinePasaka('Music Fairy Stories');
      setValsai('waltzes for ballet lessons');
    } else if (language === 'ru') {
      setAlbumHeader('АЛЬБОМЫ');
      setCirkasAtvaziavo('ЦИРК ПРИЕХАЛ!');
      setMuzikinePasaka('Музыкальные сказки');
      setValsai('вальсы Для уроков балета');
    }
  }, [language]);

  return (
    <MainAlbumWrapper>
      <SelectAlbums backgroundImg={backgroundImg}>
        <HeadeWrapper>
          <AlbumPickerHeader albumHeader={albumHeader}>{albumHeader}:</AlbumPickerHeader>
        </HeadeWrapper>
        <ButtonWrapper>
          <ButtonAlbum
            theCirkusHasArivedLt={theCirkusHasArivedLt}
            theCirkusHasArivedRu={theCirkusHasArivedRu}
            theCirkusHasArivedEng={theCirkusHasArivedEng}
            changeAlbum={changeAlbum}
            album={cirkasAtvaziavo.toUpperCase()}
          >
            {cirkasAtvaziavo.toUpperCase()}
          </ButtonAlbum>
          <ButtonAlbum
            muzikinePasakaLt={muzikinePasakaLt}
            muzikinePasakaRu={muzikinePasakaRu}
            muzikinePasakaEng={muzikinePasakaEng}
            changeAlbum={changeAlbum}
            album={muzikinePasaka.toUpperCase()}
          >
            {muzikinePasaka.toUpperCase()}
          </ButtonAlbum>
          <ButtonAlbum
            valsaiLt={valsaiLt}
            valsaiEng={valsaiEng}
            valsaiRu={valsaiRu}
            changeAlbum={changeAlbum}
            album={valsai.toUpperCase()}
          >
            {valsai.toUpperCase()}
          </ButtonAlbum>
        </ButtonWrapper>
      </SelectAlbums>
      <AlbumWrapper currentCard={currentCard}>
        <AlbumList
          addToShopCartAlbum={addToShopCartAlbum}
          language={language}
          currentCard={currentCard}
       
        />
      </AlbumWrapper>
    </MainAlbumWrapper>
  );
};

export default Albums;
