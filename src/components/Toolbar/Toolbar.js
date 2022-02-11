import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = props => {
   return(
        <header className='toolbar' >
                <nav className='toolbar_nav' >
                    <div> <DrawerToggleButton click={props.drawerToggleClickHandler} /> </div>
                    <div className='toolbar_logo' > <a href='/'> Logo </a> </div>
                    <div className='spacer' ></div>
                    <div className='toolbar_nav-items'> 
                            <ul>
                                <li>
                                    <a href='/'> Products </a>
                                </li>
                                <li>
                                    <a href='/'> Users </a>
                                </li>                        
                            </ul>
                    </div>
                </nav>
            </header>
   )
   
}

export default Toolbar;