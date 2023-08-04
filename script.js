function toggleMode(){
  const html = document.documentElement

  //forma mais simplificada
  html.classList.toggle("light")

  //no formato de condição
  // if (html.classList.contains('light')) {
  //     html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //1-pegar a tag img
  const img = document.querySelector("#profile img")
  
  //2-substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver no modo claro, adicionar a imagem séria
    img.setAttribute("src", "./assets/avatar-serio.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel Sena serio na parte de fora da faculdade com viseira preta e casaco azul."
    )
  } else {
    //se estiver no modo escuro, manter a imagem feliz e o texto alternativo
    img.setAttribute("src", "./assets/avatar-feliz.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel Sena feliz na parte de fora da faculdade com viseira preta e casaco azul."
    )
  }
}

//documentElement = HTML
//querySelector = pequisa pelo seletor
//setAttribute = ajustar algum atributo