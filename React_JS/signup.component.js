import React from 'react'

// only one default export but multiple named exports
export default class SignUpComponent extends React.Component{

    constructor() {
        super();
    }

    render() {
        

        return(<table>
            <tr>
                <td>First Name</td>
                <td><input type = "text" /></td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td><input type = "text" /></td>
            </tr>
            <tr>
                <td>Usename</td>
                <td><input type = "text" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type = "password" /></td>
            </tr>
            <tr>
                <td><button type = "submit" value = "submit">Submit</button></td>
                <td><button type = "reset" value = "reset">Reset</button></td>
            </tr>
        </table>);
    }
}