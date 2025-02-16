document.addEventListener('DOMContentLoaded', () => {
	fetch('/get-app-details')
	  .then(response => response.json())
	  .then(data => {
		console.log('Fetched data:', data); // Check data received
  
		// Update document title
		document.title = data.app_name;
		document.getElementById('app-title').innerText = data.app_name;
  
		// Check and update each element, with logs for verification
		if (document.getElementById('about-us')) {
		  document.getElementById('about-us').innerText = data.app_about;
		} 
  
		if (document.getElementById('notification')) {
		  document.getElementById('notification').innerText = data.app_notification;
		} 
  
		if (document.getElementById('noticehome')) {
		  document.getElementById('noticehome').innerText = data.notice1;
		} 
  
		if (document.getElementById('noticegame')) {
		  document.getElementById('noticegame').innerText = data.notice2;
		} 
  
		if (document.getElementById('noticecommon')) {
		  document.getElementById('noticecommon').innerText = data.notice3;
		} 
  
		// New fields
		if (document.getElementById('bonus-money-on-register')) {
		  document.getElementById('bonus-money-on-register').innerText = data.BONUS_MONEY_ON_REGISTER;
		} 
  
		if (document.getElementById('minimum-money-usdt')) {
		  document.getElementById('minimum-money-usdt').innerText = data.MINIMUM_MONEY_USDT;
		} 
  
		if (document.getElementById('minimum-money-inr')) {
		  document.getElementById('minimum-money-inr').innerText = data.MINIMUM_MONEY_INR;
		} 
  
		if (document.getElementById('minimum-withdrawal-money-usdt')) {
		  document.getElementById('minimum-withdrawal-money-usdt').innerText = data.MINIMUM_WITHDRAWAL_MONEY_USDT;
		} 

		if (document.getElementById('minimum-withdrawal-money-inr')) {
		  document.getElementById('minimum-withdrawal-money-inr').innerText = data.MINIMUM_WITHDRAWAL_MONEY_INR;
		} 
  
		if (document.getElementById('usdt-inr-exchange-rate')) {
		  document.getElementById('usdt-inr-exchange-rate').innerText = data.USDT_INR_EXCHANGE_RATE;
		} 
  
		if (document.getElementById('inviter-bonus-money-on-register')) {
		  document.getElementById('inviter-bonus-money-on-register').innerText = data.INVITER_BONUS_MONEY_ON_REGISTER;
		} 
  
		if (document.getElementById('usr-rech-bonus')) {
		  document.getElementById('usr-rech-bonus').innerText = data.usr_rech_bonus;
		} 
  
		if (document.getElementById('inv-rech-bonus')) {
		  document.getElementById('inv-rech-bonus').innerText = data.inv_rech_bonus;
		} 
	  })
	  .catch(error => console.error('Error fetching the app details:', error));
  });
  