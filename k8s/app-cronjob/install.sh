#!/bin/bash

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

kubectl create namespace app
kubectl apply -f $dir_path/../../k8s/app-cronjob/deployment.yaml -n app