FROM openjdk:8u252-slim-buster
# MAINTAINER name="ccdongdl"
LABEL description="emart-item"
# WORKDIR dockerImage
ADD ./target/emart-item-0.0.1-SNAPSHOT.jar /dockerimage/emart-item.jar
EXPOSE 8082
CMD java -jar /dockerimage/emart-item.jar