import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<div className='ui secondary pointing menu'>
			<Link to='/' className='item'>
				YT-Focus
			</Link>
			<div className='right menu'>
				<Link to='/youtube' className='item'>
					Youtube Search
				</Link>
			</div>
		</div>
	);
};

export default Header;
