import './alertCard.scss'

function AlertCard({ type, msg }) {
	return (
		<div className={type + " alert"}>
			<h3>{msg}</h3>
		</div>
	);
}

export default AlertCard;
