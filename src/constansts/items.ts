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

export const quizzes3 = [
	{
		title: "Trong Scratch, tọa độ (0,0) nằm ở đâu trên màn hình?",
		ans: [
			{
				answer: "A",
				title: " Góc trên bên trái",
			},
			{
				answer: "B",
				title: "Góc dưới bên phải",
			},
			{
				answer: "C",
				title: "Trung tâm màn hình",
			},
			{
				answer: "D",
				title: "Góc trên bên phải",
			},
		],
		order: 1,
		rightAns: "C",
		userAns: "",
		id: `quiz${0}`,
	},
	{
		title: "Lệnh nào sau đây cho phép di chuyển nhân vật đến một vị trí cụ thể trên màn hình?",
		ans: [
			{
				answer: "A",
				title: " Di chuyển 10 bước",
			},
			{
				answer: "B",
				title: " Quay 15 độ",
			},
			{
				answer: "C",
				title: "Đi tới x: 0 y: 0",
			},
			{
				answer: "D",
				title: "Đổi hướng 90 độ",
			},
		],
		order: 2,
		rightAns: "C",
		userAns: "",
		id: `quiz${1}`,
	},
	{
		title: "Khi bạn muốn nhân vật của mình di chuyển về phía trước, bạn sẽ sử dụng lệnh nào?",
		ans: [
			{
				answer: "A",
				title: "Di chuyển 10 bước",
			},
			{
				answer: "B",
				title: "Quay 15 độ",
			},
			{
				answer: "C",
				title: "Đi tới x: 0 y: 0",
			},
			{
				answer: "D",
				title: "Đổi hướng 90 độ",
			},
		],
		order: 3,
		rightAns: "A",
		userAns: "",
		id: `quiz${2}`,
	},
	{
		title: "Lệnh “Đặt hướng về 90 độ” sẽ khiến nhân vật quay về hướng nào?",
		ans: [
			{
				answer: "A",
				title: "Lên trên",
			},
			{
				answer: "B",
				title: "Xuống dưới",
			},
			{
				answer: "C",
				title: "Sang phải",
			},
			{
				answer: "D",
				title: " Sang trái",
			},
		],
		order: 4,
		rightAns: "C",
		userAns: "",
		id: `quiz${3}`,
	},
	{
		title: "Khi bạn muốn nhân vật của mình di chuyển theo một hình vuông, bạn sẽ sử dụng lệnh nào?",
		ans: [
			{
				answer: "A",
				title: "Di chuyển 10 bước",
			},
			{
				answer: "B",
				title: "Lặp lại 4 [di chuyển 10 bước, quay phải 90 độ]",
			},
			{
				answer: "C",
				title: "",
			},
			{
				answer: "D",
				title: "",
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
		title: "Bài 1: Làm quen với Scratch",
		id: `lesson0`,
		paramList: {
			id: `lesson0`,
			videoSource: "https://www.youtube.com/watch?v=QuZA24FEiIs&list=PLlJl1BR90sNE13WvpMX6oGjXzsZ90GKEM&index=8",
		},
		avata: {
			uri: "https://www.icantech.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%2Ficantech%2Fcms%2F3_3x_960b0d2454.png&w=1920&q=100",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 2: Tạo nhân vật trong Scratch",
		id: `lesson1`,
		paramList: {
			id: `lesson1`,
			videoSource: "https://www.youtube.com/watch?v=6Sszrx9GAnE&t=50s",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 3: Tọa độ, di chuyển và hướng",
		id: `lesson2`,
		paramList: {
			id: `lesson2`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 4: Lệnh sự kiện",
		id: `lesson3`,
		paramList: {
			id: `lesson3`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 5: Lệnh điều kiện",
		id: `lesson4`,
		paramList: {
			id: `lesson4`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 5: Lệnh điều kiện",
		id: `lesson4`,
		paramList: {
			id: `lesson4`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 6: Lệnh lặp",
		id: `lesson5`,
		paramList: {
			id: `lesson5`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
		},
	},
	{
		...lessonsEmpty,
		title: "Bài 7: Lệnh cảm biến",
		id: `lesson6`,
		paramList: {
			id: `lesson6`,
			videoSource: "KDThNBO0vgw",
		},
		avata: {
			uri: "https://resources.mindx.edu.vn/uploads/images/ngon-ngu-lap-trinh-scratch-1687508459980-7347.jpg",
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
		title: "Giới thiệu về Scratch",
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
		title: "Câu hỏi ôn tập bài 2",
		id: `quiz1`,
		paramList: {
			id: `quiz1`,
			order: 2,
			quizzes: quizzes2,
		},
		quizzes: quizzes2,
		isComplete: false,
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
		title: "Game 1",
		paramList: {
			id: 0,
		},
		avata: {
			uri: "https://images.unsplash.com/photo-1682687221363-72518513620e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
		},
	},
	{
		...gamesEmty,
		id: `game${0}`,
		title: "Game 2",
		paramList: {
			id: 1,
		},
		avata: {
			uri: "https://images.unsplash.com/photo-1695764062673-ca63e7a6f4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		},
	},
];

export const createQuiz = () => {
	quizz.map(async (quiz) => {
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
