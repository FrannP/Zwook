import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../components/toggleButton";
import checkIcon from "../assets/icons/newAlbum/check.svg";
import cloudUploadIcon from "../assets/icons/newAlbum/cloud-upload.svg";
import deleteIcon from "../assets/icons/newAlbum/delete-1.svg";
import editIcon from "../assets/icons/newAlbum/edit-4.svg";

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  hoverColor,
  hoverBorder,
  onClick,
}) => {
  return (
    <input
      type="button"
      className={`py-[12px] px-[20px] rounded-[8px] border-solid border-[1px] ${borderColor} ${backgroundColor} ${textColor} text-mdText font-regular hover:cursor-pointer ${hoverColor} ${hoverBorder} transition duration-500 ease-in-out`}
      value={label}
      onClick={onClick}
    />
  );
};

const Header = ({ onSave }) => {
  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-smDisplay text-primaryText_Light dark:text-primaryText_Dark">
        Create New Podcast
      </h1>
      <div className="flex gap-[12px] ">
        <Button
          label="Cancel"
          textColor="dark:text-primaryText_Dark text-primaryText_Light hover:text-primaryText_Light"
          borderColor="dark:border-primaryBorder_Dark border-primaryBorder_Light"
          hoverColor="dark:hover:bg-primaryActiveSurface_Dark hover:bg-primaryActiveSurface_Light"
        />
        <Button
          label="Save"
          textColor="dark:text-darkText_Dark text-darkText_Light"
          borderColor="dark:border-warningSurface_Dark border-warningSurface_Light"
          backgroundColor="dark:bg-warningSurface_Dark bg-warningSurface_Light"
          hoverBorder="dark:hover:border-brandHoverSurface_Dark hover:border-brandHoverSurface_Light"
          hoverColor="hover:bg-brandHoverSurface_Light dark:hover:bg-brandHoverSurface_Dark"
          onClick={onSave}
        />
      </div>
    </header>
  );
};

const TextInput = ({ label, placeholder, value, onChange, name }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="text-mdText font-regular placeholder:text-primaryPlaceholderText_Light dark:placeholder:text-primaryPlaceholderText_Dark text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Light dark:border-primaryBorder_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        name={name}
      />
    </label>
  );
};

const CheckboxInput = ({ label, checked, onChange, name }) => {
  const handleCheckboxChange = () => {
    onChange(name, !checked);
  };

  return (
    <label className="flex items-center gap-[8px]">
      <div className="relative">
        <input
          type="checkbox"
          className={`appearance-none w-[16px] h-[16px] border-[1px] rounded-[4px] hover:cursor-pointer transition duration-500 ease-in-out ${
            checked
              ? "bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark"
              : "bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark"
          }`}
          checked={checked}
          onChange={handleCheckboxChange}
          name={name}
        />
        {checked && (
          <img
            src={checkIcon}
            alt="Checked"
            className="absolute left-[50%] -ml-[5px] -mt-[6.5px] top-[50%] w-[10px] h-[10px] filter invert hover:cursor-pointer"
          />
        )}
      </div>
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
    </label>
  );
};

const TextAreaInput = ({ label, placeholder, value, onChange, name }) => {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        className="text-mdText font-regular border-[1px] p-[8px] rounded-[4px] h-[151px] placeholder:text-primaryPlaceholderText_Light dark:placeholder:text-primaryPlaceholderText_Dark text-primaryPlaceholderText_Light dark:text-primaryPlaceholderText_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark resize-none focus:outline-none"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        name={name}
      />
    </label>
  );
};

const Form = ({ podcast, onChange }) => {
  return (
    <form className="w-[1043px] flex flex-col gap-[20px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Light dark:border-primaryLighterBorder_Dark p-[24px]">
      <TextInput
        label="Title"
        placeholder="Enter station title"
        value={podcast.title}
        onChange={onChange}
        name="title"
      />
      <TextInput
        label="Description link"
        placeholder="Enter website URL"
        value={podcast.descriptionLink}
        onChange={onChange}
        name="descriptionLink"
      />
      <TextAreaInput
        label="Description"
        placeholder="Enter station description"
        value={podcast.description}
        onChange={onChange}
        name="description"
      />
      <CheckboxInput
        label="Status"
        checked={podcast.status}
        onChange={onChange}
        name="status"
      />
      <CheckboxInput
        label="Premium"
        checked={podcast.premium}
        onChange={onChange}
        name="premium"
      />
      <CheckboxInput
        label="Make Default"
        checked={podcast.makeDefault}
        onChange={onChange}
        name="makeDefault"
      />
      <CheckboxInput
        label="Visible on the Portal"
        checked={podcast.visibleOnPortal}
        onChange={onChange}
        name="visibleOnPortal"
      />
    </form>
  );
};

const ImageUploadSection = ({ file, setFile }) => {
  const handleChange = (event) => {
    const uploadedFile = URL.createObjectURL(event.target.files[0]);
    setFile(uploadedFile);
  };

  return (
    <section className="h-full flex justify-center items-center border-[1px] rounded-[8px] border-primaryBorder_Light dark:border-primaryBorder_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark">
      {file ? (
        <div className="relative">
          <img
            src={file}
            alt="Uploaded file"
            className="max-w-full h-auto rounded-[4px]"
          />
          <button
            onClick={() => setFile(null)}
            className="absolute top-[8px] right-[8px] w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Light dark:bg-errorSurface_Dark text-white p-[8px]"
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[8px]">
          <div className="border-[1px] p-[8px] rounded-[4px] border-primaryBorder_Light dark:border-primaryBorder_Dark">
            <img src={cloudUploadIcon} alt="Cloud upload" />
          </div>
          <div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-brandText_Light dark:text-brandText_Dark mr-[5px] font-medium text-mdText"
            >
              Click to upload
            </label>
            <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
              or drag and drop
            </span>
          </div>
          <div className="flex justify-center font-regular text-mdText text-secondaryText_Light dark:text-secondaryText_Dark">
            SVG, PNG, JPEG, TIFF, or GIF
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".svg, .png, .jpeg, .jpg, .tiff, .gif"
            className="hidden"
            onChange={handleChange}
          />
        </div>
      )}
    </section>
  );
};

const UploadImageButton = () => {
  return (
    <>
      <label
        htmlFor="file-upload"
        className="text-center py-[12px] px-[20px] rounded-[8px] border-solid border-[1px] text-mdText font-regular hover:cursor-pointer transition duration-500 ease-in-out dark:text-darkText_Dark text-darkText_Light border-warningSurface_Light dark:border-warningSurface_Dark dark:bg-warningSurface_Dark bg-warningSurface_Light dark:hover:border-brandHoverSurface_Dark hover:border-brandHoverSurface_Light dark:hover:bg-brandHoverSurface_Dark hover:bg-brandHoverSurface_Light"
      >
        Upload Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".svg, .png, .jpeg, .jpg, .tiff, .gif"
        className="hidden"
      />
    </>
  );
};

const ImageForm = ({ file, setFile }) => {
  return (
    <form className="w-[489px] flex flex-col gap-[20px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Light dark:border-primaryLighterBorder_Dark p-[24px]">
      <ImageUploadSection file={file} setFile={setFile} />
      <UploadImageButton />
    </form>
  );
};

const FormSection = ({ podcast, onChange, file, setFile }) => {
  return (
    <section className="flex gap-[20px]">
      <Form podcast={podcast} onChange={onChange} />
      <ImageForm file={file} setFile={setFile} />
    </section>
  );
};

const PodcastCard = ({ podcast, file, onDelete }) => {
  const card__statusBackground__Active = podcast.status
    ? "bg-successSurface_Light dark:bg-successSurface_Dark"
    : "bg-errorSurface_Light dark:bg-errorSurface_Dark ";
  const card__statusText__Active = podcast.status
    ? "text-successSurface_Light dark:text-successSurface_Dark"
    : "text-errorSurface_Light dark:text-errorSurface_Dark ";

  return (
    <>
      <div>
        <button
          onClick={onDelete}
          className="w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Light dark:bg-errorSurface_Dark p-[8px]"
        >
          <img src={deleteIcon} alt="Delete" />
        </button>
      </div>

      <Link
        to={podcast.descriptionLink}
        className="relative w-[308px] h-[180px] rounded-[8px] overflow-hidden flex-shrink-0"
      >
        <img
          className="object-cover w-full h-full rounded-[8px]"
          src={file}
          alt=""
        />

        <div className="absolute top-[12px] right-[12px] flex items-center gap-[8px] rounded-full bg-[#413F3A] bg-opacity-80 px-[8px] py-[4px]">
          <div
            className={`h-[12px] w-[12px] rounded-full ${card__statusBackground__Active}`}
          ></div>
          <div
            className={`font-medium text-smText ${card__statusText__Active}`}
          >
            {podcast.status ? "Online" : "Offline"}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-[12px] flex justify-between items-center bg-darkText_Dark bg-opacity-60">
          <h3 className="font-medium text-mdText truncate text-neutralText_Light">
            {podcast.title}
            <button className="w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Light dark:bg-errorSurface_Dark p-[8px]">
              <img src={editIcon} alt="Edit" />
            </button>
          </h3>

          <div className="flex items-center rounded-full bg-brandSurface_Dark py-[4px] px-[8px]">
            <h2 className="text-xsText font-medium">
              {podcast.premium ? "Premium" : "Free"}
            </h2>
          </div>
        </div>
      </Link>

      <ul>
      <ToggleButton/>
        <li className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
          Status: {podcast.status ? "Online" : "Offline"}
        </li>
        <li className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
          Premium: {podcast.premium ? "Premium" : "Free"}
        </li>
        <li className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
          Default: {podcast.makeDefault ? "Yes" : "No"}
        </li>
        <li className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
          Visible on Portal: {podcast.visibleOnPortal ? "Yes" : "No"}
        </li>
        <button className="w-[32px] h-[32px] rounded-[8px] bg-errorSurface_Light dark:bg-errorSurface_Dark p-[8px]">
          <img src={editIcon} alt="Edit" />
        </button>
        <li className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
          Description: {podcast.description}{" "}
        </li>
      </ul>
    </>
  );
};

export default function AddNewAlbumContent() {
  const [podcast, setPodcast] = useState({
    title: "",
    descriptionLink: "",
    description: "",
    status: false,
    premium: false,
    makeDefault: false,
    visibleOnPortal: false,
  });
  const [file, setFile] = useState(null);
  const [savedPodcast, setSavedPodcast] = useState(null);
  const [savedFile, setSavedFile] = useState(null);

  const handleChange = (name, value) => {
    setPodcast({ ...podcast, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedPodcast(podcast);
    setSavedFile(file);
    setPodcast({
      title: "",
      descriptionLink: "",
      description: "",
      status: false,
      premium: false,
      makeDefault: false,
      visibleOnPortal: false,
    });
    setFile(null);
  };

  const handleDelete = () => {
    setSavedPodcast(null);
    setSavedFile(null);
  };

  return (
    <div className="flex flex-col gap-[36px]">
      <Header onSave={handleSubmit} />
      <FormSection
        podcast={podcast}
        onChange={handleChange}
        file={file}
        setFile={setFile}
      />
      {savedPodcast && (
        <PodcastCard
          podcast={savedPodcast}
          file={savedFile}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
