import { Title } from "../components";
import * as D from "../data";

const sentence = D.randomSentence(10);

export default function PaddingTest() {
  return (
    <section>
      <Title>PaddingTest</Title>
      <div className="border-3 border-orange-900">
        <div className="text-white border-1 bg-sky-600">
          <p>{sentence}</p>
        </div>
        <div className="p-8  border-1 text-white bg-orange-600">
          <p>{sentence}</p>
        </div>
        <div className=" h-full w-60 m-2 p-2 border-1 text-white bg-slate-800">
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
          연습용 칸 따로 만들기 연습용 칸 따로 만들기 연습용 칸 따로 만들기
        </div>
      </div>
    </section>
  );
}
