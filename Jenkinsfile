pipeline {
  environment {
    dockerimagename = "quangvulinh/express-app"
    dockerImage = ""
  }
  agent any
  stages {
    stage('Checkout Source') {
      steps {
        git 'https://github.com/linhnvv2/jenkins-kubernetes-deployment.git'
      }
    }
    stage('Deploying express.js container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", 
                                         "service.yaml")
        }
      }
    }
  }
}