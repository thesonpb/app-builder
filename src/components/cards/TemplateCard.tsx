import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
}
function TemplateCard({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-xl border-solid border border-border xl:p-8 text-white">
      <div className="h-36">
        <h3
          className="mb-0 text-2xl font-semibold cursor-pointer"
          onClick={() => navigate(`/template/${item.name}`)}
        >
          {item.displayName}
        </h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {item.description}
        </p>
      </div>
      <img
        className="object-center object-cover cursor-pointer flex justify-center my-4 rounded-md"
        style={{ height: "300px" }}
        onClick={() => navigate(`/template/${item.name}`)}
        src={`/images/${item.coverImage}`}
        alt={item.displayName}
      />
    </div>
  );
}

export default TemplateCard;
