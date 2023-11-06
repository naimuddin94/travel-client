interface IInputProps {
  children: string;
  type?: string;
  name?: string;
  placeholder?: string;
}

const Input = ({
  children,
  type = "text",
  name = "",
  placeholder = "",
}: IInputProps) => {
  return (
    <div>
      <label className="mb-2 text-sm font-medium text-white">{children}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
};

export default Input;
