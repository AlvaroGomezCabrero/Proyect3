//DataBase
require("dotenv").config()

const mongoose = require('mongoose')
const Course = require('../models/Course.model')
const Material = require('../models/Materials.model')


//Course.collection.drop();
//Material.collection.drop();

const courses = [
    {
        title: "Interpretación y Dramatización",
        description: "Este curso aporta a los alumnos el conocimiento de distintos personajes, el espacio donde se desenvuelven y el conflicto a interpretar, en definitiva el análisis de  distintos personajes y cómo interpretarlos.Con textos diferentes mezclar emociones. Trabajar escenas y monólogos, completado con el movimiento escénico. Todo ello bajo la perspectiva de la dirección.",
        imageUrl: "https://www.webeac.org/wp-content/uploads/2015/05/drama-contemporaneo-206-800x600-750x400.jpg"
    },

    {
        title: "Gestual",
        description: "Materia consistente en el conocimiento del cuerpo la coordinación de Copia (2) de muestra 031movimientos y el sentido del ritmo. Por medio de una selección de ejercicios, especialmente escogidos, cada alumno adquirirá el conocimiento  adecuado de cada uno de los segmentos de su cuerpo. Igualmente con los ejercicios de relajación que se imparten en este curso y con su práctica adecuada se consigue el auto control y un mayor rendimiento de la imaginación",
        imageUrl: "https://aupate.files.wordpress.com/2013/05/gestos.jpg?w=292&h=290"
    },

    {
        title: "Maquillaje y Caracterización",
        description: "En este curso se desarrolla la habilidad de realizar un protocolo de maquillaje. Conocer las diferentes tonalidades e intensidades del color de sombras, maquillajes, lápices y demás herramientas del maquillaje para adaptar piel y rasgos, a los condicionantes de iluminación, entorno del medio, distancia escenario - espectador y características del personajes a interpretar.",
        imageUrl: "https://cazcarra.com/blog/wp-content/uploads/2019/02/ojos2.jpg"
    },
]

const materials = [

    {
        theater_play: 'la risita',
        author: "Carmelo Coton",
        genre: 'Tragedia',
        description: "lo mejor de lo mejor",
        imageUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        
    },

    {
        theater_play: 'la risita',
        author: "Carmelo Coton",
        genre: 'Tragedia',
        description: "lo mejor de lo mejor",
        imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

    },

    {
        theater_play: 'La llorera',
        author: "Dj Kicks",
        genre: 'Comedia',
        description: "breve y breve",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",

    },

    {
        theater_play: 'la risita molngui',
        author: "Teren ten ten",
        genre: 'Infantil',
        description: "los peques y su imaginacion",
        imageUrl: "https://images.unsplash.com/photo-1509645470620-c9c349934693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",

    },

    {
        theater_play: 'nada que decir',
        author: "el francés",
        genre: 'Mímica',
        description: "todo son gestos",
        imageUrl: "https://images.unsplash.com/photo-1516946870798-f970a32afc8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    },
]


//Seed!
//mongoose.connect(`mongodb+srv://alvarouser:poiu@cluster0.ircaf.mongodb.net/espacioc`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(`mongodb:localhost/${process.env.DB_LOCAL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    
    .then(
        Course.create(courses)
            .then(allTheCourses => {
                console.log(`Created ${allTheCourses.length} courses`)
                mongoose.connection.close();
            })
            .catch(err => console.log('There was an error creating the courses ', err))
)
    
    .then(
        Material.create(materials)
            .then(allTheMaterials => {
                console.log(`Created ${allTheMaterials.length} materials`)
                mongoose.connection.close();
            })
            .catch(err => console.log('There was an error creating the materials ', err))
)
    




// {
//     title: "Interpretación y Dramatización",
//         description: "Este curso aporta a los alumnos el conocimiento de distintos personajes, el espacio donde se desenvuelven y el conflicto a interpretar, en definitiva el análisis de  distintos personajes y cómo interpretarlos.Con textos diferentes mezclar emociones. Trabajar escenas y monólogos, completado con el movimiento escénico. Todo ello bajo la perspectiva de la dirección.",
//             imageUrl: "https://www.webeac.org/wp-content/uploads/2015/05/drama-contemporaneo-206-800x600-750x400.jpg"
// },

// {
//     title: "Gestual",
//         description: "Materia consistente en el conocimiento del cuerpo la coordinación de Copia (2) de muestra 031movimientos y el sentido del ritmo. Por medio de una selección de ejercicios, especialmente escogidos, cada alumno adquirirá el conocimiento  adecuado de cada uno de los segmentos de su cuerpo. Igualmente con los ejercicios de relajación que se imparten en este curso y con su práctica adecuada se consigue el auto control y un mayor rendimiento de la imaginación",
//             imageUrl: "https://aupate.files.wordpress.com/2013/05/gestos.jpg?w=292&h=290"
// },

// {
//     title: "Maquillaje y Caracterización",
//         description: "En este curso se desarrolla la habilidad de realizar un protocolo de maquillaje. Conocer las diferentes tonalidades e intensidades del color de sombras, maquillajes, lápices y demás herramientas del maquillaje para adaptar piel y rasgos, a los condicionantes de iluminación, entorno del medio, distancia escenario - espectador y características del personajes a interpretar.",
//             imageUrl: "https://cazcarra.com/blog/wp-content/uploads/2019/02/ojos2.jpg"
// },