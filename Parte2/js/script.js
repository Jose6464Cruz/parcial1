      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
   let may=document.getElementById("btn_mayusculas")

  may.addEventListener("click",lowerCase)


  function lowerCase(event){
  event.preventDefault()
  let nombres =document.getElementById("txt_may").value
  let nom=nombres.split(",") 
  let minuscu=nom
  for(let i=0; i<nom.length; i++){

    minuscu[i]=nom[i].toLowerCase();
  }

  document.getElementById("txt_may").value=`${minuscu}`
  }

      
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
           let conv=document.getElementById("btn_añoshumano")

           conv.addEventListener("click",calculateDogAge)

           function calculateDogAge(event){
          event.preventDefault()
           let edad_h =document.getElementById("edad_humano").value
          
           let años_p = parseInt(edad_h)*7
           document.getElementById("edad_perro").value=`${años_p}`
           }


      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

       let muestra=document.getElementById("btn_muestra")
       muestra.addEventListener("click",mostrar)
function mostrar(event){
  event.preventDefault()
       function pokemon(nombre,especie,ataque,defensa){
       this.nombre = nombre
       this.especie=especie
       this.ataque= ataque
       this.defensa=defensa
       }

       /*let p1=document.getElementById("nombre_poke1")
       let e1=document.getElementById("especie_poke1")
       let a1=document.getElementById("ataque_poke1")
       let d1=document.getElementById("defensa_poke1")

       let p2=document.getElementById("nombre_poke2")
       let e2=document.getElementById("especie_poke2")
       let a2=document.getElementById("ataque_poke2")
       let d2=document.getElementById("defensa_poke2")*/

       let pok1= new pokemon('rawer','dragon',5,10)
       let pok2= new pokemon('mer','dron',7,16)


       document.getElementById("nombre_poke2").value=`${pok2.nombre}`
       document.getElementById("nombre_poke1").value=`${pok1.nombre}`
       document.getElementById("especie_poke2").value=`${pok2.especie}`
       document.getElementById("especie_poke1").value=`${pok1.especie}`

       document.getElementById("ataque_poke2").value=`${pok2.ataque}`
       document.getElementById("ataque_poke1").value=`${pok1.ataque}`
       document.getElementById("defensa_poke2").value=`${pok2.defensa}`
       document.getElementById("defensa_poke1").value=`${pok1.defensa}`
      }