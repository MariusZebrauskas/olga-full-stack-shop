import { RenderingStyles } from '../../Shared/renderingStyles';
import { useEffect } from 'react';
import { Wrapeer } from './styledAbout';
import Pratarme from './Pratarme';
import { cirkasPratarmeLt, cirkasPratarmeEng, cirkasPratarmeRu } from './obj-about';
import { valsaiPratarmeLt, valsaiPratarmeEng, valsaiPratarmeRu } from './obj-about';
import {
  muzikinePasakaPratarmeLt,
  muzikinePasakaPratarmeEng,
  muzikinePasakaPratarmeRu,
} from './obj-about';
import { commentsLt, commentsEng, commentsRu } from './obj-about';
import Comments from './Comments';
import LoadingComponentsAnimation from '../../Shared/LoadingCompononetsAnimations/LoadingComponentsAnimation';

const About = ({ language, loading, history, setLoading }) => {
  const loadingTime = 1000;
  useEffect(() => {
    if (history.location.pathname === '/info') {
      setLoading(true);
    } else {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => {
      setLoading(false);
    };
  }, [history]);

  return (
    <>
      {loading ? (
        <LoadingComponentsAnimation />
      ) : (
        <RenderingStyles>
          <Wrapeer>
            <Pratarme
              language={language}
              cirkasPratarmeLt={cirkasPratarmeLt}
              cirkasPratarmeEng={cirkasPratarmeEng}
              cirkasPratarmeRu={cirkasPratarmeRu}
              valsaiPratarmeLt={valsaiPratarmeLt}
              valsaiPratarmeEng={valsaiPratarmeEng}
              valsaiPratarmeRu={valsaiPratarmeRu}
              muzikinePasakaPratarmeLt={muzikinePasakaPratarmeLt}
              muzikinePasakaPratarmeEng={muzikinePasakaPratarmeEng}
              muzikinePasakaPratarmeRu={muzikinePasakaPratarmeRu}
            ></Pratarme>
            <Comments
              commentsRu={commentsRu}
              language={language}
              commentsLt={commentsLt}
              commentsEng={commentsEng}
            ></Comments>
          </Wrapeer>
        </RenderingStyles>
      )}
    </>
  );
};

export default About;
