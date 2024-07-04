// //event 처리
// import EventListner from "./pages/EventListener";
// import Onclick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispatchEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopPropagation";
// import VariousInput from "./pages/VariousInputs";
// import OnChange from "./pages/OnChange";
// import FileInput from "./pages/FileInput";
// import DragDrop from "./pages/DragDrop";
// import FileDrop from "./pages/FileDrop";
// // import * as PP from "./pages";

// export default function App() {
//   return (
//     <div>

//       <EventListner />
//       <Onclick />
//       <ReactOnClick />
//       <DispatchEvent />
//       <EventBubbling />
//       <StopPropagation />
//       <VariousInput />
//       <OnChange />
//       <FileInput />
//       <DragDrop />
//       <FileDrop />
//     </div>
//   );
// }

import Bootstrap from "./pages/BootStrap";
import Icons from "./pages/Icons";
import "./index.css";
//  import Style from './pages/Style';
//  import UsingIcon from './pages/UsingIcon';
//  import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass'

export default function App() {
  return (
    <div>
      {/* <UsingIconWithCSSClass/>
      <UsingIcon/>
      <Style/> */}
      <Icons />
      <Bootstrap />
    </div>
  );
}
