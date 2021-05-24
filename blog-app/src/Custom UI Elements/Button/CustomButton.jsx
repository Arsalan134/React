import "./CustomButton.css";

const CustomButton = ({ title, action }) => {
	return (
		<button className="CustomButton" onClick={action}>
			{title}
		</button>
	);
};

CustomButton.defaultProps = {
	title: "Default Title",
};

export default CustomButton;
