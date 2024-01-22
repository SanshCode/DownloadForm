
function displayDownloadLink() {
    var downloadLinkContainer = document.querySelector('.container-2');
    console.log(downloadLinkContainer);
    var formContainer = document.querySelector('.container');

    downloadLinkContainer.style.display ='block';
    formContainer.style.display = 'none';
}
function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var contactNumber = document.getElementById('contact-number').value;
    var companyName = document.getElementById('company-name').value;

    if (firstName && lastName && city && country && contactNumber && companyName) {
        displayDownloadLink();
    } else {
        alert("Please fill in all fields correctly.");
    }
}