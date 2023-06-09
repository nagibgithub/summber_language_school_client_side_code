
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div>
            <div className="border-y-4 border-blue-400 md:w-1/2 md:mx-auto py-2">
            <h1 className="text-center text-3xl font-bold">{title}</h1>

            <p className="text-center">{subTitle}</p>
            </div>
        </div>
    );
};

export default SectionTitle;