import React, { useState } from 'react';

export const User = () => {
  const [value, setValue] = useState([]);
  const options = [
    { uses: 108344, label: "Afghanistan" },
    { uses: 95484, label: "Aland Islands" },
    { uses: 3692, label: "Albania" },
    { uses: 31531, label: "Algeria" },
    { uses: 121024, label: "American Samoa" },
    { uses: 21511, label: "Andorra" },
    { uses: 51326, label: "China" },
    { uses: 31549, label: "Cuba" },
    { uses: 73029, label: "Czech Republic" },
    { uses: 99394, label: "Denmark" },
    { uses: 4872, label: "Dominica" },
    { uses: 53051, label: "Egypt" },
    { uses: 37776, label: "Finland" },
    { uses: 5413, label: "France" },
    { uses: 44278, label: "Georgia" },
    { uses: 96323, label: "Germany" },
    { uses: 71870, label: "Greece" },
    { uses: 24311, label: "Guyana" },
    { uses: 53071, label: "Hungary" },
    { uses: 27773, label: "India" },
    { uses: 99141, label: "Iran, Islamic Republic of" },
    { uses: 90378, label: "Iraq" },
    { uses: 121681, label: "Italy" },
    { uses: 96840, label: "Jamaica" },
    { uses: 19092, label: "Japan" },
    { uses: 59982, label: "Jersey" },
    { uses: 30963, label: "Macedonia, The Former Yugoslav Republic of" },
    { uses: 103033, label: "Maldives" },
    { uses: 27605, label: "Mali" },
    { uses: 111201, label: "Monaco" },
    { uses: 84402, label: "Mongolia" },
    { uses: 29725, label: "Namibia" },
    { uses: 5481, label: "Niger" },
    { uses: 64960, label: "Norfolk Island" },
    { uses: 97096, label: "Northern Mariana Islands" },
    { uses: 24970, label: "Palestinian Territory, Occupied" },
    { uses: 118153, label: "Panama" },
    { uses: 108538, label: "Poland" },
    { uses: 58283, label: "Qatar" },
    { uses: 119992, label: "Reunion" },
    { uses: 66712, label: "Romania" },
    { uses: 111883, label: "Russian Federation" },
    { uses: 9851, label: "Saudi Arabia" },
    { uses: 47944, label: "Singapore" },
    { uses: 58096, label: "Slovakia" },
    { uses: 89604, label: "Slovenia" },
    { uses: 11137, label: "Spain" },
    { uses: 40460, label: "Sweden" },
    { uses: 40056, label: "Syrian Arab Republic" },
    { uses: 96207, label: "Tajikistan" },
    { uses: 56024, label: "Tunisia" },
    { uses: 21939, label: "Turkey" },
    { uses: 18304, label: "United Arab Emirates" },
    { uses: 117482, label: "United Kingdom" },
    { uses: 69822, label: "United States" },
    { uses: 96225, label: "Uruguay" },
    { uses: 27078, label: "Uzbekistan" },
    { uses: 52640, label: "Vanuatu" },
    { uses: 31953, label: "Venezuela" },
    { uses: 77079, label: "Viet Nam" }
  ]

  const createTag = (value) => {
    return { label: value, uses: 0 };
  };

  const displayUses = (value) =>
    value < 1000 ? value : Math.ceil(value / 100) / 10 + "K";

  const demoTags = () => {
    if (value.length === 0) {
      return "No tags";
    }
    return value.join(",");
  };

  const handleChange = (e) => {
    const selectedOptions= Array.from(e.target.selectedOptions, (options)=> options.value);
    // const newValue= [...value, ...selectedOptions];
    setValue(selectedOptions);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option>Select Batch</option>
        {options.map((option, i) => (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        {value.map((selectedOption) => (
          <div key={selectedOption}>
            <span className="custom-option__label">{selectedOption}</span>
            <span className="custom-option__uses">
              {displayUses(options.find((o) => o.label === selectedOption).uses)} video
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};