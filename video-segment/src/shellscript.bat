@echo off

REM Script to demonstrate passing parameters to a batch file

echo Hello, %1!
echo Your age is %2
echo ffmpeg -i %1 -vf scale=1280:720 -c:a copy %2

ffmpeg -i %1 -vf scale=1280:720 -c:a copy %2


