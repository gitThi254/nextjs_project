type User = {
  id: string;
  name: String;
  email: String;
  password: String;
  role: "USER" | "ADMIN";
  createdAt: String;
  updateAt: String;
};

type UserUpdate = Partial<User>;

type UserLogin = Omit<User, "id" | "role" | "name" | "createdAt" | "updatedAt">;
type UserRegister = Omit<User, "id" | "role" | "createdAt" | "updatedAt">;

type Params = {
  params: { id: string };
};

type SearchQuery = {
  keyword?: string;
  select?: string;
};
