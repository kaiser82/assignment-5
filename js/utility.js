function inputValue (id){
    const donation =  document.getElementById(id).value;
    const donationAmount = parseFloat(donation);
    return donationAmount;
};

function totalDonation (id){
    const totalDonation = document.getElementById(id).innerText;
    const totalDonationAmount = parseFloat(totalDonation);
    return totalDonationAmount;
};

function getSectionId (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// function btnToggle (id){
//     document.getElementById('home-btn').classList.add('hidden');
//     document.getElementById('blog-btn').classList.add('hidden');
//     document.getElementById(id).classList.remove('hidden');
//     document.getElementById(id).classList.add('btn-success');

// }