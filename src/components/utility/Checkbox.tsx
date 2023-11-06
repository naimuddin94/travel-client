interface ICheckboxProps {
  required: boolean;
}

const Checkbox = ({ required }: ICheckboxProps) => {
  return (
    <input
      required={required}
      type="checkbox"
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
    />
  );
};

export default Checkbox;
