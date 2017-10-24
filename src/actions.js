import store from "./store";

export const nextQz = (choice) => {
    console.log(choice);
    let oldAnswers = store.getState().answers;
    const newAnswers = oldAnswers.concat(choice);
    console.log(newAnswers)
	store.setState({
        answers: newAnswers,
    })
    next();
    // aleatorio();
};

const next = () => {
    let oldCounter = store.getState().counter;
    const newCounter = oldCounter + 1;

	store.setState({
        counter: newCounter,
        // answers: newAnswers,
	})
};

const aleatorio = () => {
    let oldChoices = store.getState().questions.choices;
    let possition = [0,1,2].sort(() => {
            return Math.random() - 0.5
        });
        let newChoices=[];
        newChoices[0]=oldChoices[possition[0]]
        newChoices[1]=oldChoices[possition[1]]
        newChoices[2]=oldChoices[possition[2]]
    store.setState({
        choices: newChoices,
    });
}