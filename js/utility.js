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