// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e) {
  // Prevent the submit button from making it's call
  e.preventDefault();

  // Hide results
  document.querySelector('#results').style.display = 'none';

  // Show loader
  document.querySelector('#loading').style.display = 'block';

  // Dispaly results after waiting a couple seconds
  setTimeout(calculateResults, 2000);

});

// Calculate results
function calculateResults() {
  console.log('Calculating...');
  // console.log(e);
  // UI Elements
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const year = document.querySelector('#years');
  const monthlyPayments = document.querySelector('#monthly-payment');
  const totalPayments = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');
  // Values to use in our calculation
  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle*x*calculatedInterest)/(x-1);
  // Validate that proper entries were made
  if(isFinite(monthly)) {
    monthlyPayments.value = monthly.toFixed(2);
    totalPayments.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);

    // Show results
    document.querySelector('#results').style.display = 'block';

    // Hide loader
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}
// Show error
function showError(error) {
  // Show results
  document.querySelector('#results').style.display = 'none';
  // Hide loader
  document.querySelector('#loading').style.display = 'none';
  // Create a new div
  const errorDiv = document.createElement('div');
  // Get elements to place error message above
  const cardContent = document.querySelector('.card-content');
  const cardTitle = document.querySelector('.card-title');
  // Add alert class
  errorDiv.className = 'alert red lighten-5 center-align';
  // Create text
  errorDiv.appendChild(document.createTextNode(error));
  // Insert before the card title
  cardContent.insertBefore(errorDiv, cardTitle);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}
// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}