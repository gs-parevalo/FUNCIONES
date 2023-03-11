function porcentaje() {

    let campo_c1 = document.getElementById('c1');
    let campo_c2 = document.getElementById('c2');
    let campo_c3 = document.getElementById('c3');

    let c1 = parseInt(campo_c1.value);
    let c2 = parseInt(campo_c2.value);
    let c3 = parseInt(campo_c3.value);

    //let promedio = (campo_c1.value + campo_c2.value + campo_c3.value)

    let promedio = (c1 + c2 + c3) / 3
    let var1 = promedio * 0.55

    console.log(var1);

    let campo_cef = document.getElementById('cef');
    let cef = parseInt(campo_cef.value);
    let var2 = cef * 0.3

    console.log(var2);

    let campo_ctf = document.getElementById('ctf');
    let ctf = parseInt(campo_ctf.value);

    let var3 = ctf * 0.15

    console.log(var3);

    let campo_result = document.getElementById('result');
    let result = var1 + var2 + var3

    campo_result.value = parseInt(result)

}