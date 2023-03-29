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



