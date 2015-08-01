var Ajax = 
{
	URL : "",

	method : "get",
	
	asynchrouns : true,
	
	createXHR : function () {
		if(typeof XMLHttpRequest != "undefined") {
			return new XMLHttpRequest();
		
		} else if(typeof ActiveXObject != "undefined") {
			var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"]
			,i
			,len;

			for (i = 0, len = versions.length; i < length; i++) {
				try {
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch(e) { }	
			}

			return new ActiveXObject(arguments.callee.activeXString);
		
		} else {
			throw new Error("No XHR object available.");
		}
	},

	addURLParam : function (url, key, value) {
		url += url.indexOf("?") == -1 ? "?" : "&";
		url += encodeURIComponent(key) + "=" + encodeURIComponent(value);
		return url;
	},

	responseTxt : function(xhr) {
		var response;
		xhr.addEventListener("readystatechange", function(){
			if(xhr.readyState == 4) {
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				alert(xhr.responseText); 
			}
		}
		}, false);
	},

	open : function(xhr) {
		xhr.open(Ajax.method, Ajax.URL, Ajax.asynchrouns);
	},

	send : function (xhr) {
		xhr.send(null);
	}
};
