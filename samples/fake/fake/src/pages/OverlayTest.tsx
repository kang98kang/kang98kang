import { Title, Div, Icons, Overlay } from "../components";

export default function OverlayTest() {
  return (
    <section className="mt-4">
      <Title>CopyMe</Title>
      <Overlay>
        <Div className="relative flex items-center justify-center p-8 bg-white h-1/2">
          <Div className="absolute" right="1rem" top="1rem">
            <Icons name="close" className="text-gray-500"></Icons>
          </Div>
          <p className="text-5xl">modal dialog box</p>
        </Div>
      </Overlay>
    </section>
  );
}
