let cursos = [
    {
        nombre: "power BI",
        duracion: "5 horas",
        inversion: 100000,
        id: 1,
    },

    {
        nombre: "SQL",
        duracion: "10 horas",
        inversion: 120000,
        id: 2, 
    },

    {
        nombre: "R",
        duracion: "3 horas",
        inversion: 90000,
        id: 3,
    },
];

export function listarCursos(){
    cursos.map((curso) => console.log(curso))
}