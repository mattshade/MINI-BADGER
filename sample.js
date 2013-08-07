function createLink(info, tab) {
	var theDetails = new Object;
	theDetails.code = "addLink();";
	theDetails.allFrames = true;
	chrome.tabs.executeScript(tab.id, theDetails);		
}

function props(theObj){
	var outputStr = '';
	for (var prop in theObj) {
        outputStr += prop + '\n';
	}
	 alert(outputStr);
}

chrome.contextMenus.create({"title": "Add/Edit External Link", "contexts":["selection"], "onclick": createLink});

