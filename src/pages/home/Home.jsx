import React from 'react'
import Menu from '../../components/Menu/Menu'
import './Home.css'
import Company from '../../components/Company/Company'

const Home = () => {
    return (
        <div className='HomeContainer'>
            <div className="HomeMenu">
                <Menu />
            </div>
            <div className="HomeInvoiceContainer">
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
                <Company />
            </div>

        </div>
    )
}

export default Home