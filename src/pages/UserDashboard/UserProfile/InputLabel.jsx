 
const InputLabel = ({ text }) => {
    return (
        <label className="font-medium">
            {text}<span className="text-primary"> *</span>
        </label>
    );
};

export default InputLabel;