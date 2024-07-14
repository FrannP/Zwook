const Bar = ({ color, backgroundColor, progress }) => (
    <div className={`h-[8px] w-full rounded-[360px] ${backgroundColor}`}>
        <div
        className={`h-full rounded-[360px] ${progress} ${color}`}
        ></div>
    </div>
);

export default Bar;