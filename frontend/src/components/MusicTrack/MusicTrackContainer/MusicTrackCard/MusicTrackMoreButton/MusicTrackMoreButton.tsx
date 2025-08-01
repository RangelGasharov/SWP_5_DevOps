"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MusicTrack } from "@/types/MusicTrack";

type Props = {
    queueId: string;
    musicTrack: MusicTrack;
}

type Option = {
    text: string;
    action?: () => void;
};

export default function MusicTrackMoreButton({ musicTrack, queueId }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const addTrackToQueue = async (queueId: string, musicTrackId: string) => {
        const response = await fetch("/api/queue/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ queueId, musicTrackId }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Unknown error");
        }

        return await response.json();
    }

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options: Option[] = [
        {
            text: "Add to queue",
            action: () => {
                addTrackToQueue(queueId, musicTrack.id);
            },
        },
        {
            text: "Share",
            action: () => {
                console.log("Share clicked");
            },
        },
    ];

    return (
        <>
            <IconButton onClick={handleOpen} sx={{ padding: 0 }}>
                <MoreVertIcon sx={{ color: "var(--text-color)" }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                disableScrollLock
                keepMounted
                PaperProps={{
                    sx: {
                        bgcolor: "var(--cards-background-color)",
                        color: "var(--text-color)",
                        boxShadow: 3,
                        borderRadius: 1,
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.text}
                        onClick={() => {
                            option.action?.();
                            handleClose();
                        }}
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--navigation-drawer-hover-color)",
                            },
                        }}
                    >
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
