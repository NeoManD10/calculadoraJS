//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor/*value += valor;: Accede al valor actual del 
                                                        campo de entrada y le agrega el valor pasado como
                                                        parámetro. La notación += se utiliza para concatenar
                                                        el nuevo valor al valor existente.*/ 
 }
//Esta funcion vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//Esta funcion resuelve las operaciones gracias a la funcion 'eval'
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
} 
