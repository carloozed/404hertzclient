import { User, CreateUserDto, UpdateUserDto } from '../types/user';

// Simulated database
let users: User[] = [];

export async function getUsers(): Promise<User[]> {
  return users;
}

export async function getUserById(id: string): Promise<User | null> {
  return users.find(user => user.id === id) || null;
}

export async function createUser(data: CreateUserDto): Promise<User> {
  const user: User = {
    id: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString(),
    ...data
  };
  users.push(user);
  return user;
}

export async function updateUser(id: string, data: UpdateUserDto): Promise<User | null> {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  
  users[index] = { ...users[index], ...data };
  return users[index];
}

export async function deleteUser(id: string): Promise<boolean> {
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length !== initialLength;
}