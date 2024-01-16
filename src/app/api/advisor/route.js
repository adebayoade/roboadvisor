import React from 'react';
import { NextResponse } from 'next/server';
import connect from '@/app/utils/db';

export const GET = async request => {
  try {
    await connect();

    return new NextResponse(JSON.stringify({ status: true }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ status: false, message: err.message }), {
      status: 500,
    });
  }
};
