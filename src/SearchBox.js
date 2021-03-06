import React from 'react';

const SearchBox = ({onsearch}) => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b-green bg--lightest-blue'
		type='search' 
		placeholder='search a robot'
		onChange={onsearch}
		/>
		</div>
	);
}
export default SearchBox;