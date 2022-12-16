#!/bin/bash

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

docker build $dir_path/../../. -t pedroarapua/nodejs-rabbitmq:0.0.1
kind load docker-image pedroarapua/nodejs-rabbitmq:0.0.1 --name squad-admin

kubectl create namespace app
kubectl apply -f $dir_path/../../k8s/producer/deployment.yaml -n app