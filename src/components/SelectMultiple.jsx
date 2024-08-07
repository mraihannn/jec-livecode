import Select from "react-select";

const SelectMultiple = () => {
  const options = [
    { value: "Operation Theatre 1", label: "Operation Theatre 1" },
    { value: "Operation Theatre 2", label: "Operation Theatre 2" },
    { value: "Operation Theatre 3", label: "Operation Theatre 3" },
    { value: "Lasik", label: "Lasik" },
  ];

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[options[0], options[1]]}
      isMulti
      options={options}
      // styles={colourStyles}
    />
  );
};

export default SelectMultiple;
