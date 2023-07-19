const select = document.querySelector('.custom-select')
const selectText = document.querySelector('.custom-select-text span')
const selectIcon = document.querySelector('.custom-select-text i')
const optionsWrapper = document.querySelector('.custom-select-options')
const options = document.querySelectorAll('.custom-select-option')

select.addEventListener('click', event => {
  optionsWrapper.classList.toggle('open')
  selectIcon.classList.contains('fa-chevron-up')
    ? selectIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    : selectIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
})

options.forEach(option => {
  option.addEventListener('click', event => {
    selectText.innerHTML = event.target.innerHTML
  })
})
