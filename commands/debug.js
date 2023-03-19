fetch('https://api.thecatapi.com/v1/images/search', { 
            method: 'GET'              })
          .then(function(response) { return response.json(); })
          .then(function(json) {
            const imageUrl = json[0].url;
            console.log(imageUrl);
          })
