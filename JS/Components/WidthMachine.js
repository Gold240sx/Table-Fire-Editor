export function widthMachine() {

  //Get the Item Reference
  const widthMachineBox = document.getElementById('width-machine')
  const pageWidthBox = document.getElementById('page-width')

  widthMachineBox.classList.add('widthMachineBox');
  pageWidthBox.innerText = window.inner

  console.log("widthMachine is On!")
}