import { useContext } from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import User from "../app/icons/User";
import Logout from "../app/icons/Logout";
import { useUser } from "../app/hooks";
import { AppContext } from "../app/context/AppContext";
import Auth from "../app/models/Auth";
import LogoIcon from "../app/icons/LogoIcon";
import { beUrl } from "../app/constants/baseUrl";

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
        <div
          className="flex gap-x-2 items-center text-textLight text-xl font-bold cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          Component Craft
        </div>
      </div>

      <div className="w-60 flex items-center gap-x-4 justify-end pr-4">
        {user?.id && (
          <Dropdown
            trigger={["click"]}
            menu={{ items: userItems }}
            placement="bottomRight"
          >
            <div>
              {user?.photos ? (
                <img
                  className="w-8 h-8 rounded-full bg-white border-none"
                  src={`${beUrl}/resources/images/${user?.photos}`}
                  alt="avatar"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-white border-none" />
              )}
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
}

export default Header;
