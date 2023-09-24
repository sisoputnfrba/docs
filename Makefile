TAG := sisoputnfrba/docs
NAME := sisop-docs

PORT != grep EXPOSE Dockerfile | tail -n1 | cut -d' ' -f2
WORKDIR != grep WORKDIR Dockerfile | tail -n1 | cut -d' ' -f2

all: build run

build:
	docker build . --rm -t $(TAG) --build-arg UID=$(shell id -u) --build-arg GID=$(shell id -g)

run:
	docker run --rm -it -t --init -p$(PORT):$(PORT) -v ./docs:$(WORKDIR)/docs --name $(NAME) $(TAG)

clean:
	-docker rmi $(TAG)

exec:
	docker exec -it $(NAME) /bin/ash

.PHONY: all build run clean exec
