#!/bin/bash

docker build . -t pedroarapua/nodejs-rabbitmq:0.0.1
kind load docker-image pedroarapua/nodejs-rabbitmq:0.0.1 --name squad-admin

kubectl create namespace app
kubectl apply -f $(pwd)/k8s/producer/deployment.yaml -n app