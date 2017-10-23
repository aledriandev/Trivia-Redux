import store from "./store";

export const nextQz = (choice) => {
    console.log(choice);
    let oldAnswers = store.getState().answers;
    const newAnswers = oldAnswers.concat(choice);
    console.log(newAnswers)
	store.setState({
        answers: newAnswers,
    })
    next()
};

const next = () => {
    let oldCounter = store.getState().counter;
    const newCounter = oldCounter + 1;

	store.setState({
        counter: newCounter,
        // answers: newAnswers,
	})
};