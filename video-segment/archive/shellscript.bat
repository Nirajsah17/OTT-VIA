@REM @echo off

@REM REM Script to demonstrate passing parameters to a batch file


@REM set word1=.mp4

@REM setlocal enabledelayedexpansion



@REM set array[0]=1280:720
@REM set array[1]=720:480
@REM set array[2]=480:360

@REM set array2[0]=720
@REM set array2[1]=420
@REM set array2[2]=360

@REM for /L %%i in (0,1,2) do (

@REM set index=%%i
@REM echo !index!

@REM set element=!array[%%i]!
@REM set pixel=!array2[%%i]!

@REM echo ffmpeg -i %1 -vf scale=!element! -c:a copy %2!pixel!!word1!
@REM      ffmpeg -i %1 -vf scale=!element! -c:a copy %2!pixel!!word1!


@REM @REM   echo ffmpeg -i %1 -vf scale=%element% -c:a copy %2
@REM @REM   ffmpeg -i %1 -vf scale=!element! -c:a copy %2
   
@REM )
@REM @RD /S /Q "D:\streamClone\path\tmp"


@REM **************************************************************


#!/bin/bash

# Script to demonstrate passing parameters to a shell script

word1=".mp4"

array=("1280:720" "720:480" "480:360")
array2=("720" "420" "360")

for i in "${!array[@]}"; do
    index=$i
    echo $index

    element=${array[i]}
    pixel=${array2[i]}

    echo "ffmpeg -i $1 -vf scale=$element -c:a copy $2$pixel$word1"
    ffmpeg -i $1 -vf scale=$element -c:a copy $2$pixel$word1

done

@REM rm -rf "/home/robin/OTT-VIA/video-segment/src"
