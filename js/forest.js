const headerScroll = (e) => {
	const windowScrollTop = window.pageYOffset;

	if (windowScrollTop > 10 && !document.body.classList.contains('.body--header_scroll_state')) {
		 document.body.classList.add('.body--header_scroll_state');
	} 
	else if (windowScrollTop <= 10 && document.body.classList.contains('.body--header_scroll_state')) {
		 document.body.classList.remove('.body--header_scroll_state');
	}
};

window.addEventListener('scroll', headerScroll);