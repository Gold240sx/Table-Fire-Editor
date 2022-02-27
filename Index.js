// Imports

//import { widthMachine } from "./JS/Components/WidthMachine";

/*=================================================
                    Width Machine
==================================================*/

function widthMachine() {

  //Component and Data References
  const widthMachineBox = document.getElementById('width-machine')
  const pageWidthBox = document.getElementById('page-width')
  const pageWidth = window.innerWidth;
  
  //Styles
  widthMachineBox.classList.add('widthMachineBox');

  //Action
  pageWidthBox.innerText = pageWidth;
}

//Initialize on Page Load and Event Listener for After...
widthMachine();
window.onresize = function(event) {
  widthMachine();
};

/*=================================================
                      Other
==================================================*/