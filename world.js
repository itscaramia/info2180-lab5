const lookup = document.getElementById('lookup');
const lookupCities = document.getElementById('lookup-cities');
const country = document.getElementById('country');
const result = document.getElementById('result');

function search(extra = '') {
    fetch(`world.php?country=${encodeURIComponent(country.value)}${extra}`)
        .then(response => response.text())
        .then(data => {
            result.innerHTML = data;
            result.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

lookup.addEventListener('click', () => search());
lookupCities.addEventListener('click', () => search('&lookup=cities'));