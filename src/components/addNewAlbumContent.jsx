import React from "react";

const Button = ({ label, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`py-[12px] px-[20px]  rounded-[8px] border-solid border-[1px] ${borderColor} ${backgroundColor} ${textColor} text-mdText font-regular`}
    >
      {label}
    </button>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-smDisplay">Create New Podcast</h1>
      <div className="flex gap-[12px]">
        <Button label="Cancel" borderColor="border-primaryBorder_Dark" />
        <Button
          label="Save"
          textColor="text-darkText_Dark"
          borderColor="border-warningSurface_Dark"
          backgroundColor="bg-warningSurface_Dark"
        />
      </div>
    </header>
  );
};

const TextInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText">{label}</span>
      <input type="text" placeholder={placeholder} className="border-[1px] border-gray-300 p-[8px] rounded-[4px]" />
    </label>
  );
};

const CheckboxInput = ({ label }) => {
  return (
    <label className="flex items-center gap-[8px]">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-regular text-mdText">{label}</span>
    </label>
  );
};

const TextAreaInput = ({ label, placeholder }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText">{label}</span>
      <textarea  placeholder={placeholder} className="border-[1px] border-gray-300 p-[8px] rounded-[4px]" />
    </label>
  );
};

const Form = () => {
  return (
    <form className="flex flex-col gap-[20px]">
      <TextInput label="Title" placeholder="Enter station title" />
      <TextInput label="Description link" placeholder="Enter website URL" />
      <TextAreaInput label="Description" placeholder="Enter station description"/>
      <CheckboxInput label="Status" />
      <CheckboxInput label="Premium" />
      <CheckboxInput label="Make Default" />
      <CheckboxInput label="Visible on the Portal" />
    </form>
  );
};

const FormSection = () => {
  return (
    <section className="flex gap-[20px]">
      <Form />
    </section>
  );
};

export default function addNewAlbumContent() {
  return (
    <div className="flex flex-col gap-[36px]">
      <Header />
      <FormSection />
    </div>
  );
}
 