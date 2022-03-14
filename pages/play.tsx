import Game from "../component/Game";
import {getAnswerByDate, setAnswerDate} from "../service/query/query";

export async function getStaticProps({ params}) {
    const today = new Date().toISOString().slice(0, 10).replace('T', ' ');
    let answer;
    answer = await getAnswerByDate(today);
    if (!answer) {
        await setAnswerDate(today);
        answer = await getAnswerByDate(today);
    }
    return {
        props: {
            answer
        }
    }
}

export default function Play({answer}) {
    return (
        <Game answer={answer}/>
    );
}