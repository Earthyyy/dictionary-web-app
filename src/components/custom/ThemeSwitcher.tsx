import { Switch } from "../ui/Switch";
import { useState } from "react";
import { FC } from "react";

interface Props {
  onSwitch: () => void;
}

const ThemeSwitcher: FC<Props> = ({ onSwitch }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex gap-5 items-center">
      <Switch
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-tertiary"
        checked={checked}
        onCheckedChange={(value) => {
          setChecked(value);
          onSwitch();
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={checked ? "#A445ED" : "#838383"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

export default ThemeSwitcher;
