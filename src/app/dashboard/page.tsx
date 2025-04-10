"use client"
import React from 'react';
import { useStore } from '@/store/store';
import { Box, Button } from '@mui/material';

export default function DashboardPage() {
    const { count, incrementCount, resetCount } = useStore();
    return (
        <Box>
            <h1>Dashboard</h1>
            <p>Count: {count}</p>
            <Button onClick={incrementCount}>Increment</Button>
            <Button onClick={resetCount}>Reset</Button>
        </Box>
    )
}