//import { widthMachine } from "./JS/Components/WidthMachine";

const widthMachineBox = document.getElementById('width-machine')

function widthMachine() {

  //Get the Item Reference
  
  const pageWidthBox = document.getElementById('page-width')

  //styles
  widthMachineBox.classList.add('widthMachineBox');

  const pageWidth = window.innerWidth;
  
  pageWidthBox.innerText = pageWidth;
}

widthMachine();

// widthMachineBox.addEventListener('click', function(event) => {
//   widthMachine();
// });