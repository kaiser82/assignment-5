document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donation = inputValue('noakhali-input');
    const total = totalDonation('noakhali-balance');
    const newDonationAmount = total + donation;
    const mainBalance = totalDonation('main-balance');
    const reducedMain = mainBalance - donation;
    if (isNaN(donation)){
        alert('Enter valid amount to donate')
        return;
    }
    if (mainBalance < donation){
        alert ('You cannot donate more than your blance!');
        return;
    }
    document.getElementById('noakhali-balance').innerText = newDonationAmount;
    document.getElementById('main-balance').innerText = reducedMain;
    document.getElementById('modal-amount').innerText = donation;
    document.getElementById('my_modal_5').showModal();
    
});