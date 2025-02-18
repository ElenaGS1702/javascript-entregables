let libros_leidos = []

const agregarLibro = (titulo) => {
    libros_leidos.push(titulo)
}

const mostrarLibrosLeidos = () => {
    console.log(libros_leidos)
}

agregarLibro("Mi planta de naranja lima")
agregarLibro("La historia del loco")
agregarLibro("Cazadores de sombras")
agregarLibro("Cronica de una muerte anunciada")
mostrarLibrosLeidos()