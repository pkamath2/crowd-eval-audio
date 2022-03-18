#!/bin/bash
configfile="src/config/experiment-config.json"
config=""
while IFS= read -r line
do
    config="$config $line"
done <"$configfile"

echo $config

experiment_name=$(echo "$config" | python -c 'import json,sys;obj=json.load(sys.stdin);print(obj["experiment_name"])')
url_base=$(echo "$config" | python -c 'import json,sys;obj=json.load(sys.stdin);print(obj["url_base"])')
separator="/"

npm run build -- --base="$separator$url_base$separator$experiment_name$separator" --outDir="dist$separator$url_base$separator$experiment_name"


#Actual npm run build is --
#"build": "vite build --base=/exp2-2/ --outDir=dist/exp2-2",