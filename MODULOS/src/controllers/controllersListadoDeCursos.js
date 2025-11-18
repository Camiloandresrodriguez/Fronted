import { listarCursos} from "../models/modelCursos.js";

let repetir = true

while (repetir) {
    let opcion = prompt("Selecciones: \n1- Listar cursos \n2- Finalizar")
    switch(opcion){

        case "1" :
            listarCursos();
        break;
        
        case "2" :
            repetir = false;
            console.clear()
        break;    
    }
}