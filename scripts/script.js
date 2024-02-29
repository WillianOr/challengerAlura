let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btCriptografar() {
    const string = document.querySelector("#text_input").value;
    let stringCriptografada = string;

    for (let i = 0; i < matriz.length; i++) {
        if (string.includes(matriz[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matriz[i][0], matriz[i][1]);

        }
    }
    let mudando = document.querySelector("#text_output");
    mudando.innerHTML = stringCriptografada;

    if (string.length > 0) {
        const ocultar = document.querySelector(".exibir").style.display = "none";
        const revelar = document.querySelector(".texto_saida").style.display = "block";
        const revela = document.querySelector(".bt_copiar").style.display = "block";
    }
}

function btDescriptografar() {
    const string = document.querySelector("#text_input").value;
    let stringDescriptografada = string;

    for (let i = 0; i < matriz.length; i++) {
        if (string.includes(matriz[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    console.log(stringDescriptografada);
    let mudando = document.querySelector("#text_output");
    mudando.innerHTML = stringDescriptografada;

    if (string.length > 0) {
        const ocultar = document.querySelector(".exibir").style.display = "none";
        const revelar = document.querySelector(".texto_saida").style.display = "block";
        const revela = document.querySelector(".bt_copiar").style.display = "block";
    }
}

function btCopiar(copiar) {
    const copia = document.querySelector(".texto_saida");
    copia.select();
    copia.setSelectionRange(0, 99999); //Para dispositivos mobile
    navigator.clipboard.writeText(copia.value);
}