import type { DiaryProps } from "./types/diary";

const Diary = (props: DiaryProps) => {
    return <div>
        <h2>{props.date}</h2>
        <p>{props.content}</p>
    </div>;
};

export default Diary;
