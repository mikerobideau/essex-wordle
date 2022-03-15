import Game from "../component/Game";
import {getAnswerByDate, setAnswerDate} from "../service/query/query";

export async function getServerSideProps({ params}) {
    var dt = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    var easternDate = new Date(dt.getTime() + offset*60*1000);
    console.log(easternDate); //Gives Mon Mar 21 2016 23:00:00 GMT+0530 (IST)
    const today = easternDate.toISOString().slice(0, 10).replace('T', ' ');
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