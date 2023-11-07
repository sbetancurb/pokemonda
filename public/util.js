function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

$(document).ready(function () {

    $('#randomize').on('click', function () {
        document.getElementById('pokeCard').removeAttribute('hidden');
        $.ajax({
            type: 'GET',
            url: '/api/randomPokemon',
            success: function (data) {
                document.getElementById('pokeNameCard').innerText = capitalize(data['nombre']);
                document.getElementById('pokeHeightCard').innerText = capitalize(data['altura']);
                document.getElementById('pokePhraseCard').innerText = capitalize(data['frase']);
                document.getElementById('pokeAbilityCard').innerText = capitalize(data['habilidad']);
                document.getElementById('containerIdCard').innerText = data['hostId'];
                document.getElementById('pokeNameOut').innerText = capitalize(data['nombre']);
                document.getElementById('pokeImgCard').setAttribute('src', data['imagen']);
                document.getElementById('pokeImgOut').setAttribute('src', data['imagen']);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});