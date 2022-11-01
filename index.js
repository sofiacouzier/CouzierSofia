

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = []
        this.libros = []
    }


    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    countMascotas() {
        return `${this.mascotas.length}`
    }
    addMasctota(mascota) {
        this.mascotas.push(mascota)
    }

    addBook(titulo, autorLibro) {
        this.libros.push({ nombre: titulo, autor: autorLibro })
    }
    getBooksName() {
        return this.libros.map(libro => libro.nombre)
    }
}
let martin = new Usuario('Martin', 'Gomez', [], []
)
martin.addMasctota('perro')
martin.addMasctota('gato')
martin.addBook('trajano', 'posterguillo')

let juan = new Usuario('Juan', 'Rubio', [], [])
juan.addMasctota('perro')
juan.addMasctota('gato')
juan.addMasctota('pez')
juan.addMasctota('loro')
juan.addBook('Divergente', 'Roth')
juan.addBook('Runner', 'Dashner')


console.log(martin.getFullName())
console.log(martin.countMascotas())
console.log(martin.getBooksName())

console.log(juan.getFullName())
console.log(juan.countMascotas())
console.log(juan.getBooksName())
