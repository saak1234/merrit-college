interface GlobalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
  }
  
  const GlobalButton = ({ 
    children, 
    className = "", 
    disabled,
    type = "button",
    onClick,
    onSubmit,
    onReset,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,
    name,
    value,
    autoFocus,
    ...props
  }: GlobalButtonProps) => {
    return (
      <button
        {...props}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onSubmit={onSubmit}
        onReset={onReset}
        form={form}
        formAction={formAction}
        formEncType={formEncType}
        formMethod={formMethod}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
        name={name}
        value={value}
        autoFocus={autoFocus}
        className={`
          px-6 
          py-3 
          bg-green-700
          text-white 
          font-semibold 
          rounded-lg 
          hover:bg-green-900
          hover:text-white
          transition-all 
          duration-300 
          shadow-md 
          hover:shadow-lg 
          flex 
          items-center 
          justify-center 
          gap-2
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:bg-green-800
          disabled:hover:shadow-md
          focus:outline-none  
          focus:ring-offset-2
          active:transform
          active:scale-95
          ${className}
        `}
      >
        {children}
      </button>
    );
  };
  
  export default GlobalButton;
  