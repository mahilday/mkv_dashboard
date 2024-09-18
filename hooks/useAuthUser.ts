

const useAuthUser = () => {
  const userAvatar = "https://avatar.iran.liara.run/public/65";
  const userFullName = "Mathilda Imadojiemu";
  const firstName = userFullName.split(" ")[0];
  const lastName = userFullName.split(" ")[1];
  return {
    userAvatar,
    userFullName,
    firstName,
    lastName,
  };
};

export default useAuthUser;
