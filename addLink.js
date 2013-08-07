function addLink(){
		var textSelection = document.getSelection();
		if(textSelection != ''){
			var cellRange =	textSelection.getRangeAt(0);
			var theParentNode = cellRange.commonAncestorContainer.parentNode
			if(theParentNode.nodeName != "A"){
				var url = prompt("Please enter URL. Include 'http://'.","http://");
			}else{
				var url = prompt("Edit the URL or delete the URL to remove the link.  Include 'http://'.", theParentNode.attributes['href'].value);
			}
			if(url.indexOf('/cnbc.com') != -1 || url.indexOf('www.cnbc.com') != -1 || url.indexOf('data.cnbc.com') != -1 || url.indexOf('video.cnbc.com') != -1 || url.indexOf('.cnbc.com') != -1 || (url.indexOf(':') == -1 && url != '')){
				alert("This interface is only for creating links to external URLs");
			}else if(url != "http://" && url != "" && url != null){
				if(theParentNode.nodeName != "A"){
					var newNode = document.createElement("a");
					newNode.setAttribute("href", url);
					cellRange.surroundContents(newNode);
				}else{
					theParentNode.attributes['href'].value = url;
				}
			}else if(url == ""){
				var linkNode = cellRange.commonAncestorContainer.parentNode;
				linkNode.outerHTML = linkNode.innerText;
			}
		}	
}

function props(theObj){
	var outputStr = '';
	for (var prop in theObj) {
        outputStr += prop + '\n';
	}
	 alert(outputStr);
}