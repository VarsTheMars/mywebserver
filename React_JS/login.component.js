import React from 'react'

// only one default export but multiple named exports
export default class LoginComponent extends React.Component{

    constructor() {
        super();
    }

    render() {
        

        return(<table>
            <tr>
                <td>Usename</td>
                <td><input type = "text" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type = "password" /></td>
            </tr>
            <tr>
                <td><button>Login</button></td>
                <td><button>Clear</button></td>
            </tr>
        </table>);
    }
}