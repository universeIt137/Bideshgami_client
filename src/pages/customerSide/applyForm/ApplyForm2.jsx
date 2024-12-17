import React, { useState } from 'react';
import FormComponents from './components/FormComponents';

const ApplyForm2 = () => {
    window.scrollTo(0, 0);

    // Manage multiple form states in an array
    const [forms, setForms] = useState([
        {
            name: '',
            phoneNumber: '',
            email: '',
            passport: '',
            from: '',
            to: '',
            due: '',
            center: '',
            service: '',
            total: '',
        },
    ]);

    const labelStyle =
        'input input-bordered flex items-center gap-2 relative border-2 rounded-md border-gray-600 h-[36px]';

    // Handle changes in a specific form
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedForms = [...forms];
        updatedForms[index] = {
            ...updatedForms[index],
            [name]: value,
        };
        setForms(updatedForms);
    };

    // Handle form submission for a specific form
    const handleSubmit = (e, index) => {
        e.preventDefault();
        console.log(`Form ${index + 1} Data:`, forms[index]);
        // Optionally reset the specific form
        const updatedForms = [...forms];
        updatedForms[index] = {
            name: '',
            phoneNumber: '',
            email: '',
            passport: '',
            from: '',
            to: '',
            due: '',
            center: '',
            service: '',
            total: '',
        };
        setForms(updatedForms);
    };

    // Add a new form to the array
    const addForm = () => {
        setForms([
            ...forms,
            {
                name: '',
                phoneNumber: '',
                email: '',
                passport: '',
                from: '',
                to: '',
                due: '',
                center: '',
                service: '',
                total: '',
            },
        ]);
    };

    return (
        <>
            <p className="text-4xl text-center font-bold my-8">
                Apply <span className="text-primary">Form</span>
            </p>

            <div className="  p-2 w-1/2  mx-auto  mb-10 rounded-md">
                <section className="p-5">
                    {forms.map((formData, index) => (
                        <div key={index} className="my-10  rounded-lg">
                            <FormComponents
                                
                                handleSubmit={(e) => handleSubmit(e, index)}
                                formData={formData}
                                handleChange={(e) => handleChange(index, e)}
                                labelStyle={labelStyle}
                            />
                        </div>

                    ))}

                    {/* Add More button */}
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={addForm}
                    >
                        Add More
                    </button>
                </section>
            </div>
        </>
    );
};

export default ApplyForm2;
