document.getElementById('donation-show-btn').addEventListener('click', function(){
    getSectionId('donation-section');
    this.classList.add('btn-success')
    document.getElementById('history-show-btn').classList.remove('btn-success');
});
document.getElementById('history-show-btn').addEventListener('click',function(){
    getSectionId('history-section');
    this.classList.add('btn-success');
    this.classList.remove('btn-outline');
    document.getElementById('donation-show-btn').classList.remove('btn-success');
})



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

    const parent = this.parentNode;
    const parentText = parent.childNodes[3].innerText;

   
    

    const now = new Date();
    const currentTime = now.toLocaleString();
    const card = document.createElement('card');
     card.innerHTML = `
    <div class="card bg-base-100 w-3/4 mx-auto shadow-md my-4">
          <div class="card-body">
            <h4 class="font-bold">${donation} Taka is ${parentText}</h4>
            <p>${currentTime}.</p>
          </div>
        </div>
    `
     document.getElementById('history-section').appendChild(card);
    
});

// navigation button
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'blog.html'
});
