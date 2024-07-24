import React from "react";
import Checkbox from "./Checkbox";
import TextInput from "../components/textInput";
import TextAreaInput from "./textAreaInput";

export default function form({ podcast, onChange }) {
  return (
    <form className="w-[1043px] flex flex-col gap-[20px] bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark rounded-[16px] border-[1px] border-primaryLighterBorder_Light dark:border-primaryLighterBorder_Dark p-[24px]">
      <TextInput
        label="Title"
        placeholder="Enter station title"
        value={podcast.title}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        name="title"
        type="text"
        error={false}
      />
      <TextInput
        label="Description link"
        placeholder="Enter website URL"
        value={podcast.descriptionLink}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        name="descriptionLink"
        type="text"
        error={false}
      />
      <TextAreaInput
        label="Description"
        placeholder="Enter station description"
        value={podcast.description}
        onChange={onChange}
        name="description"
      />
      <Checkbox
        label="Status"
        checked={podcast.status}
        onChange={onChange}
        name="status"
      />
      <Checkbox
        label="Premium"
        checked={podcast.premium}
        onChange={onChange}
        name="premium"
      />
      <Checkbox
        label="Make Default"
        checked={podcast.makeDefault}
        onChange={onChange}
        name="makeDefault"
      />
      <Checkbox
        label="Visible on the Portal"
        checked={podcast.visibleOnPortal}
        onChange={onChange}
        name="visibleOnPortal"
      />
    </form>
  );
}
