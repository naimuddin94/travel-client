interface IErrorProps {
  children: string;
}

const ErrorAlert = ({ children }: IErrorProps) => {
  return (
    <div className="bg-red-200 text-center border border-red-400 text-red-700 px-4 py-3 rounded">
      {children}
    </div>
  );
};

export default ErrorAlert;
