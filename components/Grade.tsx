import { KeyValueGrade } from "models/grade";

interface GradeProps {
    data: KeyValueGrade;
}

export default function Grade({ data }: GradeProps) {
    return (
        <div className=" flex flex-row justify-center">
            <span>%</span> {Math.floor(data?.calculated * 100)} سهم الکامپ از این بستر
        </div>
    );
}
