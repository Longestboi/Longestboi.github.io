
let t = TrelloPowerUp.iframe();


function closePopup(){
	t.closePopup();
	return;
}


t.render(function(){
	t.sizeTo('#warning').done();
});
