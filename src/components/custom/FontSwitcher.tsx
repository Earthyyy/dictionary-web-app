import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

const FontSwitcher = () => {
  return (
    <Select defaultValue="sans">
      <SelectTrigger className="w-fit gap-x-4 border-none ring-0 focus:ring-0 text-secondary">
        <SelectValue />
      </SelectTrigger>
      {/* TODO: Fix SelectContent Background */}
      <SelectContent>
        <SelectItem className="font-sans body-md font-bold" value="sans">
          Sans serif
        </SelectItem>
        <SelectItem className="font-serif body-md font-bold" value="serif">
          Serif
        </SelectItem>
        <SelectItem className="font-mono body-md font-bold" value="mono">
          Mono
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FontSwitcher;
