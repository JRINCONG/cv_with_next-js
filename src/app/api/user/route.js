import { NextResponse } from 'next/server';

const {getAll} =require('../controllers/user.controllers')
const express = require('express');

export default  async function GET(){

    const resuls = await getAll
    return NextResponse.json(resuls)

}