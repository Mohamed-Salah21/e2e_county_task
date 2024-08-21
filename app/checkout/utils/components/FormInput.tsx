import { ChangeEvent, FocusEvent } from "react";

type Props = {
  placeholder: string;
  error: string | undefined;
  register: {
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    ref: (...args: any[]) => void;
  };
};

export default function FormInput({ placeholder, error, register }: Props) {
  return (
    <div className="relative mb-3">
      <input
        type="text"
        className={`w-full rounded-lg p-4 pe-12 text-sm  outline-none border ${
          error ? `border-dangerous` : ``
        }`}
        placeholder={placeholder}
        {...register}
      />
      {error ? (
        <p className="text-start text-dangerous text-sm">{error}</p>
      ) : null}
    </div>
  );
}
