#!/bin/bash

kubectl create namespace app
kubectl apply -f $(pwd)/k8s/app-rabbitmq/deployment.yaml -n app