function Tablehead(props){
     const name=props.user.name;
     const job=props.user.job;
    
    return(
        <tr>
            <td>{name}</td>
            <td>{job}</td>
            <td>Remove</td>
        </tr>
    );
}
export default Tablehead;
