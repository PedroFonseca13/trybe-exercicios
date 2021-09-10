window.onload = () => {
  let sectionExample = document.querySelector('section#example')

  // Muda o background
  function changeBackground() {
    let select = document.querySelector('select#select-background')
    select.addEventListener('change', () => {
      let selected = select.selectedOptions[0]
      sectionExample.style.backgroundColor = selected.value

      localStorage.setItem('select-background', selected.value)
    })
  }

  changeBackground()

  // muda a cor do texto
  function changeTextColor() {
    let selectColor = document.querySelector('select#select-color')
    selectColor.addEventListener('change', () => {
      let colorSelected = selectColor.selectedOptions[0]
      sectionExample.style.color = colorSelected.value

      localStorage.setItem('select-color', colorSelected.value)
    })
  }

  changeTextColor()

  // muda o Font size
  function changeFontSize() {
    let selectFontSize = document.querySelector('select#select-FontSize')
    selectFontSize.addEventListener('change', () => {
      let fontSize = selectFontSize.selectedOptions[0]
      sectionExample.style.fontSize = `${Number(fontSize.value)}rem`

      localStorage.setItem('selectFontSize', fontSize.value)
    })
  }

  changeFontSize()

  // muda o line height
  function changeLineHeight() {
    let selectLineHeight = document.querySelector('select#select-LineHeight')
    selectLineHeight.addEventListener('change', () => {
      let selectedLineHeight = selectLineHeight.selectedOptions[0]
      sectionExample.style.lineHeight = `${Number(selectedLineHeight.value)}em`
    })
  }

  changeLineHeight()

  // muda a fontFamily
  function changeFontFamily() {
    let selectFontFamily = document.querySelector('select#select-FontFamily')
    selectFontFamily.addEventListener('change', () => {
      let selectedFontFamily = selectFontFamily.selectedOptions[0]
      sectionExample.style.fontFamily = selectedFontFamily.value
    })
  }

  changeFontFamily()

  function savePreferences() {
    let savedBG = localStorage.getItem('select-background')
    sectionExample.style.backgroundColor = savedBG
    
    let savedColor = localStorage.getItem('select-color')
    sectionExample.style.color = savedColor

    let savedFS = localStorage.getItem('select-Font')
  }

  savePreferences()
}
