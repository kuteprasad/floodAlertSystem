import React, { useState } from 'react';

const FloodPredictionForm = () => {
  const [formData, setFormData] = useState({
    MonsoonIntensity: 8,
    TopographyDrainage: 5,
    RiverManagement: 6,
    Deforestation: 7,
    Urbanization: 8,
    ClimateChange: 7,
    DamsQuality: 5,
    Siltation: 6,
    AgriculturalPractices: 7,
    Encroachments: 5,
    IneffectiveDisasterPreparedness: 6,
    DrainageSystems: 5,
    CoastalVulnerability: 6,
    Landslides: 3,
    Watersheds: 5,
    DeterioratingInfrastructure: 7,
    PopulationScore: 8,
    WetlandLoss: 6,
    InadequatePlanning: 5,
    PoliticalFactors: 4,
    FloodProbability: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = () => {
    alert('Flood prediction is being processed...');
    // Prediction logic here
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-700 font-bold mb-4">Enter Available Parameters</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.keys(formData).map((variable) =>
          variable !== 'FloodProbability' && (
            <div key={variable}>
              <label className="block text-gray-700 font-bold mb-2">
                {variable.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="number"
                name={variable}
                value={formData[variable]}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md"
              />
            </div>
          )
        )}
      </div>
      <button
        onClick={handlePredict}
        className="bg-blue-600 text-white p-3 rounded-lg mt-4"
      >
        Predict Flood
      </button>
      <button
        className="bg-blue-600 text-white p-3 rounded-lg mt-4 ml-6"
      >
        Notify Authorities
      </button>
    </div>
  );
};

export default FloodPredictionForm;
