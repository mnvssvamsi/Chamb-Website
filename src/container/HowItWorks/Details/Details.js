import React from 'react'
import './Details.css'
import signUpIcon from '../../../images/works-icon-01.png'
import searchIcon from '../../../images/works-icon-02.png'
import contactIcon from '../../../images/works-icon-03.png'

const Details = () => {
    return (
        <div className='how-it-works container'>
            <div className='row'>
                <div className=' block1 col-md-5 col-sm-6 col-xs-12'>
                    <div className="left-works-box" >
                        <h2>How it works if &nbsp; </h2>
                        <span>you’re a buyer.</span>
                        <p>We explained the buying proces of Chamb in
                        three simple steps. See how it works,
                        benefits and FAQ.
                        </p>
                        <div className="form-email-box">
                            <h3>Sign up for free</h3>
                            <form className="box-email">
                                <input type="email" placeholder="Enter your e-mail" />
                                <button>Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" block2 col-md-7 col-sm-6 col-xs-12">
               <div className="right-works-box">
                  <div className="small-box box" >
                     <div className="how-text-left">01</div>
                     <div className="how-dit-right">
                        <div className="dit-img">
                           <img className="img-responsive" src={signUpIcon} alt="signup"  />
                        </div>
                        <h3>Sign up</h3>
                        <h2 className='h2-caption' ><span>Small or big,</span> we have the solution.</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                           voluptatem accusantium doloremque laudantium rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis et quasi
                           architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p>laudantium rem aperiam, eaque ipsa quae ab illo
                           inventore veritatis
                        </p>
                        <div className="line"></div>
                     </div>
                  </div>
                  <div className="searching-box box " >
                     <div className="how-text-left">02</div>
                     <div className="how-dit-right">
                        <div className="dit-img">
                           <img className="img-responsive" src={searchIcon} alt="search"/>
                        </div>
                        <h3>Search</h3>
                        <h2>We revolutionized &nbsp; <span>searching.</span></h2>
                        <p>laudantium rem aperiam, eaque ipsa quae ab illo
                           inventore veritatis
                        </p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                           voluptatem accusantium doloremque laudantium rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis et quasi
                           architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div className="line"></div>
                     </div>
                  </div>
                  <div className="sellers-box box ">
                     <div className="how-text-left">03</div>
                     <div className="how-dit-right">
                        <div className="dit-img">
                           <img className="img-responsive" src={contactIcon} alt="contact" />
                        </div>
                        <h3>Contact &amp; buy</h3>
                        <h2>Contact sellers &nbsp;and <span>start buying</span></h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                           voluptatem accusantium doloremque laudantium rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis et quasi
                           architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p>laudantium rem aperiam, eaque ipsa quae ab illo
                           inventore veritatis
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            </div>
        </div>
    )
}
export default Details