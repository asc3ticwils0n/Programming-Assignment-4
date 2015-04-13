Titanium.UI.setBackgroundColor('#000');

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////								Landing Page  								/////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
var landingPage = Ti.UI.createWindow({backgroundColor:'black'});
var titleView = Ti.UI.createView
({
	top:0,
	backgroundColor: '#d2b45b',
	height:'10%',  width:'100%'
});
landingPage.add(titleView);
var landingLabel = Ti.UI.createLabel
({
	text: 'Jacob Holthaus',
	color:'black',
	font:{fontSize:'25sp'},
	textAlign:'center'
});
titleView.add(landingLabel);
var contactInfo = Ti.UI.createLabel
({
	top:'16%',
	height:'30%',
	width:'90%',
	borderRadius:'10',
	borderColor:'#d2b45b',
	text:'Email: holt0717@vandals.uidaho.edu\n Phone: 208-790-1094\n Address: 1137 W. A Street',
	color: '#d2b45b',
	font:{fontSize:'20sp'},
	textAlign:'center'
});
landingPage.add(contactInfo);
var aboutMeButton = Ti.UI.createButton
({
	top:'52%',
	height:'10%',
	width:'40%',
	backgroundColor:'#d2b45b',
	title:'About',
	color:'black',
	font:{fontSize:'20sp'},
	textAlign:'center'
});
aboutMeButton.addEventListener('click',function(e){landingPage.close(), portfolioPage.open();});
landingPage.add(aboutMeButton);

landingPage.open();


////////////////////////////////////////////////////////////////////////////////////////////////
///////////									Portfolio Page 							////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var portfolioPage = Ti.UI.createWindow({backgroundcolor:'black'});
var portfolioTitle = Ti.UI.createView
({
	top: 0,
	backgroundColor:'#d2b45b',
	height:'10%', width:'100%'
});
portfolioPage.add(portfolioTitle);
var portfolioLabel = Ti.UI.createLabel
({
	text: 'About',
	color:'black',
	font:{fontSize:'25sp'},
	textAlign:'center'
});
portfolioTitle.add(portfolioLabel);
var aboutMeView = Ti.UI.createView
({
	top:'18%',
	height:'40%',
	width:'92%',
	borderRadius:'10',
	borderColor:'#d2b45b',
});
portfolioPage.add(aboutMeView);
var aboutMe = Ti.UI.createLabel
({
	text:'I am currently attending the University of Idaho working towards a bachelors degree in Information Systems and a minor in Computer Science.I worked at Folletts mountain sports for 3 years, and I currently work at Galexis Technologies in Pullman Washington as a computer technichian',
	color:'#d2b45b',
	font:{fontSize:'16sp'},
	textAlign:'center'
});
aboutMeView.add(aboutMe);
var listInfoView = Ti.UI.createView
({
	top:'58%',
	height:'30%',
	width:'92%'
});
portfolioPage.add(listInfoView);
var listInfo = Ti.UI.createLabel
({
	text:'Education: expected graduation spring 2016 with 		B.S. in Information Systems\nWork: Galexis Technologies\nPrior Work: Folletts Mountain Sports and All Saints Catholic School\nActivities: Hackers Club\n',
	color:'#d2b45b',
	font:{fontSize:'15sp'},
	textAlign: 'left'
});
listInfoView.add(listInfo);
var returnButton = Ti.UI.createButton
({
	title:'Return',
	textAlign:'center',
	color:'black',
	backgroundColor:'#d2b45b',
	height:'7%',
	width:'40%',
	top:'90%',
	left:'4%'
});
portfolioPage.add(returnButton);
returnButton.addEventListener('click', function(e){portfolioPage.close(),landingPage.open();});
var fb = require('facebook');
fb.appid = 431808060330515;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
portfolioPage.add(fb.createLoginButton({
    top : '10%',
    style : fb.BUTTON_STYLE_WIDE
}));


