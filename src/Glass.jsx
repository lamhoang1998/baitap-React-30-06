function Glass({ glass, handleChangeGlass }) {
	return (
		<>
			<img
				src={`../public${glass.url}`}
				style={{ width: "240px", opacity: "0.5" }}
				onClick={() => {
					handleChangeGlass(glass.id - 1);
				}}
			/>
		</>
	);
}

export default Glass;
