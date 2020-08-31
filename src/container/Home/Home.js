import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Landingpage  from '../../components/Landingpage/Landingpage'
import Aux from '../../hoc/Aux'
 const Home = () => {
    return (
        <Aux>
            <Navbar />
            <Landingpage />
        </Aux>
    )
}

export default Home
