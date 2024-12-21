import Calendar from "./components/Calendar/Calendar";
import useControlsStore from "./store/useControlsStore";
import classnames from "classnames";

function App() {
  const { calendarType } = useControlsStore();

  return (
    <>
      <div className={classnames("container", calendarType)}>
        <div className="content_body">
          {/* Calendar */}
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
