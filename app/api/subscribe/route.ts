import { NextResponse } from 'next/server';
import { addSubscriber, getSubscriberCount } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    try {
      await addSubscriber(name, email);
      const count = getSubscriberCount();
      return NextResponse.json({ success: true, count });
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already exists') {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}