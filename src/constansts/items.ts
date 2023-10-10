import { doc, getDoc, setDoc } from "firebase/firestore";
import { CardProps } from "../components/Main/CardItem";
import { CardListProps } from "../components/Main/CardList";
import { firestore } from "../firebase";

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

export const quizzes2 = [
	{
		title: "Trong Scratch, các khối lệnh được ghép nối lại với nhau bằng gì?",
		ans: [
			{
				answer: "A",
				title: "Dấu chấm và dấu phẩy",
			},
			{
				answer: "B",
				title: "Dấu gạch nối",
			},
			{
				answer: "C",
				title: "Dấu cách",
			},
			{
				answer: "D",
				title: " Dấu gạch chéo",
			},
		],
		order: 1,
		rightAns: "B",
		userAns: "",
		id: `quiz${0}`,
	},
	{
		title: "Trong Scratch, khối lệnh nào được sử dụng để tạo một vòng lặp?",
		ans: [
			{
				answer: "A",
				title: "Kết thúc",
			},
			{
				answer: "B",
				title: "Lặp lại",
			},
			{
				answer: "C",
				title: "Điều kiện",
			},
			{
				answer: "D",
				title: "Chuyển đổi",
			},
		],
		order: 2,
		rightAns: "B",
		userAns: "",
		id: `quiz${1}`,
	},
	{
		title: "Khi bạn muốn vật thể di chuyển đến một vị trí cụ thể trên sân chơi trong Scratch, bạn sử dụng khối lệnh nào?",
		ans: [
			{
				answer: "A",
				title: "Chuyển đến",
			},
			{
				answer: "B",
				title: "Di chuyển",
			},
			{
				answer: "C",
				title: "Nhảy",
			},
			{
				answer: "D",
				title: "Quay lại vị trí ban đầu",
			},
		],
		order: 3,
		rightAns: "A",
		userAns: "",
		id: `quiz${2}`,
	},
	{
		title: "Trong Scratch, bạn có thể tạo biến bằng cách nào?",
		ans: [
			{
				answer: "A",
				title: "Tạo biến",
			},
			{
				answer: "B",
				title: "Thay đổi biến",
			},
			{
				answer: "C",
				title: "Lặp lại",
			},
			{
				answer: "D",
				title: "Nếu...thì",
			},
		],
		order: 4,
		rightAns: "A",
		userAns: "",
		id: `quiz${3}`,
	},
	{
		title: "Trong Scratch, để làm cho một vật thể bắt đầu quay khi bạn nhấn vào nó, bạn sử dụng khối lệnh nào?",
		ans: [
			{
				answer: "A",
				title: "Thay đổi hướng",
			},
			{
				answer: "B",
				title: "Bắt đầu quay",
			},
			{
				answer: "C",
				title: "Kết thúc quay",
			},
			{
				answer: "D",
				title: "Chuyển đến",
			},
		],
		order: 5,
		rightAns: "C",
		userAns: "",
		id: `quiz${4}`,
	},
];

const lessonsEmpty: CardProps = {
	navigateTo: "LessonVideo",
	title: "",
};

export const lessons: CardProps[] = [
	{
		...lessonsEmpty,
		title: "",
		id: `lesson0`,
		paramList: {
			id: `lesson0`,
			videoSource: "XqZsoesa55w",
		},
		avata: {
			uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "",
		id: `lesson1`,
		paramList: {
			id: `lesson1`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
		},
	},
];

const quizEmty: CardProps = {
	navigateTo: "Quiz",
	title: "Lorem ipsum",
	avata: {
		uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
	},
};

export const quizz = [
	{
		...quizEmty,
		title: "hehehehe",
		id: `quiz0`,
		paramList: {
			id: `quiz0`,
			order: 1,
			quizzes,
		},
		isComplete: false,
		quizzes,
	},
	{
		...quizEmty,
		title: "hehehehe",
		id: `quiz1`,
		paramList: {
			id: `quiz1`,
			order: 2,
			quizzes: quizzes2,
		},
		quizzes: quizzes2,
		isComplete: true,
	},
];

const gamesEmty: CardProps = {
	navigateTo: "Puzzle",
	title: "Lorem ipsum",
	id: "0",
};

export const games = [
	{
		...gamesEmty,
		id: `game${0}`,
		title: "",
		paramList: {
			id: `game${0}`,
		},
		avata: {
			uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
		},
	},
];

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
