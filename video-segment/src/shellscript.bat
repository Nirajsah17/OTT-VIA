@echo off

REM Script to demonstrate passing parameters to a batch file


set word1=.mp4

setlocal enabledelayedexpansion



set array[0]=1280:720
set array[1]=720:480
set array[2]=480:360

set array2[0]=720
set array2[1]=420
set array2[2]=360

for /L %%i in (0,1,2) do (

set index=%%i
echo !index!

set element=!array[%%i]!
set pixel=!array2[%%i]!

echo ffmpeg -i %1 -vf scale=!element! -c:a copy %2!pixel!!word1!
     ffmpeg -i %1 -vf scale=!element! -c:a copy %2!pixel!!word1!


@REM   echo ffmpeg -i %1 -vf scale=%element% -c:a copy %2
@REM   ffmpeg -i %1 -vf scale=!element! -c:a copy %2
   
)
@RD /S /Q "D:\streamClone\path\tmp"
