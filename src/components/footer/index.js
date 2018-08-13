import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>&copy;  Anchi  {new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;