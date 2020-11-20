import React from 'react';
//Componente de clase
// class NombreUsuario extends React.Component{
//     constructor(props){
//         super(props);
//         this.nombre=props.user.nombre;
//         this.apellido=props.user.apellido;
//     }
// render(){
//     return(
//     <h4>Hola {this.nombre} {this.apellido}</h4>
//     );
// }
// }
// export default NombreUsuario;

//Componente Funcional
function NombreUsuario(props){
    const nombre= props.user.nombre;
    const apellido= props.user.apellido
    return <span>Hola {nombre} {apellido}</span>
}
export default NombreUsuario;