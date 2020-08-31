import React from 'react'
import chambIcon from '../../../images/xpann-icon.jpg'
import createIcon from '../../../images/create-icon.jpg'
import getIcon from '../../../images/get-icon.jpg'
import './MainSecondary.css'
 const MainSecondary = () => {
    return (
        <div className="main-box">
        <div className="container">
           <div className="row panel-row">
              <div className="col-md-4 col-sm-6">
                 <div className="panel">
                    <div className="panel-body">
                       <img src={chambIcon} className="icon-small" alt="chamb" />
                       <h4>“Chamb” Your Business</h4>
                       <p>Grow easily with chamb. Create free account.
                          We help expanding your business easily.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                 <div className="panel">
                    <div className="panel-body">
                       <img src={createIcon} className="icon-small" alt="create" />
                       <h4>Create and add</h4>
                       <p>Grow easily with chamb. Create free account.
                          We help expanding your business easily.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 col-sm-6 hidden-sm">
                 <div className="panel">
                    <div className="panel-body">
                       <img src={getIcon} className="icon-small" alt="get" />
                       <h4>Get inspired</h4>
                       <p>Grow easily with chamb. Create free account.
                          We help expanding your business easily.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}

export default MainSecondary