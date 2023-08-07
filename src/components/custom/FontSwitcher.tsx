import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropDownMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FontSwitcher = () => {
  return (
    <Select defaultValue="sans">
      <SelectTrigger className="w-[120px] border-none focus:ring-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="body-md font-bold">
        <SelectItem className="font-sans" value="sans">
          Sans serif
        </SelectItem>
        <SelectItem className="font-serif" value="serif">
          Serif
        </SelectItem>
        <SelectItem className="font-mono" value="mono">
          Mono
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FontSwitcher;
