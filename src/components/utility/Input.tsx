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
      <label className="mb-2 text-sm font-medium">{children}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-500 sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-primary-600 block w-full p-2.5 bg-pink-50 placeholder-gray-400"
        required
      />
    </div>
  );
};

export default Input;
