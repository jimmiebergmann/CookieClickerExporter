function utf8_to_b64( str )
{
	try{
		return Base64.encode(unescape(encodeURIComponent( str )));
	}
	catch(e)
	{
		return '';
	}
}

//////////////////////////////////////////////////////////////////////////////
// Exporting function
//////////////////////////////////////////////////////////////////////////////
function ExportCookies( cookies )
{
	// Cookie variables
	var str = '';
	var cookiesReset = 0;
	var cookiesEarned = 0;
	var cookieClicks = 0;
	var goldenClicks = 0;
	var missedGoldenClicks = 0;
	var handmadeCookies = 0;
	var backgroundType =- 1;
	var milkType =- 1;
	var frenzy = 0;
	var frenzyPower = 1;
	var clickFrenzy = 0;
	var pledges = 0;
	var pledgeT = 0;
	var elderWrath = 0;
	var nextResearch = 0;
	var researchT = 0;
	var version = 1.036;
	var startDate = 1379356301269;
	var elderWrath = 0;

	// Add version and date
	str += version + '|' +'|' + parseInt(startDate) + '|';

	// Add some settings
	str += '1'+ '1'+ '1'+ '1'+ '1'+ '1'+'|';

	// Add the cookie stats
	str += parseFloat(Math.floor(cookies))+';'+
	parseFloat(Math.floor(cookiesEarned))+';'+
	parseInt(Math.floor(cookieClicks))+';'+
	parseInt(Math.floor(goldenClicks))+';'+
	parseFloat(Math.floor(handmadeCookies))+';'+
	parseInt(Math.floor(missedGoldenClicks))+';'+
	parseInt(Math.floor(backgroundType))+';'+
	parseInt(Math.floor(milkType))+';'+
	parseFloat(Math.floor(cookiesReset))+';'+
	parseInt(Math.floor(elderWrath))+';'+
	parseInt(Math.floor(pledges))+';'+
	parseInt(Math.floor(pledgeT))+';'+
	parseInt(Math.floor(nextResearch))+';'+
	parseInt(Math.floor(researchT))+
	'|';
	
	// Encode the string
	str = escape(utf8_to_b64(str)+'!END!');

	// return the encoded cookie string
	return str;
}

