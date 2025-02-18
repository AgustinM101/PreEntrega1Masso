import React from 'react'

const Checkout = () => {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });




    const finalizarCompra = (evento) => {
        evento.preventDefault(); // Evita que el formulario se envíe
        console.log(user);
        // la logica que hacemos para enviar al backend
        // fetch con el metodo post para crear un a orden de compra
    };

   /*  const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
 */
    const capturarNombre = (evento) => {
        setUser({...user, nombre: evento.target.value});
    };
    const capturarEmail = (evento) => {
        setUser({...user, email: evento.target.value});
    };
    const capturarTelefono = (evento) => {
        setUser({...user, telefono: evento.target.value});
    };

    const handleChange = (evento) => {
        //const {name, value} = target;
        //const { target } = evento;

        const { name, value } = evento.target;
        if(evento.target.name === "nombre"){
            setNombre(evento.target.value);
        }else if(evento.target.name === "email"){
            setEmail(evento.target.value);
        }else if(evento.target.name === "telefono"){
            setTelefono(evento.target.value);
        }
    };



  return (
    <div>
        <form onSubmit={finalizarCompra}>
            <input type="text" placeholder="nombre" name="nombre" onChange={capturarNombre}  id="" />
            <input type="text" placeholder="email" name="email"  onChange={capturarEmail}   id="" />
            <input type="text" placeholder="telefono" name="telefono" onChange={capturarTelefono}   id="" />

            <button>comprar</button> //boton de tipo submit
            <button type="button">cancelar</button>
        </form>

    </div>
    
  )
}

export default Checkout

{/* <button onClick={sumar}>Sumar</button> 
    <button onClick={() => sumar(1,5,2)}>Sumar </button>*/}