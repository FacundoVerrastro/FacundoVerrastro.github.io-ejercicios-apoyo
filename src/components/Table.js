import Tablehead from './TableHead';
import Tablebody from './TableBody';
import React from 'react';

class Table extends React.Component{
    render(){
        const user0={name:Text,job:Text};
        user0.name="Name";user0.job="Job";
        const user1={name:Text,job:Text};
        user1.name="Luis";user1.job="Programador";
        const user2={name:Text,job:Text};
        user2.name="Noelia";user2.job="Profesora";
        const user3={name:Text,job:Text};
        user3.name="Ada";user3.job="Cientifica";
        return(
            <table>
                <Tablehead user={user0}/>
                <Tablebody user={user1}/>
                <Tablebody user={user2}/>
                <Tablebody user={user3}/>
            </table>
        );
    }
}
export default Table;