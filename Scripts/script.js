

function loadData() {
  fetch('Scripts/data.json')
  .then(resp => resp.json())
  .then(data => {

    let panels = data.images.map((panel, i) => {

      return `
      <div class= "panel panel${i}" style="background-image: url(${panel.image})">
      <p>${panel.text_top}</p>
      <p>${panel.text_middle}</p>
      <p>${panel.text_buttom}</p>
      </div>
      `
  }).join("")

  document.querySelector('#panel_container').innerHTML= panels

})
  
  const panels = document.querySelectorAll('#panel_container').children;
  console.log(panels)

//panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
  }
