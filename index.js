// Get the necessary DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const genderInputs = document.querySelectorAll('input[name="jenis-kelamin"]');
const ageInput = document.getElementById('age');
const submitButton = document.querySelector('#calculator .submit');
const resetButton = document.querySelector('#calculator .reset');
const resultBeratBadan = document.getElementById('berat-badan');
const resultBmi = document.getElementById('bmi');
const resultHasilbb = document.getElementById('hasilbb');

// Calculate BMI and display the result
function calculateBMI() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // Convert cm to m
  const age = Number(ageInput.value);
  let gender = '';

  // Validate input
  if (weight === null || height === null) {
    alert("Silakan masukkan berat dan tinggi Anda.");
    return;
  }

  // Find the selected gender
  genderInputs.forEach(input => {
    if (input.checked) {
      gender = input.value;
    }
  });

  // Calculate the BMI and display the result
  const bmi = (weight / (height ** 2)).toFixed(1);
  resultBmi.textContent = bmi;

  // Determine the weight status based on the BMI value and display the result
  let hasilbb = '';
  if (bmi < 18.5) {
    hasilbb = 'Anda kekurangan berat badan';
    resultBeratBadan.textContent = 'Berat Badan Kurang';
  } else if (bmi >= 18.5 && bmi <= 24.9 ) {
    hasilbb = 'Anda memiliki berat badan normal';
    resultBeratBadan.textContent = 'Berat Badan Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    hasilbb = 'Anda memiliki berat badan berlebih';
    resultBeratBadan.textContent = 'Berat Badan Lebih';
  } else if (bmi >= 30){
    hasilbb = 'Anda mengalami obesitas';
    resultBeratBadan.textContent = 'Obesitas';
  }
  resultHasilbb.textContent = hasilbb;
}

// Reset the form to its initial state
function resetForm() {
  weightInput.value = '';
  heightInput.value = '';
  genderInputs.forEach(input => {
    input.checked = false;
  });
  ageInput.value = '';
  resultBeratBadan.textContent = 'Berat Badan Lebih';
  resultBmi.textContent = '0.0';
  resultHasilbb.textContent = 'Silakan masukkan data Anda';
}

// Add event listeners to the submit and reset buttons
submitButton.addEventListener('click', calculateBMI);
resetButton.addEventListener('click', resetForm);
