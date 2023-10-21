let name = 'Madonna';


        const apiKey = 'chAwYDl+7iA0glNwX+fZHQ==effHjx6YH0xNA2RS';
        fetch(`https://api.api-ninjas.com/v1/celebrity?name=${name}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        })

            .then(data => data.json())


            .then(data => {
                console.log(data);
                const contenido = document.getElementById('contenido');
                contenido.innerHTML += `
      <div class="api1">
          Nombre: ${data[0].name}<br>
          Nacionalidad: ${data[0].nationality}<br>
          Edad: ${data[0].age}<br>
      </div>`;
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);})


                name = 'Michael Jackson';


        fetch(`https://api.api-ninjas.com/v1/celebrity?name=${name}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        })

            .then(data => data.json())


            .then(data => {
                console.log(data);
                const contenido2 = document.getElementById('contenido');
                contenido2.innerHTML += `
      <div class="api2">
          Nombre: ${data[0].name}<br>
          Nacionalidad: ${data[0].nationality}<br>
          Edad: ${data[0].age}<br>
      </div>`;
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);})