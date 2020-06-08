FROM openjdk:8u252-slim-buster
# MAINTAINER name="ccdongdl"
LABEL description="emart-transaction"
# WORKDIR dockerImage
ADD ./target/emart-transaction-0.0.1-SNAPSHOT.jar /dockerimage/emart-transaction.jar
EXPOSE 8083
CMD java -jar /dockerimage/emart-transaction.jar