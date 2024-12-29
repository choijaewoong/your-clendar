import Calendar from "./components/Calendar/Calendar";
import Controls from "./components/Controls/Controls";
import InputYear from "./components/InputYear/InputYear";
import useControlsStore from "./store/useControlsStore";
import classnames from "classnames";

function App() {
  const { calendarType } = useControlsStore();

  return (
    <>
      <div className={classnames("container", calendarType)}>
        <div className="content_top">
          <div className="top_inner">
            {/* Input Year */}
            <InputYear />
          </div>
        </div>
        <div className="content_body">
          {/* Calendar */}
          <Calendar />
          <Controls />
        </div>
      </div>
    </>
  );
}

export default App;
