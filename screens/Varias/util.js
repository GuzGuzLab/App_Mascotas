const url = 'http://172.30.5.212/api/Register';  // Asegúrate de que esta URL esté bien formada

// Función para hacer la solicitud POST
async function PostData(URL, dat) {
    try {
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dat)
        });

        // Verificar si la respuesta es exitosa (código 2xx)
        if (!res.ok) {
            throw new Error('Error en la solicitud. Código de estado: ' + res.status);
        }

        const data = await res.json(); // Obtener los datos de la respuesta en formato JSON
        return data;  // Retorna los datos obtenidos
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        return { error: true, message: error.message };  // Devuelve un objeto de error
    }
}

PostData(url,{
    email : "quwea",
    password : "aasd"
})