import { Search } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

type Input = {
  search: string;
};

const SearchField: FC<Props> = ({ setSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit = (data: Input) => {
    setSearch(data.search);
  };

  return (
    <div className="mb-6 tablet:mb-[2.5rem] desktop:mb-[2.8125rem]">
      <form className="relative mb-1" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={`${
            errors.search
              ? "border-error focus:border-error"
              : "focus:border-primary border-inputColor hover:border-primary"
          } flex-1 border  outline-none  font-bold body-xs placeholder:font-bold placeholder:text-opacity-25  text-secondary bg-inputColor py-[0.875rem] pl-6 pr-11 rounded-2xl w-full  `}
          placeholder="Search for any word..."
          {...register("search", { required: true })}
        />
        <button type="submit">
          <Search className="text-primary w-4 h-4 absolute right-6 bottom-1/2 translate-y-1/2" />
        </button>
      </form>
      {/* Error message */}
      {errors.search && (
        <p className="text-error body-md font-normal">
          Whoops, can’t be empty…
        </p>
      )}
    </div>
  );
};

export default SearchField;
