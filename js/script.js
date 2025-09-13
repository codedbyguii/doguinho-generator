
async function pegarDog() {
    
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json();
    const gerarDog = data.message;
    
    document.getElementById('imagemDoguinho').innerHTML = `<img src="${gerarDog}" alt="Doguinho!">`

}
