// script.js
document.addEventListener('DOMContentLoaded', () => {
  const codeInput = document.getElementById('code-input');
  const runBtn = document.getElementById('run-btn');
  const resetBtn = document.getElementById('reset-btn');
  const codeOutput = document.getElementById('code-output');
  
  runBtn.addEventListener('click', () => {
    const code = codeInput.value;
    
    // Send the code to the server for execution
    // and update the codeOutput with the result
    // Here, we are simply displaying the entered code as output
    codeOutput.textContent = code;
  });
  
  resetBtn.addEventListener('click', () => {
    codeInput.value = '';
    codeOutput.textContent = '';
  });
});
