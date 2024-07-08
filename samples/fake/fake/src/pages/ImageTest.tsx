import { Title, Subtitle, Div } from "../components";
import * as D from "../data";

const src = D.randomImages(3000, 3000);

export default function ImageTest() {
  return (
    <section className="mt-4 ">
      <Title>ImageTest</Title>
      <img
        src={src}
        className="bg-gray-300 justify-contents-center"
        width={400}
        height={400}
      />
      <Div className="mt-4 bg-gray-300 h-80" src={src}>
        <Subtitle className="text-gray-400">Some Text here</Subtitle>
      </Div>
    </section>
  );
}
