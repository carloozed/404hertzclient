import {
  deleteUser,
  getUserById,
  updateUser,
} from '../../../../../lib/api/users';
import { UpdateUserDto } from '../../../../../lib/types/user';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUserById(params.id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data: UpdateUserDto = await request.json();
    const user = await updateUser(params.id, data);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error('PATCH /api/users/[id] error:', error);
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const deleted = await deleteUser(params.id);
  if (!deleted) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
