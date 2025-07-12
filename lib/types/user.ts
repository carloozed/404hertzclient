export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
}

export type CreateUserDto = Omit<User, "id" | "createdAt">;
export type UpdateUserDto = Partial<CreateUserDto>;
