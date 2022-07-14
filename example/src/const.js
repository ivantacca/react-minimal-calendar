const lightPalettes = [
  {
    primary: "#3838d1",
    selection: "pink",
    accent: "white"
  },
  {
    primary: "#8971d9",
    selection: "#e3dbfd",
    accent: "white"
  }
]

const darkPalettes = [
  {
    primary: "palegreen",
    selection: "#df3232",
    accent: "white"
  },
  {
    primary: "#c9ff5c",
    selection: "#3e32a1",
    accent: "white"
  }
]

export const palette = {
  light: lightPalettes[Math.floor(Math.random()*lightPalettes.length)],
  dark: darkPalettes[Math.floor(Math.random()*darkPalettes.length)]
}