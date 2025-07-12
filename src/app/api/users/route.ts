import { NextResponse } from 'next/server';
import { createUser, getUsers } from '../../../../lib/api/users';
import { CreateUserDto } from '../../../../lib/types/user';

// GET all users

export async function GET() {
  const users = await getUsers();
  return NextResponse.json(users);
}

// create new use

export async function POST(request: Request) {
  try {
    const data: CreateUserDto = await request.json();
    const user = await createUser(data);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('POST /api/users error:', error);
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}
