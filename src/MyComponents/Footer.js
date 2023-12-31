import React from 'react'


export const Footer = () => { 
    let footerStyle = {
        backgroundColor: "#343a40" ,
    }
    return (
        <footer className="text-light py-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
