import { doc, getDoc, setDoc } from "firebase/firestore";
import { CardProps } from "../components/Main/CardItem";
import { CardListProps } from "../components/Main/CardList";
import { firestore } from "../firebase";

const quizEmptyArray = new Array(10).fill({ title: "", ans: [], order: 0 });

export const quizzes = [
	{
		title: "Scratch là gì?",
		ans: [
			{
				answer: "A",
				title: "Ngôn ngữ lập trình",
			},
			{
				answer: "B",
				title: "Một loại thức ăn",
			},
			{
				answer: "C",
				title: "Máy tính",
			},
			{
				answer: "D",
				title: "Xe hơi",
			},
		],
		order: 1,
		rightAns: "A",
		userAns: "",
		id: `quiz${0}`,
	},
	{
		title: "Trong Scratch, các khối lệnh được ghép nối lại với nhau bằng cách nào?",
		ans: [
			{
				answer: "A",
				title: "Kéo và thả",
			},
			{
				answer: "B",
				title: " Nhấp chuột",
			},
			{
				answer: "C",
				title: "Gõ vào bàn phím",
			},
			{
				answer: "D",
				title: "Trượt",
			},
		],
		order: 2,
		rightAns: "A",
		userAns: "",
		id: `quiz${1}`,
	},
	{
		title: "Khối lệnh nào được sử dụng để di chuyển một nhân vật trong Scratch?",
		ans: [
			{
				answer: "A",
				title: "Chuyển động",
			},
			{
				answer: "B",
				title: " Âm thanh",
			},
			{
				answer: "C",
				title: "Biến số",
			},
			{
				answer: "D",
				title: "Lặp lại",
			},
		],
		order: 3,
		rightAns: "A",
		userAns: "",
		id: `quiz${2}`,
	},
	{
		title: "Scratch được phát triển bởi ai?",
		ans: [
			{
				answer: "A",
				title: "Microsoft",
			},
			{
				answer: "B",
				title: "Apple",
			},
			{
				answer: "C",
				title: "MIT Media Lab",
			},
			{
				answer: "D",
				title: "Google",
			},
		],
		order: 4,
		rightAns: "C",
		userAns: "",
		id: `quiz${3}`,
	},
	{
		title: "Scratch cho phép bạn làm gì với các nhân vật?",
		ans: [
			{
				answer: "A",
				title: "Chỉ xem",
			},
			{
				answer: "B",
				title: "Thay đổi màu sắc",
			},
			{
				answer: "C",
				title: "Di chuyển và tương tác",
			},
			{
				answer: "D",
				title: "Đăng lên mạng xã hội",
			},
		],
		order: 5,
		rightAns: "C",
		userAns: "",
		id: `quiz${4}`,
	},
];

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

export const createLessons = () => {
	lessons.forEach(async (lesson) => {
		const docRef = doc(firestore, "lesson", lesson.id as string);
		if (lesson.id) await setDoc(docRef, lesson.paramList);
	});
};
