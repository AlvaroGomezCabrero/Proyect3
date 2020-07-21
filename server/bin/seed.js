//DataBase
require("dotenv").config()

const mongoose = require('mongoose')

const dbName = 'espacioc'
//mongoose.connect (`mongodb://localhost/${dbName}`)
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })

//Model

const Course = require('../models/Course.model')

//Course.collection.drop();

const courses = [
    {
        title: "Interpretación y Dramatización",
        description: "Este curso aporta  a los alumnos el conocimiento de distintos personajes, el espacio donde se desenvuelven y el conflicto a interpretar, en definitiva el análisis de  distintos personajes y cómo interpretarlos.Con textos diferentes mezclar emociones. Trabajar escenas y monólogos, completado con el movimiento escénico. Todo ello bajo la perspectiva de la dirección.",
        imageUrl: "https://www.webeac.org/wp-content/uploads/2015/05/drama-contemporaneo-206-800x600-750x400.jpgd"
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

//Seed!

Course.create(courses)
    .then(allTheCourses => {
        console.log(`Created ${allTheCourses.length} courses`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the ', err))