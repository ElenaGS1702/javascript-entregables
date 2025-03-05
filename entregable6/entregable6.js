class Libro {
    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    describirLibro = () => console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`)
}

const libro1 = new Libro("Mi Planta de Naranja Lima", "José Mauro de Vasconcelos", 1968, "disponible")
libro1.describirLibro()

const libro2 = new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", 1981, "prestado")
libro2.describirLibro()