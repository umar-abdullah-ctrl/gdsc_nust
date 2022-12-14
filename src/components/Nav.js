import React, { useState, useEffect } from 'react'

export const Nav = () => {
	const smallScreen = useWindowDimensions();  // returns true or false
	const [show_items, setShowHidden] = useState(false);
	const n_links = 5;

	return (
		<nav>
			<div className={smallScreen?'flex-col':'flex-row'}>
				<div className='nav-item'>Home</div>
				<div className={smallScreen?'flex-col':'flex-row'}>
					{Array.from(Array(n_links).keys()).map((item, i)=>{
						return(
						<div
							key={i}
							hidden={!show_items && smallScreen}
							className='nav-item'>Link{i+1}
						</div>
						)
					})}
				</div>
			</div>
			<div className='nav-btn' onClick={()=>{setShowHidden(!show_items)}} hidden={!smallScreen}> <img src="/drop_icon.png" alt="" /> </div>
		</nav>
	)
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	return windowDimensions < 760;
}