run: docker-rebuild clean
	docker run -d --name="service-sample" -p 8080:8080 dimitry12/service-sample
clean:
	-docker stop service-sample
	-docker rm -f service-sample
docker-rebuild:
	docker build -t dimitry12/service-sample ./src
