 const lookup = document.getElementById('lookup');
    const country = document.getElementById('country');
    const result = document.getElementById('result');

    lookup.addEventListener('click', () => {

        let countryName = country.value;

        fetch(`world.php?country=${encodeURIComponent(countryName)}`)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            
            })
            .catch(error => {
                console.error('Error:', error);
            });

    });

