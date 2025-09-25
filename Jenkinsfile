pipeline {
    agent any

    environment {
        APP_NAME   = "videohub"
        IMAGE_NAME = "anuket68788/test"
        IMAGE_TAG  = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/aniket68788-hue/VideoHub.git'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                      echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                      docker push $IMAGE_NAME:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Cleanup Local') {
            steps {
                sh '''
                  docker rmi $IMAGE_NAME:$IMAGE_TAG || true
                  docker system prune -f
                '''
            }
        }

        stage('Deploy on Same Server') {
            steps {
                sh '''
                  echo "Fetching latest image from DockerHub..."
                  docker pull $IMAGE_NAME:$IMAGE_TAG

                  echo "Stopping old container if running..."
                  docker stop $APP_NAME || true
                  docker rm $APP_NAME || true

                  echo "Starting new container..."
                  docker run -d -p 8081:80 --name $APP_NAME $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }
}
