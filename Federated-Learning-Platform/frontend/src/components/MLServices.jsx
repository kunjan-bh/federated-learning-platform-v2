import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const MLServices = () => {
    const [heartDisease, setHeartDisease] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [genHlth, setGenHlth] = useState("");
    const [highBP, setHighBP] = useState("");
    const [highChol, setHighChol] = useState("");
    const [age, setAge] = useState("");
    const [cholCheck, setCholCheck] = useState("");
    const [hvyAlcoholConsump, setHvyAlcoholConsump] = useState("");
    const [sex, setSex] = useState("");
    const [income, setIncome] = useState("");
    const [heartDiseaseValue, setHeartDiseaseValue] = useState("");
    const [bmi, setBmi] = useState("");
    const [physHlth, setPhysHlth] = useState("");
    const[diabetesReply, setDiabetesReply] = useState("");
    const handleSubmitDiabetes = async (e) => {
        e.preventDefault();
        const formdata = {
            genHlth: genHlth,
            highBP: highBP, 
            highChol: highChol,
            age: age,
            cholCheck: cholCheck,
            hvyAlcoholConsump: hvyAlcoholConsump,
            sex: sex,
            income: income,
            heartDiseaseValue: heartDiseaseValue,
            bmi: bmi,
            physHlth: physHlth
        }
        console.log(formdata);
        try {
            const response = await axios.post("http://127.0.0.1:8000/diabetes/", formdata);
            console.log(response.data.probability);
            toast.success("Diabetes prediction successful!");
            setDiabetesReply(response.data.diabetes);
        }
        catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again.");
        }

    }

    return (
        <div id="mlservices" className="mlservice">
            <div className="mlservice-container">
                <div className="mlservice-content">
                    <div className="mlservice-content-title">
                        <h2>Healthcare Prediction Models (Standard ML)</h2>
                    </div>
                    <div className="mlservice-content-description">
                        <p>Review key cardiovascular factors — such as blood pressure, cholesterol, and lifestyle traits — and tap to explore your heart disease risk analysis.</p>

                    </div>
                    <div className="count-of-models">
                        <div className="count">
                            <span>2+</span>
                            <div className="count-span">
                                <p>Health Domains </p>
                            </div>
                        </div>
                        <div className="count">
                            <span>2</span>

                            <div className="count-span">
                                <p>ML Models Available</p>
                            </div>
                        </div>
                        <div className="count">
                            <span>1,200+</span>
                            <div className="count-span">
                                <p>Predictions Made</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mlservice-area">
                    <div className={heartDisease ? "mlservice-subarea-heart" : "mlservice-subarea"} onClick={() => [setHeartDisease(true), setDiabetes(false)]}>
                        <div className="prediction_title">
                            <h2>Heart Disease Prediction</h2>
                        </div>
                        <div className="prediction_description">
                            <p>This model analyzes key cardiovascular indicators — such as blood pressure, cholesterol levels, chest pain type, and lifestyle traits — to estimate whether a patient is at risk of heart disease. Review key cardiovascular factors — such as blood pressure, cholesterol, and lifestyle traits — and <span>tap to explore your heart disease risk analysis.</span></p>


                        </div>
                        <div className="close-btn">
                            <button className={heartDisease ? "button-close" : "button-close-hidden"} onClick={(e) => {
                                e.stopPropagation();
                                setHeartDisease(false)
                            }
                            }>
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={diabetes ? "mlservice-subarea-diabetes" : "mlservice-subarea"} onClick={() => [setDiabetes(true), setHeartDisease(false)]}>
                        <div className="prediction_title">
                            <h2>Diabetes Prediction</h2>
                        </div>
                        <div className="prediction_description">
                            <p>This model evaluates factors like glucose levels, BMI, age, pregnancy count, and insulin resistance markers to assess whether an individual is likely to have diabetes. Analyze indicators like glucose levels, BMI, age, and insulin resistance markers. <span>Tap to view your personalized diabetes risk evaluation.</span></p>
                        </div>
                        <div className={diabetes ? "prediction-form" : "close"}>
                            <form action="" className="diabetes-prediction" onSubmit={handleSubmitDiabetes}>

                                {/* GenHlth */}
                                <label>General Health</label>
                                <select value={genHlth} onChange={(e) => setGenHlth(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="1">Excellent</option>
                                    <option value="2">Very Good</option>
                                    <option value="3">Good</option>
                                    <option value="4">Fair</option>
                                    <option value="5">Poor</option>
                                </select>

                                {/* BMI */}
                                <label>BMI</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="Enter your BMI"
                                    value={bmi}
                                    onChange={(e) => setBmi(e.target.value)}
                                    required
                                />

                                {/* Age */}
                                <label>Age Group</label>
                                <select value={age} onChange={(e) => setAge(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="1">18-24</option>
                                    <option value="2">25-29</option>
                                    <option value="3">30-34</option>
                                    <option value="4">35-39</option>
                                    <option value="5">40-44</option>
                                    <option value="6">45-49</option>
                                    <option value="7">50-54</option>
                                    <option value="8">55-59</option>
                                    <option value="9">60-64</option>
                                    <option value="10">65-69</option>
                                    <option value="11">70-74</option>
                                    <option value="12">75-79</option>
                                    <option value="13">80+</option>
                                </select>

                                {/* HighBP */}
                                <label>High Blood Pressure</label>
                                <select value={highBP} onChange={(e) => setHighBP(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>

                                {/* HighChol */}
                                <label>High Cholesterol</label>
                                <select value={highChol} onChange={(e) => setHighChol(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>

                                {/* CholCheck */}
                                <label>Cholesterol Checked</label>
                                <select value={cholCheck} onChange={(e) => setCholCheck(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>

                                {/* HvyAlcoholConsump */}
                                <label>Heavy Alcohol Consumption</label>
                                <select value={hvyAlcoholConsump} onChange={(e) => setHvyAlcoholConsump(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>

                                {/* Sex */}
                                <label>Gender</label>
                                <select value={sex} onChange={(e) => setSex(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">Female</option>
                                    <option value="1">Male</option>
                                </select>

                                {/* Income */}
                                <label>Income</label>
                                <select value={income} onChange={(e) => setIncome(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="1">$10k</option>
                                    <option value="2">$10k–15k</option>
                                    <option value="3">$15k–20k</option>
                                    <option value="4">$20k–25k</option>
                                    <option value="5">$25k–35k</option>
                                    <option value="6">$35k–50k</option>
                                    <option value="7">$50k–75k</option>
                                    <option value="8">$75k–100k</option>
                                </select>

                                {/* HeartDiseaseorAttack */}
                                <label>Heart Disease / Attack</label>
                                <select value={heartDiseaseValue} onChange={(e) => setHeartDiseaseValue(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>

                                {/* PhysHlth */}
                                <label>Poor Physical Health Days (last 30)</label>
                                <input
                                    type="number"
                                    step="1"
                                    placeholder="0–30"
                                    value={physHlth}
                                    onChange={(e) => setPhysHlth(e.target.value)}
                                    required
                                />

                                <button type="submit" className="predict-btn">Predict</button>
                            </form>

                        </div>
                        <div className={diabetes ? "diabetes-reply" : "close"}>
                            {diabetesReply == "" && (
                                <div className="diabetes-result normal">
                                    <h3>Analyse Your Data</h3>
                                    <p>Based on the data you provided, we have analysed your health indicators and found that you are at a normal risk of developing diabetes. However, it is always a good idea to maintain a healthy lifestyle and to continue monitoring your health.</p>
                                </div>
                            )}
                            {diabetesReply === 0 && (
                                <div className="diabetes-result safe">
                                    <h3>No Diabetes Risk Detected</h3>
                                    <p>Your current health indicators show no significant signs of diabetes risk. Maintain a balanced diet, stay active, and continue healthy habits to ensure long-term wellbeing.</p>
                                </div>
                            )}

                            {diabetesReply === 1 && (
                                <div className="diabetes-result risk">
                                    <h3>Potential Diabetes Risk</h3>
                                    <p>Your profile indicates a higher likelihood of diabetes development. Consider improving lifestyle patterns, reducing excess sugar intake, increasing physical activity, and scheduling routine medical checkups.</p>
                                </div>
                            )}
                        </div>

                        <div className="close-btn">
                            <button className={diabetes ? "button-close" : "button-close-hidden"} onClick={(e) => {
                                e.stopPropagation();
                                setDiabetes(false);
                                setDiabetesReply("");
                            }
                            }>
                                <svg className="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MLServices;