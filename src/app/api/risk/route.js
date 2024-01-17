import React from 'react';
import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Risk from '@/models/Risk';

export async function GET(request) {
  try {
    await connect();

    const riskTolenrance = await Risk.find();

    return new NextResponse(JSON.stringify({ status: true, riskTolenrance }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ status: false, message: err.message }), {
      status: 500,
    });
  }
}
