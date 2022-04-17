type InputProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange, value }: InputProps) => {
	return <input type='text' onChange={onChange} value={value} />;
};

export default Input;
