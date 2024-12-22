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
        <div className="content_body">
          {/* Calendar */}
          <Calendar type={calendarType} />
          <Controls />
        </div>
      </div>
    </>
  );
}

export default App;
