//defino funcion para llamar d al document
const d = document;

function contactFormValidations(){
  //empezando las validaciones llamo a formulario, y a todos los input que tengan
  //el atributo required
  const $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");
  //verifico que los llame
  console.log($inputs);
  //para cada input, creo una etiqueta span dinamicamente, que obtenga el mismo name del input
  //y que aparezca el texto que tiene el input en el title
  //además, le agrego la class del form-error y la clase none y lo ajusto despues del hermano
  $inputs.forEach((input)=>{
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);

  });

  d.addEventListener("keyup", (e)=>{
    if (e.target.matches(".contact-form [required]")){
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;
      
      // console.log($input);
      //hago la validación para cuando se escriba, no para que salga cuando está vacio
    if(pattern && $input.value !== ""){
      console.log("El input tiene patrón");
      //creo expresión regular para la valicación
      let regex = new RegExp (pattern);
      return !regex.exec($input.value)
        //agrego y saco la clase del input ara cuando salga el error
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active")
    } 
    if(!pattern){
      console.log("El input NO tiene patrón");
    }
    }
  })

//llamo a la función para verificar que al ingresar los datos, y despues cuando 
//agrego boton resumen.
}
contactFormValidations();

(function(){
  $('[data-toggle="tooltip"]').tooltip()
})

let $cantidadEntradas = document.getElementById('inputCantidad'),
        $botonCalcular = document.getElementById('botonCalcular'),
        $categoria = document.getElementById('inputCategoria'),
        $totalCompra = document.getElementById('totalCompra'),
        $inputNombre = document.getElementById('inputNombre'),
        $inputApellido = document.getElementById('inputApellido'),
        $inputEmail = document.getElementById('inputEmail')
         monto = 0,
         acumulado = 0;

const valorEntrada = 200;

// function validarCadena(nombre,apellido,email){
function resumen(){
  
  contactFormValidations();
  console.log($categoria.value)

  console.log($cantidadEntradas.value)

  $cantidadEntradas.value
  if($categoria.value== "sinCategoria"){
    monto = (valorEntrada)*$cantidadEntradas.value;
    acumulado += acumulado;
  }
  if($categoria.value == "estudiante"){
   monto = (valorEntrada - valorEntrada*0.2)*$cantidadEntradas.value;
   acumulado+= acumulado;
  }
  if($categoria.value == "trainee"){
   monto = (valorEntrada - valorEntrada*0.5)*$cantidadEntradas.value;
   acumulado+= acumulado;
  }
  if($categoria.value == "junior"){
   monto = (valorEntrada - valorEntrada*0.15)*$cantidadEntradas.value;
   acumulado+= acumulado;
  }
  console.log(monto)
  $totalCompra.textContent = `Total a pagar: $ ${monto}`;
}