

function LinkImageTemplate({ link, imgLink }) {
  return (
    <a href={link}>
      <img 
        className='soc-media-image'
        src={imgLink}
      />
    </a>
  );
}

export default LinkImageTemplate;