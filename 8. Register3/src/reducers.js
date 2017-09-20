const counterReducer = (previousState = 0, action) => {
	// previous : 0
	// action : { type: "increment"}
	// action : { type: "decrement"}

	switch (action.type) {
		case "INCREMENT":
			return previousState + 1;
		case "DECREMENT":
			return previousState - 1;
		default:
			return previousState;
	}

};

export default counterReducer;