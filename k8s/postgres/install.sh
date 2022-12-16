#!/bin/bash

kubectl create namespace postgres
kubectl apply -f $(pwd)/k8s/postgres/configmap.yaml -n postgres
kubectl apply -f $(pwd)/k8s/postgres/storage.yaml -n postgres