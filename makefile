TAG := sisoputnfrba/docs
IDS != docker ps | grep $(TAG) | awk '{ print $$1 }'

all: build run

build:
	docker build . --rm -t $(TAG) --build-arg UID=$(shell id -u) --build-arg GID=$(shell id -g)

run:
	docker run --init -p5173:5173 -v ./docs:/home/workspace/docs $(TAG)

stop:
	echo $(IDS) | tr ' ' '\n' | xargs --no-run-if-empty docker stop

clean:
	-docker rmi $(TAG)
	-docker image prune

exec:
	docker exec -it $(word 1,$(IDS)) /bin/ash

logs:
	docker logs $(word 1,$(IDS)) -f

.PHONY: all build run stop clean exec logs
