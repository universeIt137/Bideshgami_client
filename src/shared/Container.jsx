 /* eslint-disable react/prop-types */
  
const Container = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto w-full px-5 xl:px-24">
            {children}
        </div>
    );
};

export default Container;