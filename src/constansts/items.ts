import { doc, getDoc, setDoc } from "firebase/firestore";
import { CardProps } from "../components/Main/CardItem";
import { CardListProps } from "../components/Main/CardList";
import { firestore } from "../firebase";

const quizEmptyArray = new Array(10).fill({ title: "", ans: [], order: 0 });

export const quizzes = quizEmptyArray.map((item: any, index: any) => {
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
		id: `quiz${index}`,
	};
});

const lessonsEmptyArray: CardProps[] = new Array(10).fill({
	navigateTo: "LessonVideo",
	title: "Lorem ipsum",
	id: 0,
	avata: {
		uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
	},
});

export const lessons: CardProps[] = lessonsEmptyArray.map((lesson, index) => {
	return {
		...lesson,
		id: `lesson${index}`,
		paramList: {
			id: `lesson${index}`,
			videoSource: { uri: "https://pic.pikbest.com/19/58/54/88f888piCm76.mp4" },
		},
	};
});

const quizEmtyArray: CardProps[] = new Array(10).fill({
	navigateTo: "Lesson",
	title: "Lorem ipsum",
	id: 0,
	avata: {
		uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
	},
});

export const quizz = quizEmtyArray.map((quiz, index) => {
	return {
		...quiz,
		navigateTo: "Quiz",
		id: `quiz${index}`,
		paramList: {
			id: `quiz${index}`,
			order: index + 1,
		},
		isComplete: index != 5,
	};
});

const gamesEmtyArray: CardProps[] = new Array(10).fill({
	navigateTo: "Puzzle",
	title: "Lorem ipsum",
	id: 0,
	avata: {
		uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
	},
});

export const games = gamesEmtyArray.map((game, index) => {
	return {
		...game,
		id: `game${index}`,
		paramList: {
			id: `game${index}`,
		},
		title: "Lorem ipsum",
	};
});

export const createQuiz = () => {
	quizzes.forEach(async (quiz) => {
		const docRef = doc(firestore, "quiz", quiz.id);
		await setDoc(docRef, quiz);
	});
};

export const createQuizScreenOnFirestore = async () => {
	const docRef = doc(firestore, "cards", "quiz");
	await setDoc(docRef, { data: quizz });
};
