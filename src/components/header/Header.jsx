import "./Header.scss";

function Header(props) {
	return (
		<div className="header">
			<h2>{props.pageName}</h2>
            <p>{props.address}</p>
            <br></br>
            <hr></hr>
		</div>
	);
}

export default Header;