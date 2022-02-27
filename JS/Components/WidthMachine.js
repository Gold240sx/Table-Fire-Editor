export function widthMachine() {

  //Get the Item Reference
  const widthMachineBox = document.getElementById('width-machine')
  const pageWidthBox = document.getElementById('page-width')

  widthMachineBox.classList.add('widthMachineBox');
  pageWidthBox.innerText = windowWidth;

  console.log("widthMachine is On!")
}

