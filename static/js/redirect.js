function redirectYaeji(){
	var curPath = window.location.pathname;
	if(curPath != '/' && curPath != ''){
		window.location.replace(redirectURL + curPath);
	}
}

redirectYaeji();