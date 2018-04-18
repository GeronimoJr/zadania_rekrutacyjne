const input = document.querySelector("input");
const error = document.querySelector("p");

const format = () => {
  
  let inputValue = input.value;
  inputValue = inputValue.replace(/ /g,'');
  const reg = /^-?\d+\.?\d*$/;
  
  if (reg.test(inputValue) == true) {
    
    error.style.display = "none";
    const digits = inputValue.split("");
    let i;
    const arr = [];
    
    if (digits.length <= 3) {

      for (i = 0; i < digits.length; i++) {
        
        let b = i + 1;
        const check = b%=2;
        
        if (check == 0 && i < (digits.length - 1)) {
          let space = digits[i] + " ";
          arr.push(space);
        } else {
          arr.push(digits[i]);
        }
      }

    } else if (digits.length > 3) {
      
      arr.push(digits[0], digits[1], " ");
      digits.splice(0, 2);

      for (i = 0; i < digits.length; i++) {
      
        let b = i + 1;
        const check = b%=4;
        
        if (check == 0 && i < digits.length - 1) {
          let space = digits[i] + " ";
          arr.push(space);
        } else {
          arr.push(digits[i]);
        }
      }
    }

    input.value = arr.join("");
    input.style.borderColor = "green";

  } else if (reg.test(inputValue) == false) {
    error.style.display = "block";
    input.style.borderColor = "red";
  }
};

input.addEventListener("blur", format);