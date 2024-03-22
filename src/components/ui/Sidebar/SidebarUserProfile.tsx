import { useAppSelector } from "hooks";
import { selectUser } from "store/slices";

const SidebarUserProfile = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className="flex gap-4 items-center">
      <img
        className="w-14"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="profile-pic"
      />
      <div>
        <p className="font-bold">{user?.alias}</p>
        <p className="text-sm text-light-4">@{user?.username}</p>
      </div>
    </div>
  );
};
export default SidebarUserProfile;
