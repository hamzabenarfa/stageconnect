# Use the official Maven image as a base image
FROM maven:3.8.4-openjdk-17-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project file
COPY pom.xml .

# Copy the source code
COPY src src

# Build the application
RUN mvn clean package

# Use the official OpenJDK image as a base image for runtime
FROM adoptopenjdk:21-jdk-hotspot-bionic AS runtime

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build image
COPY --from=build /app/target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
