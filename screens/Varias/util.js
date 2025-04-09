const urlP = "http://localhost/back-end/services/users.php"

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

// PostData(urlP,{
//     email: "perras1231@gmail.com",
//     password: "perras1231##"
// })