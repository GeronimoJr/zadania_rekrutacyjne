const arr = [2,3,7,4,9];

const missingNumbers = (props) => {
  
  let i;
  let result = [];

  for (i = 1; i <= 10; i++) {
    
    if (props.indexOf(i) == -1) {
      
      result.push(i);
      
    }
  }
  
  const el = document.createElement("h1");
  el.innerText = result.join(" | ");

  const body = document.querySelector("body");
  body.appendChild(el);

  console.log(result); 
};

missingNumbers(arr);