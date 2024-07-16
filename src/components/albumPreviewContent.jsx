import React from "react";
import FeaturedAlbumCard from "./featuredAlbumCard";
import AlbumPreviewSongTable from "./albumPreviewSongTable";

export default function albumPreviewContent() {
  return (
    <div className="flex flex-col gap-[30px]">
      <FeaturedAlbumCard />
      <section>
        <AlbumPreviewSongTable/>
      </section>
    </div>
  );
}
