import qs from "qs";

export const getAllUsers = async (
  searchParams?: SearchQuery
): Promise<User[]> => {
  const urlParams = {
    keyword: searchParams?.keyword,
    select: searchParams?.select,
  };
  console.log(searchParams);
  const searchQuery = qs.stringify(urlParams, { encode: false });
  return await fetch(
    `http://localhost:3000/api/auth/users?${searchQuery}`
  ).then((res) => res.json());
};

export const getUser = async (id: string): Promise<User> =>
  await fetch(`http://localhost:3000/api/auth/users/${id}`).then((res) =>
    res.json()
  );

export const createUser = async (user: UserRegister) =>
  await fetch(`http://localhost:3000/api/auth/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

export const deleteUser = async (id: string) =>
  await fetch(`http://localhost:3000/api/auth/users?id=${id}`, {
    method: "DELETE",
  });

export const updateUser = async ({
  id,
  data,
}: {
  id: string;
  data: UserUpdate;
}) =>
  await fetch(`http://localhost:3000/api/auth/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
