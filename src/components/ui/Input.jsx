export const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-sm mb-3">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full  border border-neutral-800 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
      />
    </div>
  );
};
