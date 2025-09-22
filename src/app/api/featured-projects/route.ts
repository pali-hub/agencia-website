import { NextResponse } from 'next/server';
import { getFeaturedProjectsAuto } from '@/lib/featuredProjectsAuto';

export async function GET() {
  try {
    const projects = getFeaturedProjectsAuto();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return NextResponse.json([], { status: 500 });
  }
}