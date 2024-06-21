const calculadora = () => {
    const $valor = document.getElementById('txt_valor');
    const $propina = document.getElementById('txt_propina');
    const $iva = document.getElementById('txt_iva');
    const $total = document.getElementById('total');

    const vPropina = parseFloat($valor.value) * (1 + parseFloat($propina.value) / 100);
    const vTotal = parseFloat(vPropina) * (1 + (parseFloat($iva.value) / 100));

    $total.innerText = vTotal.toFixed(2);
};

export { calculadora };