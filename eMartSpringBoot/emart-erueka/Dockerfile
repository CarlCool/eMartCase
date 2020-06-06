FROM openjdk:8u252-slim-buster
# MAINTAINER name="ccdongdl"
LABEL description="emart-erueka"
# WORKDIR dockerImage
ADD target/emart-erueka-0.0.1-SNAPSHOT.jar /dockerimage/emart-erueka.jar
EXPOSE 8084
CMD java -jar /dockerimage/emart-erueka.jar