const urlG = "http://localhost/back-end/services/getUsers.php"
const urlP = "http://localhost/back-end/services/users.php"


async function GetData(URL) {
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        // Manejar diferentes códigos de estado
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const error = new Error(errorData.message || `HTTP error! status: ${response.status}`);
            error.status = response.status;
            error.data = errorData;
            throw error;
        }

        // Parsear la respuesta como JSON
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en GetData:", error);
        
        // Manejo de errores específicos
        if (error.status) {
            switch (error.status) {
                case 404:
                    console.log("Recurso no encontrado");
                    break;
                case 401:
                    console.log("No autorizado");
                    break;
                case 500:
                    throw new Error('Error del servidor');
                default:
                    console.log(`Error HTTP ${error.status}`);
            }
        } else {
            throw new Error('Error de conexión o red');
        }
        
        throw error;
    }
}

async function PostData(URL, datas) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(datas)
        })
  
      // Manejar diferentes códigos de estado
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const error = new Error(errorData.message || `HTTP error! status: ${response.status}`)
        error.status = response.status
        error.data = errorData
        throw error
      }
  
      // Parsear la respuesta como JSON
      const data = await response
      return data
  
    } catch (error) {
        console.log(error)
        // Manejo de errores
        if (error.status) {

            if (error.status >= 500) {
                throw Error('Error del servidor:', error)
            }

            else if (error.status === 404) console.log("No estas en mi corazon")
            else if (error.status === 302) console.log("Ya estas en mi corazon")

        } else throw Error('Error de conexión:', error)
        
        throw error
    }
}

// Ejemplos de uso:
// PostData(urlP,{
//     email: "perras1231@gmail.com",
//     password: "perras1231##"
// })

// async function fetchUsers() {
//     try {
//         const users = await GetData(urlP, {
//             page: 1,
//             limit: 10
//         });
//         console.log("Usuarios obtenidos:", users);
//         return users;
//     } catch (error) {
//         console.error("Error al obtener usuarios:", error);
//         // Manejo adicional del error aquí
//     }
// }
