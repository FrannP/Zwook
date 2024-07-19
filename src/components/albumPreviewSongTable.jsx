import React from "react";
import Avatar from "./avatar";

const AlbumSong = ({
  id,
  titleCover,
  title,
  titleSubtext,
  album,
  dateAdded,
  songTime,
}) => {
  return (
    <tr>
      <td className="px-[16px] text-left w-[50px] h-[48px]">
        <div className="flex items-center justify-center w-full h-full">
          {id}
        </div>
      </td>
      <td className="px-[16px] text-left">
        <Avatar
          fontWeight="font-regular"
          textSize="text-mdText"
          mainText={title}
          bottomText={titleSubtext}
          img={titleCover}
          imgBorder="rounded-[4px] border-[1px] border-primaryBorder_Light dark:border-primaryBorder_Dark"
          statusVisible={false}
          imgHeight="h-[40px]"
          imgWidth="w-[40px]"
        />
      </td>
      <td className="px-[16px] text-mdText font-regular text-left align-top">
        {album}
      </td>
      <td className="px-[16px] text-mdText font-regular text-left align-top">
        {dateAdded}
      </td>
      <td className="px-[16px] text-mdText font-regular text-left align-top">
        {songTime}
      </td>
    </tr>
  );
};

const TableHead = ({ text, customStyles }) => {
  return (
    <th
      className={`p-[16px] text-left font-semiBold text-smText text-secondaryText_Light dark:text-secondaryText_Dark ${customStyles}`}
    >
      {text}
    </th>
  );
};

export default function AlbumPreviewSongTable() {
  const songs = [
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
      titleCover: "src/assets/albumPreviewImages/albumCover.svg",
      title: "Lost in the Echoes",
      titleSubtext: "The Wanderers",
      album: "Shadows of the Past",
      dateAdded: "03/03/2024",
      songTime: "3:03",
    },
    {
        titleCover: "src/assets/albumPreviewImages/albumCover.svg",
        title: "Lost in the Echoes",
        titleSubtext: "The Wanderers",
        album: "Shadows of the Past",
        dateAdded: "03/03/2024",
        songTime: "3:03",
      },
      {
        titleCover: "src/assets/albumPreviewImages/albumCover.svg",
        title: "Lost in the Echoes",
        titleSubtext: "The Wanderers",
        album: "Shadows of the Past",
        dateAdded: "03/03/2024",
        songTime: "3:03",
      },
  ];

  return (
    <table className="w-full">
      <thead className="border-solid border-b-[1px] border-primaryBorder_Light dark:border-primaryBorder_Dark">
        <tr>
          <TableHead text="#" customStyles="w-[50px] h-[48px]" />
          <TableHead text="Title" customStyles="ml-[32px]" />
          <TableHead text="Album" />
          <TableHead text="Date Added" />
          <TableHead text="Song Time" />
        </tr>
      </thead>
      <tbody className="pt-[16px] before:p-[16px]">
        {songs.map((song, index) => (
          <AlbumSong
            key={index}
            id={index + 1}
            titleCover={song.titleCover}
            title={song.title}
            titleSubtext={song.titleSubtext}
            album={song.album}
            dateAdded={song.dateAdded}
            songTime={song.songTime}
          />
        ))}
      </tbody>
    </table>
  );
}
