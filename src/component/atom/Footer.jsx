import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const URL = 'https://github.com/vojtechpavlu';

  return (
    <>
      <div style={{ height: '100px' }} />

      <div className="text-center" style={CONTAINER_STYLE}>
        <samp>
          Made with <FontAwesomeIcon icon="fa-solid fa-heart" />{' '}
          <a href={URL} target="_blank" rel="noreferrer">
            vojtechpavlu
          </a>
        </samp>
      </div>
    </>
  );
};

export default Footer;

const CONTAINER_STYLE = {
  position: 'fixed',
  bottom: 20,
  width: '100%',
  backgroundColor: 'white',
};
