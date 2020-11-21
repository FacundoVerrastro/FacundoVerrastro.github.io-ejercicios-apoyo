import DeleteButton from './DeleteButton.js'

function Tablebody(props){
    const name = props.user.name;
    const job = props.user.job;
    return(
    <tr>
        <td>{name}</td>
        <td>{job}</td>
        <td><DeleteButton/></td>
    </tr>
    );
}
export default Tablebody;