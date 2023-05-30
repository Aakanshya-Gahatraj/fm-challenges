/* eslint-disable react/prop-types */
import listIcon from "/src/assets/icon-list.svg";

function Icon(props) {
  return (
    <div>
      <img
        height={props.height}
        width={props.width}
        src={listIcon}
        alt="List Icon"
      />
    </div>
  );
}

export default Icon;
