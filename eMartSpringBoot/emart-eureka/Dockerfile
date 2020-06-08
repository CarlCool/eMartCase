FROM openjdk:8u252-slim-buster
# MAINTAINER name="ccdongdl"
LABEL description="emart-eureka"
# WORKDIR dockerImage
ADD target/emart-eureka-0.0.1-SNAPSHOT.jar /dockerimage/emart-eureka.jar
EXPOSE 8084
CMD java -jar /dockerimage/emart-eureka.jar