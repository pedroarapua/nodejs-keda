#!/bin/bash

#kubectl apply -f https://github.com/kedacore/keda/releases/download/v2.9.0/keda-2.9.0.yaml

helm repo add kedacore https://kedacore.github.io/charts 
helm repo update 
kubectl create namespace keda 
helm install keda kedacore/keda --namespace keda