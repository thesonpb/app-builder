import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
}
function TemplateCard({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3
        className="mb-0 text-2xl font-semibold cursor-pointer"
        onClick={() => navigate(`/page/${item.username}/${item.pagename}`)}
      >
        Name Website
      </h3>
      <h4
        className="mt-4 text-xl text-gray-400 mb-4 font-normal"
        onClick={() => navigate(`/profile/${item.username}`)}
      >
        Author name
      </h4>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Description about this website
      </p>
      <div
        className="flex justify-center items-baseline my-4 bg-amber-400 rounded-md"
        style={{ minHeight: "300px" }}
        onClick={() => navigate(`/page/${item.username}/${item.pagename}`)}
      ></div>
    </div>
  );
}

export default TemplateCard;
