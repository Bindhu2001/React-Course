import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <h2>{this.props.footers}</h2>
            </footer>
        )
    }
}
export default Footer;