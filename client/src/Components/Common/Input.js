const Input = ({placeholder,name,id,type,onChange}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      id={id}
      type={type}
      className="input"
      onChange={onChange}
      required
    />
  );
};

export default Input;
