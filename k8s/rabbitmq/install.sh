#!/bin/bash

helm repo add bitnami https://charts.bitnami.com/bitnami
kubectl create namespace rabbitmq
helm install rabbitmq --set auth.username=admin,auth.password=admin,auth.erlangCookie=secretcookie bitnami/rabbitmq --namespace rabbitmq
