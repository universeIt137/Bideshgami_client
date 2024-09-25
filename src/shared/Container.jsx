 /* eslint-disable react/prop-types */
  
const Container = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto w-full px-5">
            {children}
        </div>
    );
};

export default Container;