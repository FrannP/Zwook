const Bar = ({ color, backgroundColor, progress, height }) => (
    <div className={`${height} w-full rounded-[360px] ${backgroundColor}`}>
        <div
        className={`h-full rounded-[360px] ${progress} ${color}`}
        ></div>
    </div>
);

export default Bar;