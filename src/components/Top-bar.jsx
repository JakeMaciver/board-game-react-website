export const Topbar = ({setSidebarVisible, screenWidth}) => {

  const handleMenuOnClick = () => {
    if(screenWidth < 1020) setSidebarVisible((sidebarVisible) => !sidebarVisible);
  }

  return (
		<section className='top-bar'>
			{screenWidth > 1020 ? null : (
				<section className='menu-icon'>
					<span
						className='material-symbols-outlined'
						onClick={handleMenuOnClick}
					>
						menu
					</span>
				</section>
			)}
			<section className='create-review-btn'>
				<button className='create-review-btn'>Create A Review</button>
			</section>
			<section className='account-icon'>
				<span className='material-symbols-outlined'>account_circle</span>
			</section>
		</section>
	);
}