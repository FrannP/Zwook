const Status = ({ isVisible }) =>
  isVisible ? (
    <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-successText_Light rounded-full border-[1px] border-primarySurface_Dark"></div>
  ) : null;

export default function Avatar({
  fontWeight = "font-semiBold",
  textSize = "text-mdText",
  mainText,
  bottomText,
  img,
  imgBorder,
  statusVisible = true,
  imgWidth = "w-auto",
  imgHeight = "h-auto",
}) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="relative">
        <div className={`${imgBorder}`}>
          <img className={`${imgWidth} ${imgHeight}`} src={img} alt="Avatar" />
        </div>
        <Status isVisible={statusVisible} />
      </div>
      <div>
        <h3 className={`${fontWeight} ${textSize}`}>{mainText}</h3>
        <div className="text-primaryPlaceholderText_Dark font-medium text-smText">
          {bottomText}
        </div>
      </div>
    </div>
  );
}
