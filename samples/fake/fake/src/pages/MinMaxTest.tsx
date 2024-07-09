import { Div, Title } from "../components";
import * as D from "../data";

export default function MinMaxTest() {
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>MinMaxTest</Title>
      <div className="p-4 bg-gray-300">
        <Div src={D.randomImages(800, 300)} className="bg-cover">
          <Div className="w-1/2 h-80 bg-blue-500"/>
        </Div>
      </div>
    </section>
  )
}
