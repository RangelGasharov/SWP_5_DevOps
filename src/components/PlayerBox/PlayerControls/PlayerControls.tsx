"use client"
import React from 'react'
import PlayButton from './PlayButton'
import ShuffleButton from './ShuffleButton'
import FastRewindButton from './FastRewindButton'
import FastForwardButton from './FastForwardButton'
import styles from "./PlayerControls.module.css"

export default function PlayerControls() {
    return (
        <div className={styles["main-container"]}>
            <FastRewindButton />
            <PlayButton />
            <FastForwardButton />
            <ShuffleButton />
        </div>
    )
}