import propTypes from "prop-types";
import Button from "./Button";

const Header = ({title,onAdd,showAdd}) => {
    return ( 
    <div className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'add'}
          onClick={onAdd}
        />
    </div> 
    );
}

Header.defaultProps = {
    title: 'To Do List !'
}

Header.propTypes  = {
    title: propTypes.string.isRequired ,
}
 
export default Header;