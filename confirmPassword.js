const contraseña = document.querySelector('password')
const confirmarContraseña = document.querySelector('confirm-password')
const buttonRegistrar = document.querySelector('login-button')

buttonRegistrar.addEventListener('clic', registrarDatos)


if (contraseña.value == confirmarContraseña.value){
    alert('Exitoso')
}