import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PredictPage = () => {
    const [formData, setFormData] = useState({
        MonsoonIntensity: "",
        TopographyDrainage: "",
        RiverManagement: "",
        Deforestation: "",
        Urbanization: "",
        ClimateChange: "",
        DamsQuality: "",
        Siltation: "",
        AgriculturalPractices: "",
        Encroachments: "",
        IneffectiveDisasterPreparedness: "",
        DrainageSystems: "",
        CoastalVulnerability: "",
        Landslides: "",
        Watersheds: "",
        DeterioratingInfrastructure: "",
        PopulationScore: "",
        WetlandLoss: "",
        InadequatePlanning: "",
        PoliticalFactors: "",
    });

    const [result, setResult] = useState(null);
    const [submitTrigger, setSubmitTrigger] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitTrigger(true);
    };

    useEffect(() => {
        if (submitTrigger) {
            const sendPrediction = async () => {
                try {
                    const response = await axios.post("https://floodapi.onrender.com/predict", formData);
                    setResult(response.data);
                    toast.success("Successfully Predicted!");
                } catch (error) {
                    console.error("There was an error!", error.response ? error.response.data : error.message);
                    toast.error("Prediction failed!");
                } finally {
                    setLoading(false);
                    setSubmitTrigger(false);
                }
            };

            sendPrediction();
        }
    }, [submitTrigger, formData]);

    const handleCloseModal = () => {
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 flex flex-col items-center p-4 relative">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Flood Prediction Form</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.keys(formData).map((key) => (
                        <div key={key} className="mb-4">
                            <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                                {key.replace(/([A-Z])/g, " $1")}
                            </label>
                            <input
                                type="number"
                                name={key}
                                id={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                            />
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Predicting..." : "Predict"}
                </button>
            </form>

            {loading && (
                <div className="mt-4 text-center">
                    <div className="loader border-t-4 border-blue-600 rounded-full w-8 h-8 animate-spin"></div>
                </div>
            )}

            {result && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
                >
                    <div
                        className={`p-6 rounded-lg shadow-lg relative max-w-md w-full transform transition-transform duration-500 ${result.prediction === 1 ? "bg-red-600 text-white" : "bg-green-500 text-white"
                            }`}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-200 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-bold text-center">Prediction Result</h2>
                        <p className="text-center mt-2">
                            {result.prediction === 1 ? "Flood is Likely!" : "No Flood Expected"}
                        </p>
                        <p className="text-center mt-1">
                            Probability: {result.prediction_probability.join(", ")}
                        </p>
                    </div>
                </div>
            )}

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            {/* Inline styles for modal and animations */}
            <style jsx="true">{`
                .backdrop-blur-sm {
                    backdrop-filter: blur(10px);
                }
            `}</style>
        </div>
    );
};

export default PredictPage;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PredictPage = () => {
//     const [formData, setFormData] = useState({
//         MonsoonIntensity: "",
//         TopographyDrainage: "",
//         RiverManagement: "",
//         Deforestation: "",
//         Urbanization: "",
//         ClimateChange: "",
//         DamsQuality: "",
//         Siltation: "",
//         AgriculturalPractices: "",
//         Encroachments: "",
//         IneffectiveDisasterPreparedness: "",
//         DrainageSystems: "",
//         CoastalVulnerability: "",
//         Landslides: "",
//         Watersheds: "",
//         DeterioratingInfrastructure: "",
//         PopulationScore: "",
//         WetlandLoss: "",
//         InadequatePlanning: "",
//         PoliticalFactors: "",
//     });

//     const [result, setResult] = useState(null);
//     const [submitTrigger, setSubmitTrigger] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setSubmitTrigger(true);
//     };

//     useEffect(() => {
//         if (submitTrigger) {
//             const sendPrediction = async () => {
//                 try {
//                     const response = await axios.post("http://127.0.0.1:8000/predict", formData);
//                     setResult(response.data);
//                     toast.success("Successfully Predicted!");
//                 } catch (error) {
//                     console.error("There was an error!", error.response ? error.response.data : error.message);
//                     toast.error("Prediction failed!");
//                 } finally {
//                     setLoading(false);
//                     setSubmitTrigger(false);
//                 }
//             };

//             sendPrediction();
//         }
//     }, [submitTrigger, formData]);

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center p-4">
//             <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
//                 <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Flood Prediction Form</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {Object.keys(formData).map((key) => (
//                         <div key={key} className="mb-4">
//                             <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
//                                 {key.replace(/([A-Z])/g, " $1")}
//                             </label>
//                             <input
//                                 type="number"
//                                 name={key}
//                                 id={key}
//                                 value={formData[key]}
//                                 onChange={handleChange}
//                                 className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
//                     disabled={loading}
//                 >
//                     {loading ? "Predicting..." : "Predict"}
//                 </button>
//             </form>

//             {loading && (
//                 <div className="mt-4 text-center">
//                     <div className="loader border-t-4 border-blue-600 rounded-full w-8 h-8 animate-spin"></div>
//                 </div>
//             )}

//             {result && (
//                 <div
//                     className={`mt-6 w-full max-w-md p-4 text-white rounded-lg shadow-lg transform transition-transform duration-500 ${result.prediction === 1 ? "bg-red-600 animate-bounce" : "bg-green-500 animate-pulse"
//                         }`}
//                 >
//                     <h2 className="text-xl font-bold text-center">Prediction Result</h2>
//                     <p className="text-center mt-2">{result.prediction === 1 ? "Flood is Likely!" : "No Flood Expected"}</p>
//                     <p className="text-center mt-1">Probability: {result.prediction_probability.join(", ")}</p>
//                 </div>
//             )}

//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//         </div>
//     );
// };

// export default PredictPage;
