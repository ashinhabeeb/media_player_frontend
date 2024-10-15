import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
      <div className="row w-100 p-5">
        <div className="col-md-3">
       <div className='bg-transparent text-warning fs-3'>
          <FontAwesomeIcon icon={faVideo} />{' '}
          Media Player
       </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas illo deleniti vero laboriosam officiis ex nemo eveniet possimus unde dolorem cupiditate veritatis eos vitae fugiat neque ab modi, atque reprehenderit.</p>
        </div>
        <div className="col-md-3 ps-md-5 ">
          <h3>Links</h3>
         <Link to={'/'}> <p><a href="">Landing Page</a></p></Link>
         <Link to={'/home'}><p> <a href="">Home</a></p></Link>
         <Link to={'/watchhistory'}> <p><a href="">Watch History</a></p></Link>
        </div>
        <div className="col-md-3 ps-md-5 ">
          <h3>Guides</h3>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-3">
          <h3>Contact Us</h3>
          <div className='d-flex gap-2'>
            <input type="text" placeholder='Email-id' className='form-control' />
            <button className='btn btn-warning'>subscribe</button>
         </div>
         <div className='d-flex justify-content-between fs-4 mt-4 '>
              <FontAwesomeIcon icon={faInstagram}/>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />

            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
