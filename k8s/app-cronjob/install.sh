#!/bin/bash

kubectl create namespace app
kubectl apply -f $(pwd)/k8s/app-cronjob/deployment.yaml -n app