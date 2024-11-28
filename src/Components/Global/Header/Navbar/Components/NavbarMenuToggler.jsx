import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOpenNavbarMenu } from '../../../../../Store/slices/appSlice';

function NavbarMenuToggler() {

    const { openNavbarMenu } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(handleOpenNavbarMenu(!openNavbarMenu));
    };

    return (
        <button
            type='button'
            aria-label='Menu Toggler'
            onClick={handleToggleMenu}
            title='Menu Toggler'
            className='text-2xl md:hidden'
        >
            <i className="fa-solid fa-bars"></i>
        </button>
    )
}

export default NavbarMenuToggler;