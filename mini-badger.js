/*
if(document.location.href.indexOf('toolbelt') == -1 && document.location.href.indexOf('cnbc.com') != -1){
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "http://localhost:8888/charts/google-charts.js";
	$("div.omni").before(s);
}
*/


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





var live_buttons = '<div id="live-btns">';

if(document.location.href.indexOf('$DEVICE$=mobile-touch') != -1){
	live_buttons += '<button id="hb-read" onclick="document.location.href = \'' + document.location.href.replace('$DEVICE$=mobile-touch', '') + '\'">desktop</button><br/>';	
}else{

	live_buttons += '<button id="hb-live-edit" onclick="window.open(\'http://\' + document.location.host.replace(\'www\',\'toolbelt\').replace(\'pub\',\'toolbelt\') + \'/node/\' + CNBC_Settings.pageNodeId + \'/edit\');">edit</button>';
	live_buttons += '<button id="hb-read" onclick="window.open(\'http://\' + document.location.host.replace(\'www\',\'toolbelt\').replace(\'pub\',\'toolbelt\') + \'/node/\' + CNBC_Settings.pageNodeId + \'/edit?readOnly=true\');">read</button><br/>';
	
	if(document.location.href.indexOf('?') != -1){
		var mobileLink = document.location.href + '&$DEVICE$=mobile-touch';
	}else{
		var mobileLink = document.location.href + '?$DEVICE$=mobile-touch';
	}
	live_buttons += '<button id="hb-read" onclick="document.location.href = \'' + mobileLink + '\'">mobile</button><br/>';	
	
	
	
	
	
	live_buttons += '<button onclick="window.open(\'https://sc2.omniture.com/sc15/reports/index.html?rp=search%5Brows%5D%5B0%5D%5Bstring%5D%7C\' + CNBC_Settings.pageNodeId + \'&r=Report.MostPopularCustomInsight&a=Report.Standard\');">omniture</button><br/>';
	live_buttons += '<button onclick="window.open(\'http://mpsadmin.cnbc.com/jump/using/\' + CNBC_Settings.pageNodeId);">mps</button><br>';
	//live_buttons += '<button id="related-cnt" onmousedown="this.className=CNBC_Settings.pageNodeId;">related</button>';

	live_buttons += '<button id="hb-skin">skins</button>';
	
	
	

	live_buttons += '<button onclick="storedInfo=\'<button onclick=\\\'this.outerHTML = infoOutput\\\'>info</button>\'; var excludeValues = \'instance,keywords,description,hline,cat,modified\'; lastRendered = new Date(Date.parse($(\'meta[name=\\\'Search.Updated\\\']\').attr(\'content\'))); infoOutput = \'<div style=\\\'width:300px; background:#ffffff; color:#000000; padding:5px; font-size:10pt;\\\'><button style=\\\'float:right;\\\' onclick=\\\'this.parentNode.outerHTML=storedInfo\\\'>X</button><br/>\'; for(key in mps.pagevars){if(excludeValues.indexOf(key) == -1){infoOutput += key.toUpperCase() + \': <div>\' + mps.pagevars[key] + \'</div><br/>\'}}; infoOutput += \'OMNITURE PAGENAME: <div><a target=\\\'_new\\\' href=\\\'https://sc2.omniture.com/sc15/reports/index.html?rp=search%5Brows%5D%5B0%5D%5Bstring%5D%7C\' + CNBC_Settings.pageNodeId + \'&r=Report.MostPopularCustomInsight&a=Report.Standard\\\'>\' + s.pageName + \'</a></div><br/>\'; infoOutput += \'LAST PUBLISHED MANUALLY: <div>\' + lastRendered + \'</div><br/>\'; infoOutput += \'ID: <div>\' + CNBC_Settings.pageNodeId + \'</div><br/>\'; infoOutput += \'</div>\'; this.outerHTML = infoOutput">info</button>';
}

live_buttons += '</div>';

if ($('#the-honeybadger')) {
	$('#live-btns').remove();    
}
$('#cnbc-contents').append(live_buttons);


$('button#hb-skin').on('click', function(){
								
									if($('#skin-dev').length){
										$('#skin-dev').remove();
									}else{
										if(typeof $.cookie('csspath') != 'undefined'){
											var csspath = $.cookie('csspath');
										}else{
											var csspath = '';
										}
										if(typeof $.cookie('jspath') != 'undefined'){
											var jspath = $.cookie('jspath');
										}else{
											var jspath = '';
										}
										var skinDevUI = '<div id="skin-dev">\
															This is for developing skins.\
															<h3>css URLs</h3>\
															<input type="text" value="' + csspath + '" name="css">\
															<h3>js URLs</h3>\
															<input type="text" value="' + jspath + '" name="js"><br>\
															<button id="update-skin">update</button><br>\
															<small>Serparate multiple URLs with a space.</small>\
														</div>';	
										$(this).before(skinDevUI);
									}
								});

$('button#update-skin').live('click', function(){
									
									var csspath = $('input[name="css"]').attr('value');
									var jspath = $('input[name="js"]').attr('value');
									$.cookie('csspath', csspath, { path : '/', expires : 1000 });
									$.cookie('jspath', jspath, { path : '/', expires : 1000 });
									document.location.reload();
								});

if(document.location.href.indexOf('www.cnbc.com') != -1 && typeof $.cookie('jspath') != 'undefined' && $.cookie('jspath') != ''){
	var jspaths = $.cookie('jspath').split(' ');
	for(i=0; i<jspaths.length; i++){
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = jspaths[i];
		$("div.omni").before(s);
	}
	
}

if((document.location.href.indexOf('www.cnbc.com') != -1 || document.location.href.indexOf('pub.cnbc.com') != -1 ) && typeof $.cookie('csspath') != 'undefined' && $.cookie('csspath') != ''){
	
	var csspaths = $.cookie('csspath').split(' ');
	for(i=0; i<csspaths.length; i++){
		$("<link/>", {
			rel: "stylesheet",
			type: "text/css",
			href: csspaths[i]
		}).appendTo($("head").eq(0));
	}
	
}

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
	 //console.log(data);
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

if(document.location.href.indexOf('toolbelt') != -1 && document.location.href.indexOf('wym.html') == -1){
	var NID = $('input[name="publish_nid"]').attr('value');
	
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
				//console.log(1);
			}else if($(this).parent().parent().parent().hasClass("sortable")){
				var modSizeImg = $(this).attr('src').replace('140x105', '600x400');
				var width = 600;
				var height = 400;
				//console.log(3);
			}else{
				var modSizeImg = $(this).attr('src').replace('140x105', '530x298');
				var width = 530;
				var height = 298;
				//console.log(3);
			}
		}else{
			var modSizeImg = $(this).attr('src').replace('530x298', '140x105').replace('320x180', '140x105');
			var width = 140;
			var height = 105;
			
				//console.log(4);
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
	$("div.menu1 a").css('display', 'block').css('width', '100%').css('height','100%').css('padding', '2px').css('margin', '0px');
	
	
	
	
	var contemplateLabels = { media: "Media", leaf: "Pages", tag: "Sections", utility: "Utilities",  button: ""}
	var contemplateList = 	{ 
								"News Story": {group:"leaf", icon:"/sites/all/themes/cms_theme/images/icon_cnbcnewsstory.png"},
								"Blog Post": {group:"leaf", icon:"/sites/all/themes/cms_theme/images/icon_blogpost.png"},
								"SlideShow": {group:"leaf", label: "Slide Show", icon: "/sites/all/themes/cms_theme/images/icon_slideshow.png"},
								"Partner Story": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_partnerstory.png"},
								"Advertorial": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_sponsored.png"},
								"Source": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_source.png"},
								"Franchise": {group:"tag", icon:"/sites/all/themes/cms_theme/images/icon_franchise.png"},
								"Creator": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_creator.png"},
								"Person": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_person.png"},
								"Organization": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_organization.png"},
								"Company": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_company.png"},
								"Place": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_place.png"},
								"Image": {group:"media", icon:"/sites/all/themes/cms_theme/images/icon_image.png"},
								"Video asset": {group:"media", icon:"/sites/all/themes/cms_theme/images/icon_cnbcvideo.png"},
								"Chart": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_chart.png"},
								"Audio": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_audio.png"},
								"Saved Search": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_cnbcsavedsearch.png"},
								"Skin": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_skin.png"},
								"Episode": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_episode.png"},
								"Editorial Search": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_editorialsearch.png"},
								"File": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_file.png"},
								"Editorial File": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_editorialfile.png"},
								"Flash": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_flash.png"},
								"Poll": {group:"media", icon: "/sites/all/themes/cms_theme/images/icon_poll.png"},
								"Markup Template": {group:"utility"},
								"Event": {group:"tag", icon: "/sites/all/themes/cms_theme/images/icon_event.png"},
								"Webservice": {group:"media", label: "Web Service", icon: "/sites/all/themes/cms_theme/images/icon_webservice.png"},
								"WebResource": {group:"media", label: "Web Resource", icon: "/sites/all/themes/cms_theme/images/icon_webresource.png"},
								"Wild Card": {group:"media", label: "Wildcard", icon: "/sites/all/themes/cms_theme/images/icon_wildcard.png"},
								"Press Release": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_pressrelease.png"},
								"Project": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_project.png"},
								"Product": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_product.png"},
								"Promotional Package": {group:"utility", label: "Promo Package", icon: "/sites/all/themes/cms_theme/images/icon_promopackage.png"},
								"Quiz Entry": {group:"leaf", label: "Quiz", icon: "/sites/all/themes/cms_theme/images/icon_quiz.png"},
								"Wire Story": {group:"leaf", icon: "/sites/all/themes/cms_theme/images/icon_wirestory.png"},
								"Security": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_security.png"},
								"Team": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_team.png"},
								"Usage Rule": {group:"utility", icon: "/sites/all/themes/cms_theme/images/icon_usagerule.png"},
								
								"From Scratch": {group:"button", icon: "/sites/all/themes/cms_theme/images/edit-icon.png", label: "From Scratch..."},
								
							};
	
	var commonAssets = ['Blog Post', 'Image', 'News Story', 'Franchise', 'Skin', 'Creator', 'Chart', 'Saved Search', 'From Scratch'];
	$("div.menu1").eq(0).prepend('<div id="contemplateDisp"></div>').css('border','1px solid #eeeeee').css('width','650px').css('z-index','50000').css('-webkit-box-shadow', '0px 0px 10px 0px #000');
	
	var commonSearchedAssets = ['Blog Post', 'Image', 'News Story', 'Franchise', 'Skin', 'Creator', 'Chart', 'Saved Search','Video asset', 'Partner Story', 'SlideShow', 'Company', 'Source', 'Person', 'Organization', 'Place', 'Event'];
	
	for(key in contemplateLabels){
		$("#contemplateDisp").append('<div class="contemplate-label" id="contemplate-label-' + key + '"><h1>' + contemplateLabels[key] + '</h1></div>');
		$("div.menu1 ul li a").each(function( index ) {
		
		
			
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
					if($(this).text().indexOf('Scratch') != -1){
						$(this).text('Create From Scratch >').wrap('<div></div>');
						
						
					}
					
					//console.log(contemplateLabels[key]);
					//console.log($(this).text());
					//console.log('');
				}
		

		}).css('color', '#333333');
		
		$("#contemplate-label-" + key).css('text-align','left').css('margin', '0px 0px 5px 15px').css('width','140px').css('font-size', '125%');
		if(key == 'button'){
			$("#contemplate-label-" + key).css('width','90%');
			
		}
	}
	
	$("div.menu1 img").css('float', 'left').css('position', 'relative').css('display','inline').css('left', '-6px');
	$("div.menu1").css('background', '#efefef').css('background-image', 'none');
	$(".contemplate-label").css("float", "left");
	//$("div.menu1 table").remove();
	
	
										
	var recentContemplates = getContemplates();
	var contemplateOut = '<div id="recent-contemplates"><h1>Recent Contemplates</h1><div id="contemplateContainer"><div><ul>';
	//console.log(recentContemplates);
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
			//console.log(contemplateList[currentContemplate.type].icon);
		}else{
			var imageTag = '';	
		}
		contemplateOut += '<li><a href="/node/' + currentContemplate.nid + '/clone"><sub>' + imageTag + '</sub> ' + currentContemplate.slug + '</a></li>';
		
		contemplateIndex = parseInt(contemplateIndex);
		//console.log(contemplateIndex, Math.round(contemplateCount/2));
		if(contemplateIndex == Math.round(contemplateCount/2)-1){
			contemplateOut += '</ul></div><div><ul>';
		}
	}
	contemplateOut += '</ul></div></div></div>';
	
	
	
	if(contemplateCount){
		$("#contemplateDisp").before(contemplateOut);
		//$("#recent-contemplates").css('float', 'right').css('background', 'orange');
	}
	//console.log($("#contemplateDisp"));
	
//organize search config

//$('#tool .search-tool').find('img').remove();
//$('#tool .search-tool').append('<span>Advanced</span>').css('color', 'black');
//console.log('search tool', $('#tool .search-tool'));
$('.configure ul.menu').remove();
$('.display').remove();
//$('.toolBar .form-text').attr('style', '').css('width', '100%');
/*
$('.toolBar .form-text').live('change', function(){
	console.log('changed');										   
});
*/



$('div.configure').css('width', 732 );

$('.configure .results ul').addClass('selected');

$('.configure .results').prepend($('ul#asset-flags'));
$('.configure .results').prepend($('ul#asset-states'));
$('.configure .results').append($('ul#asset-creators'));

//$('.configure .results').append('<div><br><br><br><br><br><br><br><br></div>');
$('.configure .results').css('height', '90%').css('width', '700');

//$('div.search div.filter').css('visibility', 'hidden' )



$('ul#asset-types').before('<h2 id="mb-search-types">Types: </h2>');
$('ul#asset-states').wrap('<div class="mb-flags"></div>').before('<h2 id="mb-search-states">States: </h2>');
$('ul#asset-creators').wrap('<div class="mb-flags"></div>').before('<h2 id="mb-search-creators">Creators: <input type="text" id="mb-cs-query" placeholder="Find Creator"></h2><div id="mb-cs"></div>');
$('ul#asset-flags').wrap('<div class="mb-flags"></div>').before('<h2 id="mb-search-flags">Flags: </h2>');

$('ul#asset-creators a.items').each(function(){
	$(this).text($(this).text().toLowerCase().replace('.', ' ')).css('text-transform', 'Capitalize');
});

$('ul#asset-creators a.items:not(.selected)').hide();


$('#mb-cs-query').on('keyup', function(event){ 
	console.log(event.which);				   
	var query = $(this).attr('value').toLowerCase();
	console.log(query);
	//$('a.items:contains("' + assetType + '")');
	//console.log($('ul#asset-creators a.items:contains("chris")'))
	$('ul#asset-creators a.items:not(.selected)').hide();
	if(query != ''){
		if(query == '%'){query=''};
		var matchingCount = $('ul#asset-creators a.items:contains("' + query + '")').show().length;
		
		if(event.which == 13 && matchingCount < 3){
			
			$('ul#asset-creators a.items:contains("' + query + '")').each(function(){	
					var theAnchor = document.getElementById($(this).attr('id'));
					dispatchMouseEvent(theAnchor, 'click', true, true);
			});	
		}
	}
})
//$('.toolBar .form-text').css('width', '100%');
$('#tool').on('click', function(){
	//console.log(window.innerWidth);										 
	//console.log($('.toolBar .form-text').prop('offsetLeft'))
	setTimeout("$('.toolBar .form-text, div.criteria-items, div.configure').css('width', 732 ).css('padding', '0px').css('margin-right', '0px');", 100);									 	
	
	//console.log($('.toolBar .form-text'));										 
	//console.log('clikced');										   
});



$('#asset-types').prepend('<li id="organized-assets"><ul id="media"><li><b><a href="#" class="items block group">Media</a></b></li></ul><ul id="leaf"><li><b><a href="#" class="items block group">Pages</a></b></li></ul><ul id="tag"><li><b><a href="#" class="items block group">Sections</a></b></li></ul><ul id="utility"><li><b><a href="#" class="items block group">Utilities</a></b></li></ul></li>');

$('.organized-assets').css('background', '#ffffff');



$('#asset-types a.items').each(function(){
										
								$(this).attr('class', $(this).attr('class').replace('items', 'items block'));
							});


for(assetType in contemplateList){
	//if(contemplateList[assetType].group);
	var theLink = $('a.items:contains("' + assetType + '")');
	if(commonSearchedAssets.indexOf(assetType) != -1){
		theLink.prepend('<img src="' + contemplateList[assetType].icon + '" width="18" height="15">');
	}
	$('#organized-assets ul#' + contemplateList[assetType].group).append(theLink.parent());
}
$("ul#asset-types").css('background', 'transparent');
$("#organized-assets").css('width', '100%').css('background', 'transparent');
$("#organized-assets ul").css('width', '170px');
$("#organized-assets a.items").css('font-size', '14px').css('width', '150px');

var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};

$('.group.items').on('click', function(){
									  // console.log($(this).parent().parent().parent().find('.items').not(".group").eq(0))
									 //  $(this).parent().parent().parent().find('.items').not(".group").on('click', function(){alert('test')})
										var selectedCount = $(this).parent().parent().parent().find('.items.selected').length;
										var totalCount = $(this).parent().parent().parent().find('.items').length-1;
										
										//console.log(selectedCount, totalCount)
										
										if(selectedCount == 0){
											$(this).parent().parent().parent().find('.items').not(".group").each(function(){
												
												
												
												if(commonSearchedAssets.indexOf($(this).text().trim()) != -1){
													
													var theAnchorID = $(this).attr('id');
													
													var theAnchor = document.getElementById(theAnchorID);
													dispatchMouseEvent(theAnchor, 'click', true, true);
												}
												
											});

										}else if(selectedCount == totalCount){
											$(this).parent().parent().parent().find('.items').not(".group").each(function(){
												var theAnchorID = $(this).attr('id');		
												var theAnchor = document.getElementById(theAnchorID);
												dispatchMouseEvent(theAnchor, 'click', true, true);
											});
										}else{
											$(this).parent().parent().parent().find('.items').not(".group").each(function(){
												
												
												
												if(!$(this).hasClass('selected')){
													
													var theAnchorID = $(this).attr('id');
													
													var theAnchor = document.getElementById(theAnchorID);
													dispatchMouseEvent(theAnchor, 'click', true, true);
												}
												
											});
										}
});

/*
dispatchMouseEvent(element, 'mouseover', true, true);
dispatchMouseEvent(element, 'mousedown', true, true);
dispatchMouseEvent(element, 'click', true, true);
dispatchMouseEvent(element, 'mouseup', true, true);
*/

/*
$('.criteria-items .layout').css('width', '250px').prepend('<li><a id="organize" class="dLayout" title="ORGANIZE" href="#">ORGANIZE</a></li>').on('click', function(){
																																									

				console.log($('#asset-types li').length)																																					
				$(this).css('background', '#ffcc00');																																					
				console.log($(this));																																									
});
*/



	var prodButtons = '<a href="http://www.cnbc.com/id/' + NID + '" target="_new" class="crud-header-link" id="desktop-crud-header-link" title="view desktop production">DESKTOP</a> <a href="http://www.cnbc.com/id/' + NID + '?$DEVICE$=mobile-touch" target="_new" class="crud-header-link" id="mobile-crud-header-link" title="view mobile production">MOBILE</a> ';
	$(".with-tabs .fav").after(prodButtons);

	if(document.location.href.indexOf('readOnly=true') == -1){
		var readButton = ' <a href="/node/' + NID + '/edit?readOnly=true" class="crud-header-link" id="read-only-crud-header-link" title="Open this asset in read only mode">READ ONLY</a> ';
		$(".with-tabs .fav").after(readButton);
	}else{
		var editButton = '<a href="/node/' + NID + '/edit" class="crud-header-link" id="edit-crud-header-link" title="Open this asset in edit mode">EDIT</a>';
		$(".with-tabs .fav").after(editButton);
	}
	
	$(".crud-header-link").text(' ');
	//console.log($("iframe").contents().find("body p"))
	//setTimeout('$("iframe").contents().find("body p").css("border", "solid 1px #cccccc")', 300);
	
	
	
	/*
	
	//Franchise Quick Select
	
	//https://script.google.com/macros/s/AKfycbyA5jvo4M_C4juin-CdTsOtmCk3n2Uzl5ubLYZP5LEv_lEjvdI/exec?callback=buildFranchiseMenu
	
	//console.log(chrome.extension.getBackgroundPage())
	
	var url = 'https://script.google.com/macros/s/AKfycbyA5jvo4M_C4juin-CdTsOtmCk3n2Uzl5ubLYZP5LEv_lEjvdI/exec?callback=?';
	//var url = 'http://localhost:8888/test/jsonpTest.js?callback=?';
	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbyA5jvo4M_C4juin-CdTsOtmCk3n2Uzl5ubLYZP5LEv_lEjvdI/exec?callback=?',
		jsonpCallback: 'buildFranchiseMenu',
		contentType: "application/json",
		dataType: 'jsonp',
		crossDomain: true
		
	});
	
	//console.log($('div[displayname="Franchise"]'))
	var quickSelect = '<select id="qs-franchise">\
							<option value="15837362">US News</option>\
							<option value="19832390">Asia News</option>\
							<option value="19794221">Europe News</option>\
							<option value="15839121">Markets</option>\
						</select>';
	$('div[displayname="Franchise"]').find('span.typeSearch').after(quickSelect);
	
	$('select#qs-franchise').on('change', function(){
		qsListItemLabel = $(this).find("option[value='" + $(this).val() + "']").text();
		qsListItem = '<li typeid="56" class="summary tagged draggThis active" data-config="{\'asset_id\':\'' + $(this).val() + '\', \'sourceId\':\'null\', \'isWebresourceFeed\':\'0\', \'asset_type\':\'56\', \'asset_type_name\':\'franchise\'}"><small class="browse closed" arrowid="' + $(this).val() + '"></small><span class="title" title=""><img title="Franchise" src="/sites/all/themes/cms_theme/images/icon_franchise.png" width="" height=""><div class="assetPlus"></div><span>' + qsListItemLabel + '</span></span><label class="hold"><input class="hold" type="checkbox"></label><em><div class="noImage"></div><span class="dateandtime"><span class="timeonly"><strong></strong></span><span class="dateonly"><strong></strong></span></span></em><a class="editButton" href="/node/' + $(this).val() + '/edit" title="Edit this Asset"></a><img class="statIcon" title="Publish" src="/sites/all/themes/cms_theme/images/icon-status-Publish.png" width="" height=""><p class="details"><a class="details dropped" id="info-' + $(this).val() + '" title="MORE INFO" alt="MORE INFO"></a></p><a title="FAVORITE" id="fav-' + $(this).val() + '" class="fav"></a><em class="icons promote" data-config="' + $(this).val() + '">&nbsp;</em><span id="' + $(this).val() + 'dropped" class="info info-' + $(this).val() + '"></span><div class="select"></div></li>';
		console.log();
		$('div[displayname="Franchise"]').find('li').remove();
		$('div[displayname="Franchise"]').find('ul').append(qsListItem);
		$('div[displayname="Franchise"]').find('ul').trigger('drop');
		console.log(qsListItem)										   
	});

  */



	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "http://3.44.221.34:8888/franchise-selector/franchise-selector.js";
	s.src = "http://fm.cnbc.com/applications/cnbc.com/resources/files/2013/10/28/franchise-selector_0.js";
	
	$("body").append(s);


	// update rte
	
	//$(".groups, .closedGroups").css('background', 'white').css("border", "solid 1px #cccccc");
	
	//$(".groupInfo .embedded ul").css("border", "solid 1px #grey");
	
	$(".groupInfo").not(".closedGroups .groupInfo").each(function(){
		$(this).css('position', 'relative').css('top', '-13px');														  
	});
	
	$(".checkboxGroup").not(".closedGroups .checkboxGroup").each(function(){
		$(this).prev().css('position', 'relative').css('top', '18px').css('left', '-5px');
		$(this).css('position', 'relative').css('top', '18px').css('left', '-21px');		   
	});
	
	
	
	$(".subtitle").css('border', '1px solid grey').css('width', '355px');
	
	$("ul.connectedSortable").css('padding-right', '10px').css('margin-bottom','10px').css('width', '350px');
	
	
	/*
	$(".subtitle").each(function(){
					$(this).css('border', '1px solid grey');
					//$(this).css('margin-left', '5px').css('width', '55%').css('margin-bottom', '-5px').attr('placeholder', '');
					//$(this).prev().css('display', 'inline').css('margin-left', '10px').css('font-size', '175%').css('float', 'left').css('margin-top', '7px').css('font-weight', 'bold').css('margin-bottom', '-5px');
					//$(this).parent().parent().parent().parent().prepend($(this).prev()).prepend($(this));
		
	});
	*/
	
	$("div.pullQuote").each(function(){
									 
		$(this).css('background-color', 'transparent').css('margin-left', '8px').hide();
		$(this).prev().text(" Pull Quote ").append('<div class="openGroup" style="position: relative; top: 2px; left: 0px; float:left; display:inline-block; margin-right:7px;"></div>').css('cursor', 'hand').on('click', function(){
			if($(this).next().is(":visible")){
				$(this).text(" Pull Quote ").append('<div class="openGroup" style="position: relative; top: 2px; left: 0px; float:left; display:inline-block; margin-right:7px;"></div>');
				$(this).next().hide();
			}else{
				$(this).text(" Pull Quote ").append('<div class="closeGroup" style="position: relative; top: 4px; left: 0px; float:left; display:inline-block; margin-right:3px;"></div>');
				$(this).next().show();
			}
		});
		
		
	});
	
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

function addLiveLink(NID){
	
		
		 
	$('span#' + NID + ' div.promoTitle').append('<a href="http://www.cnbc.com/id/' + NID + '" target="_new" class="small">LIVE</a>');;
	
	
}


function correctThumbSize(NID){
	
	var theImg = $('span#' + NID + ' img.promo, span#' + NID + 'dropped img.promo');
	theImg.css('width', 140);
	theImg.css('height', 105);
}


function enlargeThumb(NID){
	
	var theImg = $('span#' + NID + ' img.promo, span#' + NID + 'dropped img.promo');
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
	









