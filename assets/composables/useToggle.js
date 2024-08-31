export const useToggle = () => {
	const isToggled = useState("isToggled", () => false);
	const isAuth = useState("isAuth", () => false);

	const toggle = () => {
		isToggled.value = !isToggled.value;
	};

	const handleLogin = () => {
		isAuth.value = !isAuth.value;
		toggle();
	};
	return {
		isToggled,
		handleLogin,
		isAuth,
		toggle,
	};
};
