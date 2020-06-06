FROM openjdk:8u252-slim-buster
# MAINTAINER name="ccdongdl"
LABEL description="emart-user"
# WORKDIR dockerImage
ADD ./target/emartuser-0.0.1-SNAPSHOT.jar /dockerimage/emart-user.jar
EXPOSE 8081
CMD java -jar /dockerimage/emart-user.jar