import { useContext } from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Heart from "../app/icons/Heart";
import User from "../app/icons/User";
import Logout from "../app/icons/Logout";
import { useUser } from "../app/hooks";
import { AppContext } from "../app/context/AppContext";
import Auth from "../app/models/Auth";

function Header() {
  const { setUser } = useContext(AppContext);
  const { user } = useUser();

  const navigate = useNavigate();
  const userItems: MenuProps["items"] = [
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/profile/${user?.id}`}>
          <User />
          <div className="text-sm font-semibold">My profile</div>
        </Link>
      ),
      key: "profile",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link className="flex gap-x-2 items-center" to={`/likes`}>
          <Heart />
          <div className="text-sm font-semibold">My likes</div>
        </Link>
      ),
      key: "likes",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          className="flex gap-x-2 items-center"
          to="#"
          onClick={async () => {
            setUser(null);
            await Auth.logout();
            navigate("/");
          }}
        >
          <Logout />
          <div className="text-sm font-semibold">Logout</div>
        </Link>
      ),
      key: "logout",
    },
  ];

  return (
    <header
      className="h-16 bg-dark sticky top-0 z-50 flex items-center justify-between"
      style={{ borderBottom: "1px solid #525866" }}
    >
      <div className="w-60 h-full flex items-center justify-center">
        <h1
          className="text-textLight text-3xl cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          LOGO
        </h1>
      </div>

      <div className="w-60 flex items-center gap-x-4 justify-end pr-4">
        {user?.id && (
          <Dropdown
            trigger={["click"]}
            menu={{ items: userItems }}
            placement="bottomRight"
          >
            <div>
              <Button className="w-8 h-8 rounded-full bg-amber-500 border-none"></Button>
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
}

export default Header;
