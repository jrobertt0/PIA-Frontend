import { useEffect, useState } from "react";
import { deleteEmail, registerEmail } from "../helpers/requests";
import AlertCard from "../alertCard/alertCard";
import "./inputE.scss";

function InputE() {
	const [email, setEmail] = useState("");
	const [alert, setAlert] = useState("");
	const [typeAlert, setTypeAlert] = useState("");

	const handleAlert = (res) => {
		if (res.error) {
			setTypeAlert("error");
			setAlert(res.error);
		} else {
			setTypeAlert("success");
			setAlert(res.msg);
		}

		setTimeout(() => {
			setTypeAlert("");
			setAlert("");
		}, 3000);
	};

	const handleRequest = async (e, register) => {
		e.preventDefault();
		let res;
		if (email.length > 3) {
			if (register) res = await registerEmail({ email });
			else res = await deleteEmail({ email });

			handleAlert(res);
		}
	};

	return (
		<>
			<form
				className="email-form"
				onSubmit={(e) => handleRequest(e, true)}
			>
				<h2>Ingresa tu correo</h2>
				<div className="main">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="buttons">
						<button type="submit" className="add">Registrar</button>
						<button
							type="button"
							className="delete"
							onClick={(e) => handleRequest(e, false)}
						>
							Eliminar
						</button>
					</div>
				</div>
			</form>
			<AlertCard msg={alert} type={typeAlert} />
		</>
	);
}

export default InputE;
