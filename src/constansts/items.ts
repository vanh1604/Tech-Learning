const emptyArray = new Array(10).fill({ title: "", ans: [], order: 0 });

export const quizzes = emptyArray.map((item: any, index: any) => {
	return {
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		ans: [
			{
				answer: "A",
				title: "Lorem ipsum 1",
			},
			{
				answer: "B",
				title: "Lorem ipsum 2",
			},
			{
				answer: "C",
				title: "Lorem ipsum 3",
			},
			{
				answer: "D",
				title: "Lorem ipsum 4",
			},
		],
		order: index + 1,
		rightAns: "B",
		userAns: "",
	};
});
