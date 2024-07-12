import { InputComponent } from "../utils/InputComponent";

const Subprofession = (props) => {
  return (
    <div
      className="subprofession ml-5"
      hidden={props.hiddenStat}
    >
      <InputComponent
        type={"checkbox"}
        name={props.children}
        className={"lowercase"}
        checked={false}
        onChange
      />
    </div>
  );
};

export default Subprofession;
