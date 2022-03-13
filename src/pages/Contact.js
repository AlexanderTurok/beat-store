
function ButtonMedia({ srcImg, text, nameClass }) {
  return(
    <div className={nameClass}>
      <img className="button-image" src={srcImg}></img>
      <p>{text}</p>
    </div>
  );
}

function ContactCol() {
  return(
    <div className='contact-col'>
      <form className='contact-form'>
        <input className='user-data' type="text" name="user_name" placeholder='Name'/>
        <input className="user-data" type="email" name="user_email" placeholder='E-mail'/>
        <textarea className="user-data-content" name="message" placeholder='Message'/>
        <div className='form-answer'>
          <input className='send-mail' type="submit" value="Send" />
          <div className='server-answer'>
            <p>{"Some answer"}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <ContactCol />
        <div className='contact-col'>
          <ButtonMedia nameClass={'button-fb'} 
                       srcImg={require('../images/fb-icon.png')} 
                       text={"LIKE MY PROFILE ON FACEBOOK"}
                       alt="social media link" />
          <ButtonMedia nameClass={'button-tw'}
                       srcImg={require('../images/twitter-icon.png')}
                       text={"FOLLOW ME ON TWITTER"}
                       alt="social media link" />
          <ButtonMedia nameClass={'button-yt'}
                       srcImg={require('../images/yt-icon.png')}
                       text={"SUBSCRIBE TO MY YOUTUBE CHANNEL"}
                       alt="social media link" />
          <ButtonMedia nameClass={'button-ig'}
                       srcImg={require('../images/ig-icon.png')}
                       text={"FOLLOW ME ON INSTAGRAM"}
                       alt="social media link" />
          <ButtonMedia nameClass={'button-sc'}
                       srcImg={require('../images/sc-icon.png')}
                       text={"FOLLOW ME ON SOUNDCLOUD"}
                       alt="social media link" />
        </div>
      </div>
    </div>
      
  )
}

export default Contact