exports.CookieObject = function(cookieString){
  var cookieObj = Object();
	var cookieStr = cookieString.replace("['");
	cookieStr = cookieStr.replace("']");
	var cookieSplit = cookieStr.split(";");

	for(i=0;i<cookieSplit.length;i++)
	{
		var keyPair = cookieSplit[i].split("=");
		cookieObj[keyPair[0]] = keyPair[1];
	}

	return cookieObj;
}
