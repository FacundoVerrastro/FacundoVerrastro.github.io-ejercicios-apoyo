import NombreUsuario from './NombreUsuario'
import Avatar from './Avatar'

function Header() {
  const user={nombre:Text, apellido:Text};
  user.nombre='Facundo';
  user.apellido='Verrastro';
  return (
    <header className="Header">
      <h1>Striata </h1><h4><NombreUsuario user={user}/> <Avatar/></h4>
    </header>
  );
}

export default Header;
