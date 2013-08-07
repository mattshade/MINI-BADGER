
if(document.location.href.indexOf('toolbelt') == -1 && document.location.href.indexOf('cnbc.com') != -1){
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "http://localhost:8888/charts/google-charts.js";
	$("div.omni").before(s);
}
var domain = document.domain;

var publish = "http://pub.cnbc.com/";
var stage = "http://stg.pub.cnbc.com/";
var qa = "http://qa.pub.cnbc.com/";
var development = "http://dev.pub.cnbc.com/";



var miniBadgerTools ="<div id='mini-badger-tools'>mb</div>";
$('.viewScreen').append(miniBadgerTools);


var idInput = '<input id="sv-asset-id" title="double-click a summary view to show its ID"></input>';

$('#mini-badger-tools').append(idInput);
//var editContemplateButton = '<button id="cont-edit-btn">Edit Contemplates</button>';
//$('#mini-badger-tools').append(editContemplateButton);
//var saveAsContemplateButton = '<button id="cont-saveas-btn">Save As Contemplates</button>';
//$('#mini-badger-tools').append(saveAsContemplateButton);
var getImageSourceButton = '<button id="get-source">Get Image Source</button>';
$('#mini-badger-tools').append(getImageSourceButton);
var specialCharBtn = '<button id="special-char-btn">Special Characters</button>';
// $('#mini-badger-tools').append(specialCharBtn);
var makeLinkBtn = '<button id="make-link-btn">Create Link</button>';
var wikiLink = '<button id="wiki-link-btn">Help?</button>';
$('#mini-badger-tools').append(wikiLink);






var forceReload = '<button id="force-reload-btn" title="Click here and publish to force a reload of a live blog in the event that you have made a correction to previous updates.">Live Correction</button>';
$('#mini-badger-tools').append(forceReload);
$('#force-reload-btn').hide();

var liveBlogBtn ='<input type="checkbox" id="live-blog-btn"';
	//alert($.cookie("liveblog"));
	if($.cookie("liveblog") == 'true'){
		liveBlogBtn +=' checked';
		$('#force-reload-btn').show();
	}
	liveBlogBtn += '/><label for="live-blog-btn" title="When checked new group will be added to the top of the body.">live blog</label>';
$('#mini-badger-tools').append(liveBlogBtn);
$("#correction").removeAttr("correction").removeAttr("id");
$('#force-reload-btn').on('click', function(){
									
	$("#iframe1").contents().find("body p").eq(0).attr('correction' , Math.round(Math.random() * 10000000000000000 )).attr('id','correction');
	
	$('[data-id="edit-workflow-publish"]')[0].value = "Publish Correction";
});



// $('#mini-badger-tools').append(makeLinkBtn);
// $('#iframe2').append(makeLinkBtn);
var specialCharacterBox = '<div id="special-characters"><ul id="special-char-list"><li>&#8216\;</li><li>&#8217\;</li><li>&#8218\;</li><li>&#8220\;</li><li>&#8221\;</li><li>&#8222\;</li><li>&#8230\;</li><li>&#8240\;</li><li>&#8249\;</li><li>&#8250\;</li><li>&#8254\;</li><li>&#8482\;</li><li>&#38\;</li><li>&#60\;</li><li>&#62\;</li><li>&#91\;</li><li>&#93\;</li><li>&#150\;</li><li>&#151\;</li><li>&#161\;</li><li>&#162\;</li><li>&#163\;</li><li>&#164\;</li><li>&#165\;</li><li>&#166\;</li><li>&#167\;</li><li>&#168\;</li><li>&#169\;</li><li>&#170\;</li><li>&#171\;</li><li>&#172\;</li><li>&#173\;</li><li>&#174\;</li><li>&#175\;</li><li>&#176\;</li><li>&#177\;</li><li>&#178\;</li><li>&#179\;</li><li>&#180\;</li><li>&#181\;</li><li>&#182\;</li><li>&#183\;</li><li>&#184\;</li><li>&#185\;</li><li>&#186\;</li><li>&#187\;</li><li>&#188\;</li><li>&#189\;</li><li>&#190\;</li><li>&#191\;</li><li>&#192\;</li><li>&#193\;</li><li>&#194\;</li><li>&#195\;</li><li>&#196\;</li><li>&#197\;</li><li>&#198\;</li><li>&#199\;</li><li>&#200\;</li><li>&#201\;</li><li>&#202\;</li><li>&#203\;</li><li>&#204\;</li><li>&#205\;</li><li>&#206\;</li><li>&#207\;</li><li>&#208\;</li><li>&#209\;</li><li>&#210\;</li><li>&#211\;</li><li>&#212\;</li><li>&#213\;</li><li>&#214\;</li><li>&#215\;</li><li>&#216\;</li><li>&#217\;</li><li>&#218\;</li><li>&#219\;</li><li>&#220\;</li><li>&#221\;</li><li>&#222\;</li><li>&#223\;</li><li>&#224\;</li><li>&#225\;</li><li>&#226\;</li><li>&#227\;</li><li>&#228\;</li><li>&#229\;</li><li>&#230\;</li><li>&#231\;</li><li>&#232\;</li><li>&#233\;</li><li>&#234\;</li><li>&#235\;</li><li>&#236\;</li><li>&#237\;</li><li>&#238\;</li><li>&#239\;</li><li>&#240\;</li><li>&#241\;</li><li>&#242\;</li><li>&#243\;</li><li>&#244\;</li><li>&#245\;</li><li>&#246\;</li><li>&#247\;</li><li>&#248\;</li><li>&#249\;</li><li>&#250\;</li><li>&#251\;</li><li>&#252\;</li><li>&#253\;</li><li>&#254\;</li><li>&#255\;</li></ul></div>';
// $('.viewScreen').append(specialCharacterBox);






var live_buttons = '<div id="live-btns"><button id="hb-live-edit" onclick="window.open(\'http://\' + document.location.host.replace(\'www\',\'toolbelt\').replace(\'pub\',\'toolbelt\') + \'/node/\' + CNBC_Settings.pageNodeId + \'/edit\');">edit</button>';
live_buttons += '<button id="hb-read" onclick="window.open(\'http://\' + document.location.host.replace(\'www\',\'toolbelt\').replace(\'pub\',\'toolbelt\') + \'/node/\' + CNBC_Settings.pageNodeId + \'/edit?readOnly=true\');">read</button><br/>';
live_buttons += '<button onclick="window.open(\'https://sc2.omniture.com/sc15/reports/index.html?rp=search%5Brows%5D%5B0%5D%5Bstring%5D%7C\' + CNBC_Settings.pageNodeId + \'&r=Report.MostPopularCustomInsight&a=Report.Standard\');">omniture</button><br/>';
live_buttons += '<button onclick="window.open(\'http://mpsadmin.cnbc.com/jump/using/\' + CNBC_Settings.pageNodeId);">mps</button>';
//live_buttons += '<button id="related-cnt" onmousedown="this.className=CNBC_Settings.pageNodeId;">related</button>';
live_buttons += '<button onclick="storedInfo=\'<button onclick=\\\'this.outerHTML = infoOutput\\\'>info</button>\'; var excludeValues = \'instance,keywords,description,hline,cat,modified\'; lastRendered = new Date(Date.parse($(\'meta[name=\\\'Search.Updated\\\']\').attr(\'content\'))); infoOutput = \'<div style=\\\'width:300px; background:#ffffff; color:#000000; padding:5px; font-size:10pt;\\\'><button style=\\\'float:right;\\\' onclick=\\\'this.parentNode.outerHTML=storedInfo\\\'>X</button><br/>\'; for(key in mps.pagevars){if(excludeValues.indexOf(key) == -1){infoOutput += key.toUpperCase() + \': <div>\' + mps.pagevars[key] + \'</div><br/>\'}}; infoOutput += \'OMNITURE PAGENAME: <div><a target=\\\'_new\\\' href=\\\'https://sc2.omniture.com/sc15/reports/index.html?rp=search%5Brows%5D%5B0%5D%5Bstring%5D%7C\' + CNBC_Settings.pageNodeId + \'&r=Report.MostPopularCustomInsight&a=Report.Standard\\\'>\' + s.pageName + \'</a></div><br/>\'; infoOutput += \'LAST PUBLISHED MANUALLY: <div>\' + lastRendered + \'</div><br/>\'; infoOutput += \'ID: <div>\' + CNBC_Settings.pageNodeId + \'</div><br/>\'; infoOutput += \'</div>\'; this.outerHTML = infoOutput">info</button></div>';

if ($('#the-honeybadger')) {
	$('#live-btns').remove();    
}
$('#cnbc-contents').append(live_buttons);

$('body').ready( function(){
	if(document.location.href.indexOf('cnbc.com') != -1){					  
		$('div.reportabuse').each(function(){
			var snasID = $(this).attr('id').replace('repabs_', '');							   
			$(this).append(' | <a href="http://snasadmin.nbcuni.com/snas/api/editCmnt?snasAdminSiteName=SNASADMIN&commentID=' + snasID + '" target="_new">Edit</a>');					   
		});
	}
	if(document.location.href.indexOf('http://snasadmin.nbcuni.com/snas/api/editCmnt') != -1){
		var commentID = $("input[name='commentID']").attr('value');
		$('td.title_tr_header_1').append('<a href="javascript:deleteInnerComment(\'' + commentID + '\');" class="blog_link"><img src="/images/trash.jpg" border="0" title="Delete"></a>');
		var snasUserName = $("a[title='list user comments'] span").text();
		$("a[title='list user comments']").append('<a href="http://snasadmin.nbcuni.com/snas/api/listWarnOrSuspend?snasAdminSiteName=SNASADMIN&actionValue=warnOrSuspend&searchType=UserName&userNameSearch=' + snasUserName + '&isSearch=true");" class="blog_link"><img src="/images/trash.jpg" border="0" title="Delete"></a>');
		
		
	}
});

var loggy ="<div class='log'>hello</div>";
// $('.viewScreen').append(loggy);
$('.log').css({'position':'absolute','top':'0px','border':'blue solid 1px','left':'500px'});

$('#related-cnt').live('click', function(){	
	var nid = $('#related-cnt')[0].className;
	$.getJSON('http://toolbelt.cnbc.com/services/search/resultswithsummaryviews/?parents=0&contemplates=0&status=3,4,6&assocs=AND' + nid + 'AT3,4,5,20,26&page=1&size=100&sortorder=desc&sortfield=last_pub_date&lastoffset=0', function(data) {
	  var items = [];
	 console.log(data);
	  $.each(data.searchresults, function(key, val) {
		items.push('<li><a href="http://www.cnbc.com/id/' + data.searchresults[key]['nid'] + '">' + data.searchresults[key]['slug'] + '</a></li>');
	  });
	 
	  $('<ul/>', {
		'class': 'related-cnt',
		html: items.join('')
	  }).appendTo('body');
	});
});
//$.cookie('recentContemplates', null, { path : '/', expires : 1000 })
function setContemplates(){

	var contemplateNID = $('#edit-contemplate-nid').attr('value');
	var contemplateSlug = $('h2.with-tabs').text().toString();
	var contemplateType = $('h2.with-tabs img').attr('title');
	
	contemplateSlug = contemplateSlug.substring(1, contemplateSlug.length - 4);
	
	var newContemplate = new Object();
	
	newContemplate[0] = new Object();
	newContemplate[0]['nid'] = contemplateNID;
	newContemplate[0]['slug'] = contemplateSlug;
	newContemplate[0]['type'] = contemplateType;
	
	var currentContemplates = getContemplates();
	
	//console.log("cc", currentContemplates);
	//console.log(currentContemplates.length)
	var count = 1;
	for (var attrname in currentContemplates){ 
		if(count <= 9 && currentContemplates[attrname].nid != contemplateNID){
			newContemplate[count] = currentContemplates[attrname];
			count++;
		}
	}
	
	
	//console.log("nc", newContemplate);
	
	
	//currentContemplates.unshift({contemplateNID: contemplateSlug});
	//console.log(JSON.stringify(newContemplate));
	$.cookie('recentContemplates', JSON.stringify(newContemplate), { path : '/', expires : 1000 });
	
	
	//console.log($.cookie('recentContemplates'));
}


//$.cookie('recentContemplates', null)

function getContemplates(){ 
	if($.cookie('recentContemplates')){
		return JSON.parse($.cookie('recentContemplates'));
	}else{
		return new Object();
	}
}

if(document.location.href.indexOf('/clone') != -1){
	$('input[type="submit"]').on('click', function(){
		setContemplates();	
			
											   
	});
	
}

if(document.location.href.indexOf('toolbelt') != -1){
	var dateLineSort = '<option value="unpublish_date">Unpublish Date</option><option value="dateline">Dateline</option><option value="title">Title</option><option value="slug">Slug</option>';
	$("select#pTypes").append(dateLineSort);
	
	
	//var imgPreview = 'haklsdfjlaksdfklsfj';
	//$("img.promo").append(imgPreview);
	
	$("a.details").live("click", function(event){
		setTimeout("addLiveLink('" + $(this).attr('id').replace('info-', '') + "')", 500)								  	
		 
	});
	
	$("a.details").live("click", function(event){
								
  		setTimeout("correctThumbSize('" + $(this).attr('id').replace('info-', '') + "')", 500)
		
	});
	
	$("li[typeid='36'] a.details").live("click", function(event){
								
  		setTimeout("enlargeThumb('" + $(this).attr('id').replace('info-', '') + "')", 500)
		
	});
	
	
	
							  
	
	$("img.promo").live('click', function(){
													   
		var orgSizeImg = $(this).attr('src');
		//console.log($(this).parent().parent().parent())
		//240x160
		if(orgSizeImg.indexOf('140x105') != -1){
			if($(this).parent().parent().parent().hasClass("connectedSortable")){
				var modSizeImg = $(this).attr('src').replace('140x105', '320x180');
				var width = 320;
				var height = 180;
				console.log(1);
			}else if($(this).parent().parent().parent().hasClass("sortable")){
				var modSizeImg = $(this).attr('src').replace('140x105', '600x400');
				var width = 600;
				var height = 400;
				console.log(3);
			}else{
				var modSizeImg = $(this).attr('src').replace('140x105', '530x298');
				var width = 530;
				var height = 298;
				console.log(3);
			}
		}else{
			var modSizeImg = $(this).attr('src').replace('530x298', '140x105').replace('320x180', '140x105');
			var width = 140;
			var height = 105;
			
				console.log(4);
		}
		$(this).error(function(){
			this.src = 'http://fm-preview.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/07/19/100900672-error.530x298.jpg?d=1374273922';							  
		});			
		
		$(this).attr('src', modSizeImg);
		$(this).css('width', width);
		$(this).css('height', height);
		
	});
	
	//var dependenciesBtn = '<li class="menu-item" id="tab-dependencies" title="Dependencies"><span>Dependencies</span></li>';
	//$('ul.tab-filter').append(dependenciesBtn);
	
	//$("table.menu1 table tr td").css('margin', '0px').css('text-align', 'left');
	$("table.menu1 table tr a").css('display', 'block').css('width', '100%').css('height','100%').css('padding', '2px').css('margin', '0px');
	
	
	
	
	var contemplateLabels = { media: "Media", leaf: "Pages", tag: "Sections", utility: "Utilities",  button: ""}
	var contemplateList = 	{ 
								"Blog Post": {group:"leaf", icon:"/sites/all/themes/cms_theme/images/icon_blogpost.png"},
								"News Story": {group:"leaf", icon:"/sites/all/themes/cms_theme/images/icon_cnbcnewsstory.png"},
								"Image": {group:"media", icon:"/sites/all/themes/cms_theme/images/icon_image.png"},
								"Saved Search": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_cnbcsavedsearch.png"},
								"Security": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_security.png"},
								"Skin": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_skin.png"},
								"SlideShow": {group:"leaf", label: "Slide Show", icon: "/sites/all/themes/cms_theme/images/icon_slideshow.png"},
								"Source": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_source.png"},
								"Usage Rule": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_usagerule.png"},
								"WebResource": {group:"media", label: "Web Resource", icon: "/sites/all/themes/cms_theme/images/icon_webresource.png"},
								"Webservice": {group:"media", label: "Web Service", icon: "/sites/all/themes/cms_theme/images/icon_webservice.png"},
								"Wild Card": {group:"media", label: "Wildcard", icon: "/sites/all/themes/cms_theme/images/icon_wildcard.png"},
								"Wire Story": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_wirestory.png"},
								"Quiz Entry": {group:"leaf", label: "Quiz", icon: "/sites/all/themes/cms_theme/images/icon_quiz.png"},
								"Promotional Package": {group:"utility", label: "Promo Package", icon: "/sites/all/themes/cms_theme/images/icon_promopackage.png"},
								"Product": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_product.png"},
								"Press Release": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_pressrelease.png"},
								"Poll": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_poll.png"},
								"Place": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_place.png"},
								"Person": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_person.png"},
								"Partner Story": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_partnerstory.png"},
								"Organization": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_organization.png"},
								"Franchise": {group:"tag", icon:"/sites/all/themes/cms_theme/images/icon_franchise.png"},
								"Flash": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_flash.png"},
								"File": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_file.png"},
								"Event": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_event.png"},
								"Episode": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_episode.png"},
								"Editorial Search": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_editorialsearch.png"},
								"Editorial File": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_editorialfile.png"},
								"Creator": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_creator.png"},
								"Company": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_company.png"},
								"Chart": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_chart.png"},
								"Audio": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_audio.png"},
								"Team": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_team.png"},
								"Project": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_project.png"},
								"From Scratch": {group:"button", icon: "/sites/all/themes/cms_theme/images/edit-icon.png", label: "From Scratch..."},
								
							};
	
	var commonAssets = ['Blog Post', 'Image', 'News Story', 'Franchise', 'Skin', 'Creator', 'Chart', 'Saved Search', 'From Scratch'];
	$("table.menu1").eq(0).prepend('<tr><td colspan="2"><div id="contemplateDisp"></div></td></tr>').css('border','1px solid #eeeeee').css('width','650px').css('z-index','50000').css('-webkit-box-shadow', '0px 0px 10px 0px #000');
	
	
	
	for(key in contemplateLabels){
		$("#contemplateDisp").append('<div class="contemplate-label" id="contemplate-label-' + key + '"><h1>' + contemplateLabels[key] + '</h1></div>');
		$("table.menu1 table td a").each(function( index ) {
		
		
			
			//
			//for(assetName in contemplateList){
				//console.log(key);
				//console.log(contemplateList[$(this).text()].group);
				//console.log('');
				if(key == contemplateList[$(this).text()].group){
					//$(this).css('border', '1px solid #eeeeee');
					
					if(commonAssets.indexOf($(this).text()) != -1){
						//$(this).css('font-weight', 'bold');
						if(contemplateList[$(this).text()].icon){
							$(this).prepend('<sub><img src="' +contemplateList[$(this).text()].icon + '"></sub>');
						}
						$("#contemplate-label-" + key).find("h1").after($(this));
					}else{
						$("#contemplate-label-" + key).append($(this));
					}
					
					if(contemplateList[$(this).text()].label){
						$(this).text(contemplateList[$(this).text()].label);
					}
					//console.log(contemplateLabels[key]);
					//console.log($(this).text());
					//console.log('');
				}
		

		}).css('color', '#333333');
		$("#contemplate-label-" + key).css('text-align','left').css('margin', '0px 0px 5px 15px').css('width','140px').css('font-size', '125%');
	}
	
	$("table.menu1 tr td img").css('float', 'left').css('position', 'relative').css('display','inline').css('left', '-6px');
	$("table.menu1 tr td").css('background', '#efefef').css('background-image', 'none');
	$(".contemplate-label").css("float", "left");
	$("table.menu1 table").remove();
	
	
										
	var recentContemplates = getContemplates();
	var contemplateOut = '<div id="recent-contemplates"><h1>Recent Contemplates</h1><div id="contemplateContainer"><div><ul>';
	console.log(recentContemplates);
	if(recentContemplates){
		var contemplateCount = Object.keys(recentContemplates).length;
	}else{
		var contemplateCount = 0;
	}
	for(contemplateIndex in recentContemplates){
		var currentContemplate = recentContemplates[contemplateIndex];
		if(currentContemplate.slug.length > 35){
			currentContemplate.slug = currentContemplate.slug.substring(0,35) + '...';
		}
		
		if(typeof currentContemplate.type != 'undefined'){
			var imageTag = '<img title="' + currentContemplate.type + '" src="' + contemplateList[currentContemplate.type].icon + '">';
			console.log(contemplateList[currentContemplate.type].icon);
		}else{
			var imageTag = '';	
		}
		contemplateOut += '<li><a href="/node/' + currentContemplate.nid + '/clone"><sub>' + imageTag + '</sub> ' + currentContemplate.slug + '</a></li>';
		
		contemplateIndex = parseInt(contemplateIndex);
		console.log(contemplateIndex, Math.round(contemplateCount/2));
		if(contemplateIndex == Math.round(contemplateCount/2)-1){
			contemplateOut += '</ul></div><div><ul>';
		}
	}
	contemplateOut += '</ul></div></div></div>';
	if(contemplateCount){
		$("#contemplateDisp").before(contemplateOut);
		$("#recent-contemplates").css('float', 'right');
	}
	console.log($("#contemplateDisp"));
								
	
/*
	if(document.location.href.indexOf('toolbelt.cnbc.com/search-home') != -1){
		$(".ui-layout-container").css('visibility', 'visible !important').css('display', 'block').css('z-index', '3000');
		$(".ui-layout-center").css('visibility', 'visible !important').css('display', 'block').css('z-index', '3000');
		$(".edit").css('z-index', '3000');
		var cloneOfContemplateMenu = $("table.menu1").clone(1);
		$("div.ui-layout-center").first().prepend(cloneOfContemplateMenu).css('visibility', 'visible').css('z-index', '3000');
		
		
	}
*/
/*
	var assetOptionsHTML = '<select id="assetOptions">';
	assetOptionsHTML += '<option value="">assets...</option>';
	assetOptionsHTML += '<option value="20,36,49,71,91">content</option>';
	assetOptionsHTML += '<option value=""></option>';
	assetOptionsHTML += '</select>';
	
	$("div#tool").after(assetOptionsHTML);
	$("#assetOptions").change(function(){
									  	var assetIDs = $(this).val().split(',');
										for(i=0 ; i<assetIDs.length ; i++){
											console.log($('#T-' + assetIDs[i] ))
											$('#T-' + assetIDs[i] ).trigger('click');
										}
									  }
							);
*/



}

function addLiveLink(theID){
	
		
		 
	$('span#' + theID + ' div.promoTitle').append('<a href="http://www.cnbc.com/id/' + theID + '" target="_new" class="small">LIVE</a>');;
	
	
}


function correctThumbSize(theID){
	
	var theImg = $('span#' + theID + ' img.promo, span#' + theID + 'dropped img.promo');
	theImg.css('width', 140);
	theImg.css('height', 105);
}


function enlargeThumb(theID){
	
	var theImg = $('span#' + theID + ' img.promo, span#' + theID + 'dropped img.promo');
	theImg.click();
	
}
	

var contemplateTimer = setInterval(setTheRed,100);
var editingContemplates = 0;

function setTheRed(){    
if($('.search-loader').css('display')=="block"){	
	// $('.log').text('we are hiding');
}else{
	// $('.log').text('we are not hiding');
	if($('#cont-saveas-btn').text() =="Do Not Save As Contemplates"){
		$('#cont-saveas-btn').trigger('click');
	}
	
	$('input[value="Save as a Contemplate"]').hide();
	
	$('.contButton').parent().css({'background':'darkred'});
	$('.contButton').parent().find('em strong').css({'color':'white'});
	$('.contButton').parent().find('em strong').css({'color':'white'});
	if(editingContemplates == 0){
		$('.contButton').parent().find('.editButton').hide();
	}else{
		$('.contButton').parent().find('.editButton').show();
	}
	
	clearInterval(contemplateTimer);
}
}


$('.pagination a, .searchIcon').live('click', function(){
	contemplateTimer = setInterval(setTheRed,100);
	
});



$('li.menu-item, .contButton, .menuSearch').on('click', function(){
	contemplateTimer = setInterval(setTheRed,100);
});

$(window).resize(function() {
  contemplateTimer = setInterval(setTheRed,100);
});

$(".viewScreen").keyup(function(e){ 
    var code = e.which; // recommended to use e.which, it's normalized across browsers
    if(code==13)e.preventDefault();
    if(code==32||code==13||code==188||code==186){
        contemplateTimer = setInterval(setTheRed,100);
    } 
});

$('#cont-edit-btn').toggle(function() {
	$(this).text('Do Not Edit Contemplates');
	$('.contButton').parent().find('.editButton').show();
  editingContemplates = 1;
}, function() {
	$(this).text('Edit Contemplates');
	$('.contButton').parent().find('.editButton').hide();
  editingContemplates = 0;

});

$('#cont-saveas-btn').toggle(function() {
	$(this).text('Do Not Save As Contemplates');
	$('input[value="Save as a Contemplate"]').show();
  
}, function() {
	$(this).text('Save As Contemplates');
	$('input[value="Save as a Contemplate"]').hide();
  

});

$('#get-source').live('click',function(){
	var imgSrc = $('#cropbox').attr('src');
	$('.log').text(imgSrc);
	window.open('http://toolbelt.cnbc.com' + imgSrc,'_blank');
});

$('.summary').live('dblclick',function(){
  	var the_id = $(this).find('small').attr('arrowid');
	$('#sv-asset-id').val(the_id);
});
$('#wiki-link-btn').live('click', function(){	
	window.open('https://sites.google.com/site/toolbeltmanual/','_blank');	
});
// $('#special-characters').hide();
// 
// $('#special-char-btn').toggle(function() {
//   $('#special-characters').show();
// $(this).addClass('active-on');
// }, function() {
//   $('#special-characters').hide();
// $(this).removeClass('active-on');
// });


$( "ul.block li.draggThis" ).on( "dragstop", function( event, ui ) {
	alert('dropped');
} );


$('.wym_tools_group a').on('click', function(){
//.mouseover()
	if($("#wrapperSelector strong").text().indexOf('Body') != -1){
		$('#edit-body-wrapper iframe').click();
		if($('#live-blog-btn').prop("checked") == true){
			window.setTimeout("postpone()", 0);
		}
	}
	
// $('.groups').each(function( index ) {
//   	alert($(this).attr('groupnumber'));
// 
// });	
});

$('#live-blog-btn').on('click', function(){
	if($('#live-blog-btn').prop("checked")){									 
		$('#force-reload-btn').show();
	}else{
		$('#force-reload-btn').hide();
	}
	$.cookie("liveblog", $('#live-blog-btn').prop("checked"));
});

$('body').ready( function(){
	if(this.location.href.indexOf('wym.html') == -1){
		//$("div.cnbc-base-form")[0].scrollTop = $('#edit-body-wrapper')[0].offsetTop;
		
	}
	//
});

function postpone()
{
	
	
	// alert($('#live-blog-btn').attr("checked"));
  
	
		$('#edit-body-wrapper span').eq(0).prepend($('#edit-body-wrapper .moveGroups').last());
		//console.log($("#edit-body-wrapper iframe").first().contents());
		window.setTimeout("var now = new Date(); $('#edit-body-wrapper iframe').first().contents().find('p').prepend('<b>' + now.toLocaleTimeString() + ':</b><br/>')", 100);
	
	//$('#edit-body-wrapper .moveGroups').last().prepend('<p>the date</p>')
	

}

$(".menuSearch").on('click', function(){
	$('#dPeriod option[value=7]').attr('selected','selected');
});

/*
function displayChart(theChart){
	//console.log(theChart);
	var theImg = theChart.find("img[src*='chart.asp']").eq(0);
	theImg.attr('src', theImg.attr('src') + "&width=530&height=160&color=2").css("height", 160).css("width", 530);
	theChart.find("div.chartImageContainer").css("display", "block").css("margin-bottom","-6px");
}

$.each($("div.group-container div.flex_chart"), function(){ displayChart($(this))});
$.each($("div.group-container div.flex_chart table.quoteTable a").mouseover( function(){displayChart($(this).parent().parent().parent().parent().parent())}));

*/
/*
var chartImgSrc = "http://api-chart.cnbc.com/api/chart/chart.asp?width=520&height=180&color=2&size=overview&charttype=price&timeframe=1week&realtime=1&showHeader=0&showSidebar=0&showExchange=0&showExtendedHours=0&showChart=1&realTime=1&type=overview&symbol=BBRY";
var chartImgTag = '<img src="' + chartImgSrc + '" hspace="15" vspace="15">';
var dataFrSrc = "http://apps.cnbc.com/company/quote/index.asp?symbol=BBRY";
var dataFrTag = '<iframe id="dataFr" src="' + dataFrSrc + '" frameborder="0" marginheight="0" marginwidth="0" border="0" scrolling="no" width="420" height="180"></iframe>';
//$('#dataFr').css('border','0px');
$("h1#franchiseHeader").after(chartImgTag + dataFrTag);	

$("#dataFr").css('-webkit-filter', 'grayscale(1)');

img {
    filter: url(filters.svg#grayscale); // Firefox 3.5+ 
    filter: gray; // IE6-9 
    -webkit-filter: grayscale(1); // Google Chrome & Safari 6+ 
}

<svg xmlns="http://www.w3.org/2000/svg">
 <filter id="grayscale">
  <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/>
 </filter>
</svg>

*/
	









