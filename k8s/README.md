# Criação do Cluster Kubernetes #
kind create cluster --name squad-admin --image kindest/node:v1.23.13

# Setup Keda #
./keda/install.sh
watch kubectl get all -n keda

# Keda Rabbit Scale #
## Setup Rabbit ##
- ./rabbitmq/install.sh
- kubectl port-forward --namespace rabbitmq svc/rabbitmq 15672:15672
- Validar o acesso ao rabbitmq no endereço http://localhost:15672 (user: admin, password: admin)

## Setup Producer and Creating a Queue ##
- ./producer/install.sh
- kubectl logs -f -n app -l app=nodejs-producer-worker
- Validar se a fila foi criada no rabbitmq na interface
- kubectl delete ns app

## Setup Fake Consumer ##
- ./app-rabbitmq/install.sh
- watch kubectl get pods -n app
- validar se subiu 1 pod, 5 mensagem por pod.
- criar mais 5 mensagens e validar se criou mais um pod
- - kubectl delete ns app

# Keda Cron Scale #
## Setup Fake Deploy ##
- ./app-cronjob/install.sh
- watch kubectl get pods -n app
- validar se tem apenas um pod rodando
- alterar a janela de tempo para o horário vigente
- ./app-cronjob/install.sh

