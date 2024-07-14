const Status = ({ isVisible }) => (
    isVisible ? (
        <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-successText_Light rounded-full border-[1px] border-primarySurface_Dark"></div>
    ) : null
);


export default function Avatar({ fontWeight = 'font-semiBold', textSize = 'text-md', mainText, bottomText, img, imgBorder, statusVisible = true }) {
    return (
        <div className="flex gap-[8px]">
        <div className="relative">
        <div className={`${imgBorder}`}>
            <img className="w-[40px] h-[40px]" src={img} alt="Avatar" />
        </div>
            <Status isVisible={statusVisible} />
        </div>
        <div>
            <h3 className={`${fontWeight} ${textSize}`}>{mainText}</h3>
            <div className="text-primaryPlaceholderText_Dark font-medium text-sm">
                {bottomText}
            </div>
        </div>
    </div>
    );
  };