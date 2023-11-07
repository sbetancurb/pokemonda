function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

$(document).ready(function () {
    const pokeNameCard = document.getElementById('pokeNameCard');
    const pokeHeightCard = document.getElementById('pokeHeightCard');
    const pokePhraseCard = document.getElementById('pokePhraseCard');
    const pokeAbilityCard = document.getElementById('pokeAbilityCard');
    const containerIdCard = document.getElementById('containerIdCard');
    const pokeImgCard = document.getElementById('pokeImgCard');
    const pokeNameOut = document.getElementById('pokeNameOut');
    const pokeImgOut = document.getElementById('pokeImgOut');

    $('#randomize').on('click', function () {
        document.getElementById('pokeCard').removeAttribute('hidden');
        $.ajax({
            type: 'GET',
            url: "/api/randomPokemon",
            success: function (data) {
                pokeNameCard.innerText = capitalize(data['nombre']);
                pokeHeightCard.innerText = capitalize(data['altura']);
                pokePhraseCard.innerText = capitalize(data['frase']);
                pokeAbilityCard.innerText = capitalize(data['habilidad']);
                containerIdCard.innerText = data['hostId'];
                pokeNameOut.innerText = capitalize(data['nombre']);
                pokeImgCard.setAttribute('src', data['imagen']);
                pokeImgOut.setAttribute('src', data['imagen']);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});