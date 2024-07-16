import React from "react";
import FeaturedAlbumContainer from "./featuredAlbumContainer";
import AlbumPreviewSongTable from "./albumPreviewSongTable";

export default function albumPreviewContent() {
  return (
    <div className="flex flex-col gap-[30px]">
      <FeaturedAlbumContainer />
      <section>
        <AlbumPreviewSongTable/>
      </section>
    </div>
  );
}
