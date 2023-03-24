import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../app/hooks";
import MyProfile from "./MyProfile";
import CommunityProfile from "./CommunityProfile";

function Profile() {
  const { id } = useParams();
  const { user } = useUser();

  return user?.id === Number(id) ? (
    <MyProfile id={Number(id)} />
  ) : (
    <CommunityProfile id={Number(id)} />
  );
}

export default Profile;
